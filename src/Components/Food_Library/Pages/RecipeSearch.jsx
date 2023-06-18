import { useState } from 'react';
import { Box, FormControl, FormLabel, Input, Button, Heading, Text } from '@chakra-ui/react';

const RecipeSearch = () => {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);

  const searchRecipes = async () => {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${query}`);
      const data = await response.json();
      setRecipes(data.results);
    } catch (error) {
      console.error('Error searching recipes:', error);
    }
  };

  return (
    <Box p={4}>
      <Heading mb={4}>Recipe Search</Heading>
      <FormControl mb={4}>
        <FormLabel>Search Query</FormLabel>
        <Input
          type="text"
          placeholder="Enter your recipe search query"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </FormControl>
      <Button colorScheme="blue" onClick={searchRecipes}>
        Search
      </Button>
      {recipes.length > 0 && (
        <Box mt={4}>
          <Heading size="md">Search Results</Heading>
          {recipes.map((recipe) => (
            <Text key={recipe.id}>{recipe.title}</Text>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default RecipeSearch;
