import React, { useState } from 'react';
import {
    Box,
    Heading,
    Text,
    RadioGroup,
    Radio,
    Stack,
    Button,
    Alert,
    AlertIcon,
} from '@chakra-ui/react';

const questions = [
    {
        question: 'What is the problem?',
        options: ['heart', 'lungs', 'ears', 'eyes'],
        answer: 'heart',
    },
    {
        question: 'Which part is paining',
        options: ['hand', 'leg', 'finger', 'back'],
        answer: 'back',
    },
    // Add more questions here
];

const Rough = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [showResult, setShowResult] = useState(false);
    const [score, setScore] = useState(0);

    const handleOptionChange = (value) => {
        setSelectedOption(value);
    };

    const handleNextQuestion = () => {
        const currentQuestion = questions[currentQuestionIndex];
        if (selectedOption === currentQuestion.answer) {
            setScore(score + 1);
        }

        setSelectedOption(null);
        if (currentQuestionIndex + 1 < questions.length) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            setShowResult(true);
        }
    };

    const restartQuiz = () => {
        setCurrentQuestionIndex(0);
        setSelectedOption(null);
        setShowResult(false);
        setScore(0);
    };

    const currentQuestion = questions[currentQuestionIndex];

    return (
        <Box maxW="500px" mx="auto" p="4">
            <Heading as="h1" mb="4">
                Multiple Choice Questions
            </Heading>

            {showResult ? (
                <Box>
                    <Alert status="info" mb="4">
                        <AlertIcon />
                        Quiz completed! Your score is {score} out of {questions.length}.
                    </Alert>
                    <Button onClick={restartQuiz}>Restart Quiz</Button>
                </Box>
            ) : (
                <Box>
                    <Text mb="4">
                        Question {currentQuestionIndex + 1}/{questions.length}
                    </Text>
                    <Text fontWeight="bold" mb="4">
                        {currentQuestion.question}
                    </Text>
                    <RadioGroup onChange={handleOptionChange} value={selectedOption}>
                        <Stack>
                            {currentQuestion.options.map((option) => (
                                <Radio key={option} value={option}>
                                    {option}
                                </Radio>
                            ))}
                        </Stack>
                    </RadioGroup>
                    <Button
                        mt="4"
                        disabled={selectedOption === null}
                        onClick={handleNextQuestion}
                    >
                        {currentQuestionIndex === questions.length - 1
                            ? 'Finish Quiz'
                            : 'Next Question'}
                    </Button>
                </Box>
            )}
        </Box>
    );
};

export default Rough;
