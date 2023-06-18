import { useState } from 'react';
import { Box, FormControl, FormLabel, Input, Button, Heading, Text, List, ListItem, ListIcon } from '@chakra-ui/react';
// import{MdCheckCircle} from '@chakra-ui/react-icons';
import { MdCheckCircle } from "react-icons/md"; 




const DietPlanGenerator = () => {
    const [calories, setCalories] = useState('');
    const [dietPlan, setDietPlan] = useState([]);

    const generateDietPlan = () => {
        // Perform calculations and generate diet plan based on calorie requirements
        // You can use any algorithm or library that suits your needs
        // This example generates a simple plan with fixed macronutrient ratios
        const protein = (calories * 0.3) / 4; // 30% of calories from protein
        const carbs = (calories * 0.4) / 4; // 40% of calories from carbs
        const fat = (calories * 0.3) / 9; // 30% of calories from fat

        const plan = [
            { name: 'Protein', amount: `${protein.toFixed(1)} grams` },
            { name: 'Carbs', amount: `${carbs.toFixed(1)} grams` },
            { name: 'Fat', amount: `${fat.toFixed(1)} grams` },
        ];

        setDietPlan(plan);
    };

    return (
        <Box p={4}>
            <Heading mb={4}>Diet Plan Generator</Heading>
            <FormControl mb={4}>
                <FormLabel>Calories</FormLabel>
                <Input
                    type="number"
                    placeholder="Enter daily calorie requirement"
                    value={calories}
                    onChange={(e) => setCalories(e.target.value)}
                />
            </FormControl>
            <Button colorScheme="blue" onClick={generateDietPlan}>
                Generate Diet Plan
            </Button>
            {dietPlan.length > 0 && (
                <Box mt={4}>
                    <Heading size="md">Diet Plan</Heading>
                    {dietPlan.map((item) => (
                        <Text key={item.name}>
                            <List spacing={3}>
                                <ListItem>
                                    <ListIcon as={MdCheckCircle} color='green.500' />
                                    {item.name}: {item.amount}
                                </ListItem>
                            </List>
                        </Text>
                    ))}
                </Box>
            )}
        </Box>
    );
};

export default DietPlanGenerator;
