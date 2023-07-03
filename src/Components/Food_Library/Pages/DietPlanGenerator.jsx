import { useState } from 'react';
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Textarea,
  Button,
  Text,
  Alert,
  AlertIcon,
  AlertDescription,
} from '@chakra-ui/react';
import axios from 'axios';

const DietPlanner = () => {
  const [dietPlannerText, setDietPlannerText] = useState('');
  const [error, setError] = useState('');

  const generateDietPlanner = async (userInput) => {
    try {
      const response = await axios.post(
        'https://api.openai.com/v1/engines/davinci/completions',
        {
          prompt: `As a diet planner, create a meal plan for a person with the following preferences: ${userInput}`,
          max_tokens: 100,
          temperature: 0.7,
          n: 1,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ',
          },
        }
      );

      if (response.data && response.data.choices && response.data.choices.length > 0) {
        const generatedText = response.data.choices[0].text.trim();
        setDietPlannerText(generatedText);
        setError('');
      } else {
        setError('Error occurred while generating the diet planner. Please try again.');
      }
    } catch (error) {
      console.error('Error generating diet planner:', error);
      setError('An error occurred while generating the diet planner. Please try again.');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const userInput = event.target.userInput.value;

    if (userInput.trim() === '') {
      setError('Please enter your dietary preferences, restrictions, etc.');
    } else {
      generateDietPlanner(userInput);
    }
  };

  return (
    <Box p={4}>
      <Heading mb={4}>Diet Planner</Heading>

      <form onSubmit={handleSubmit}>
        <FormControl isRequired>
          <FormLabel>Dietary Preferences, Restrictions, etc.</FormLabel>
          <Textarea name="userInput" placeholder="Enter your dietary preferences, restrictions, etc." />
        </FormControl>

        {error && (
          <Alert status="error" mt={4}>
            <AlertIcon />
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        <Button type="submit" mt={4} colorScheme="teal">
          Generate Diet Planner
        </Button>
      </form>

      {dietPlannerText && (
        <Box mt={4}>
          <Text>{dietPlannerText}</Text>
        </Box>
      )}
    </Box>
  );
};

export default DietPlanner;
