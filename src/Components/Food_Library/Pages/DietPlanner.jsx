import { useState } from 'react';
import {
  ChakraProvider,
  Box,
  Flex,
  Heading,
  Button,
  Input,
  VStack,
  Text,
  IconButton,
  CloseButton,
  Tabs,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';

function MealPlanner() {
  const [oneDayMeals, setOneDayMeals] = useState({ breakfast: '', lunch: '', dinner: '' });
  const [weeklyMeals, setWeeklyMeals] = useState([]);

  const addMeal = () => {
    setWeeklyMeals([...weeklyMeals, { breakfast: '', lunch: '', dinner: '' }]);
  };

  const updateOneDayMeal = (mealType, value) => {
    setOneDayMeals({ ...oneDayMeals, [mealType]: value });
  };

  const updateWeeklyMeal = (index, mealType, value) => {
    const updatedMeals = [...weeklyMeals];
    updatedMeals[index][mealType] = value;
    setWeeklyMeals(updatedMeals);
  };

  const removeMeal = (index) => {
    const updatedMeals = [...weeklyMeals];
    updatedMeals.splice(index, 1);
    setWeeklyMeals(updatedMeals);
  };

  return (
    <Box p={4}>
      <Flex direction="column" align="center" justify="center">
        <Heading as="h1" size="lg" mb={4}>
          Meal Planner
        </Heading>
        <Tabs variant="enclosed">
          <TabList>
            <Tab>One Day Plan</Tab>
            <Tab>One Week Plan</Tab>
          </TabList>
          <TabPanels mt={4}>
            <TabPanel>
              <VStack spacing={4} width="100%">
                <Flex align="center" width="100%">
                  <Text fontWeight="bold" flex="0 0 30%">
                    Breakfast:
                  </Text>
                  <Input
                    value={oneDayMeals.breakfast}
                    onChange={(e) => updateOneDayMeal('breakfast', e.target.value)}
                    placeholder="Enter breakfast"
                    width="100%"
                    marginLeft={2}
                  />
                </Flex>
                <Flex align="center" width="100%">
                  <Text fontWeight="bold" flex="0 0 30%">
                    Lunch:
                  </Text>
                  <Input
                    value={oneDayMeals.lunch}
                    onChange={(e) => updateOneDayMeal('lunch', e.target.value)}
                    placeholder="Enter lunch"
                    width="100%"
                    marginLeft={2}
                  />
                </Flex>
                <Flex align="center" width="100%">
                  <Text fontWeight="bold" flex="0 0 30%">
                    Dinner:
                  </Text>
                  <Input
                    value={oneDayMeals.dinner}
                    onChange={(e) => updateOneDayMeal('dinner', e.target.value)}
                    placeholder="Enter dinner"
                    width="100%"
                    marginLeft={2}
                  />
                </Flex>
              </VStack>
            </TabPanel>
            <TabPanel>
              <VStack mt={4} spacing={4} width="100%">
                {weeklyMeals.map((meal, index) => (
                  <Box
                    key={index}
                    borderWidth="1px"
                    borderRadius="md"
                    p={4}
                    width="100%"
                    maxW="400px"
                  >
                    <Text fontWeight="bold" mb={2}>
                      Day {index + 1}:
                    </Text>
                    <Flex align="center" width="100%">
                      <Text fontWeight="bold" flex="0 0 30%">
                        Breakfast:
                      </Text>
                      <Input
                        value={meal.breakfast}
                        onChange={(e) => updateWeeklyMeal(index, 'breakfast', e.target.value)}
                        placeholder="Enter breakfast"
                        width="100%"
                        marginLeft={2}
                      />
                    </Flex>
                    <Flex align="center" mt={2} width="100%">
                      <Text fontWeight="bold" flex="0 0 30%">
                        Lunch:
                      </Text>
                      <Input
                        value={meal.lunch}
                        onChange={(e) => updateWeeklyMeal(index, 'lunch', e.target.value)}
                        placeholder="Enter lunch"
                        width="100%"
                        marginLeft={2}
                      />
                    </Flex>
                    <Flex align="center" mt={2} width="100%">
                      <Text fontWeight="bold" flex="0 0 30%">
                        Dinner:
                      </Text>
                      <Input
                        value={meal.dinner}
                        onChange={(e) => updateWeeklyMeal(index, 'dinner', e.target.value)}
                        placeholder="Enter dinner"
                        width="100%"
                        marginLeft={2}
                      />
                    </Flex>
                    <IconButton
                      icon={<CloseButton />}
                      onClick={() => removeMeal(index)}
                      aria-label="Remove Meal"
                      alignSelf="flex-end"
                      mt={2}
                    />
                  </Box>
                ))}
                <Button
                  leftIcon={<AddIcon />}
                  colorScheme="teal"
                  variant="outline"
                  onClick={addMeal}
                >
                  Add Meal
                </Button>
              </VStack>
            </TabPanel>
          </TabPanels>
        </Tabs>
        {weeklyMeals.length > 0 && (
          <Box mt={4} width="100%" maxW="400px">
            <Text fontWeight="bold" mb={2}>
              Meal Plan:
            </Text>
            <VStack mt={2} align="start" spacing={2} width="100%">
              {weeklyMeals.map((meal, index) => (
                <Box key={index} borderWidth="1px" borderRadius="md" p={2} width="100%">
                  <Text fontWeight="bold">Day {index + 1}:</Text>
                  <Text>Breakfast: {meal.breakfast}</Text>
                  <Text>Lunch: {meal.lunch}</Text>
                  <Text>Dinner: {meal.dinner}</Text>
                </Box>
              ))}
            </VStack>
          </Box>
        )}
      </Flex>
    </Box>
  );
}

function App() {
  return (
    <ChakraProvider>
      <MealPlanner />
    </ChakraProvider>
  );
}

export default App;
