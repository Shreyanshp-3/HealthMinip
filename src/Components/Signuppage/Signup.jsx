import { Box, Button, ChakraProvider, FormControl, FormErrorMessage, FormLabel, Input, VStack } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

const SignupForm = () => {
  const { handleSubmit, register, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Box p={4}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack spacing={4} align="stretch">
          <FormControl isInvalid={errors.name}>
            <FormLabel htmlFor="name">Name</FormLabel>
            <Input type="text" id="name" {...register('name', { required: 'Name is required' })} />
            <FormErrorMessage>{errors.name && errors.name.message}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={errors.email}>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input type="email" id="email" {...register('email', { required: 'Email is required' })} />
            <FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={errors.password}>
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input type="password" id="password" {...register('password', { required: 'Password is required' })} />
            <FormErrorMessage>{errors.password && errors.password.message}</FormErrorMessage>
          </FormControl>

          <Button type="submit" colorScheme="blue" mt={4} w="100%">
            Sign Up
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

const App = () => {
  return (
    <ChakraProvider>
      <SignupForm />
    </ChakraProvider>
  );
};

export default App;
