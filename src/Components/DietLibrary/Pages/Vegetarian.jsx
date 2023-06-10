import { Box, Button, Card, CardBody, Grid, GridItem, Heading, Image, Stack, Text } from '@chakra-ui/react'
import { React, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css';

const Vegetarian = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false
    })
  }, [])

  return (
    <Grid templateColumns="repeat(6,1fr)" bg="white">
      <GridItem
        data-aos="fade-right"
        className='hidden'
        as="main"
        colSpan={{ base: 6, lg: 6, xl: 6 }}
        p={{ base: "0rem", md: "3rem", xl: "3rem" }}
      >
        <Box maxW='64rem'>
          <Heading mb={4} fontSize='3.5rem'>Vegetarian Diet Features</Heading>
          <br />
          <Text fontSize='xl'>
            The articles below discuss Nutrition, Weight Control, Diabetes and provide valuable tips for losing weight healthily.
          </Text>

        </Box>
      </GridItem>

      {/* the side heading of the tabel */}
      <GridItem
        data-aos="fade-right"
        className='hidden'
        as="main"
        colSpan={{ base: 6, lg: 6, xl: 6 }}
        p={{ base: "0rem", md: "3rem", xl: "3rem" }}
      >
        <br />
        <br />
        <Box maxW='64rem'>
          <Heading mb={4} fontSize='3rem'> Getting Started</Heading>

        </Box>
      </GridItem>

      {/*first three cards  */}
      <GridItem
        className='hidden'
        data-aos="fade-up"
        as="main"
        colSpan={{ base: 6, lg: 6, xl: 3 }}
        p={{ base: "1rem", md: "1rem 3rem 1rem 11rem", xl: "3rem" }}
      >
        <Box maxW='64rem'>
          <Card maxW='sm'
            bg="white"
            borderTop="8px"
            borderColor="purple.400"
          >
            <CardBody>
              <Image
                src=""
                alt='Green double couch with wooden legs'
                borderRadius='lg'
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md'>Starting a vegetarian diet? Follow these steps to get maximum benefits</Heading>
                <Text>
                  It is essential toa have a roadmap for a healthy and balanced vegetarian plan.                </Text>
                <Button size='md' colorScheme='purple' mt='24px'
                >
                  Read More !
                </Button>
              </Stack>
            </CardBody>

          </Card>

        </Box>
      </GridItem>
      <GridItem
        className='hidden'
        data-aos="fade-up"
        as="main"
        colSpan={{ base: 6, lg: 6, xl: 3 }}
        p={{ base: "1rem", md: "1rem 3rem 1rem 11rem", xl: "3rem" }}
      >
        <Box maxW='64rem'>
          <Card maxW='sm'
            bg="white"
            borderTop="8px"
            borderColor="purple.400"
          >
            <CardBody>
              <Image
                src=""
                alt='Green double couch with wooden legs'
                borderRadius='lg'
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md'>6 Essential nutrients for vegetarians</Heading>
                <Text>
                  Thinking about a Vegetarian diet? Here are the six most important nutrients for vegan and the supplements you might need .
                </Text>
                <Button size='md' colorScheme='purple' mt='24px'
                >
                  Read More!
                </Button>
              </Stack>
            </CardBody>

          </Card>

        </Box>
      </GridItem>
      <GridItem
        className='hidden'
        data-aos="fade-up"
        as="main"
        colSpan={{ base: 6, lg: 6, xl: 3 }}
        p={{ base: "1rem", md: "1rem 3rem 1rem 11rem", xl: "3rem" }}
      >
        <Box maxW='64rem'>
          <Card maxW='sm'
            bg="white"
            borderTop="8px"
            borderColor="purple.400"
          >
            <CardBody>
              <Image
                src=""
                alt='Green double couch with wooden legs'
                borderRadius='lg'
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md'>Do Vegetarian diets give you enough protein </Heading>
                <Text>
                  Wondering if you can meet your protein needs from a vegetarian diet?Yes, you you can, and here's how!.                </Text>
                <Button size='md' colorScheme='purple' mt='24px'
                >
                  Read More!
                </Button>
              </Stack>
            </CardBody>

          </Card>

        </Box>
      </GridItem>
      <GridItem
        className='hidden'
        data-aos="fade-up"
        as="main"
        colSpan={{ base: 6, lg: 6, xl: 3 }}
        p={{ base: "1rem", md: "1rem 3rem 1rem 11rem", xl: "3rem" }}
      >
        <Box maxW='64rem'>
          <Card maxW='sm'
            bg="white"
            borderTop="8px"
            borderColor="purple.400"
          >
            <CardBody>
              <Image
                src=""
                alt='Green double couch with wooden legs'
                borderRadius='lg'
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md'>How to prevent Diabetes naturally</Heading>
                <Text>
                  Learn how to prevent a type 2 Diabetes naturally by incorporating a plant based diet.
                </Text>
                <Button size='md' colorScheme='purple' mt='24px'
                >
                  Read More!
                </Button>
              </Stack>
            </CardBody>

          </Card>

        </Box>
      </GridItem>


    </Grid>
  )
}

export default Vegetarian