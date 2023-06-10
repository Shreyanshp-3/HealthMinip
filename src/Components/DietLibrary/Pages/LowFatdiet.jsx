import { Box, Button, Card, CardBody, Grid, GridItem, Heading, Image, Stack, Text } from '@chakra-ui/react'
import { React, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css';

const LowFatdiet = () => {
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
          <Heading mb={4} fontSize='3.5rem'>Low Fat Diet Features</Heading>
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
                <Heading size='md'>Starting a low fat eating plan? 6 steps for success</Heading>
                <Text>
                  Whether you are following a low fat diet for weight loss, My health diary is here to help you...
                </Text>
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
                <Heading size='md'>Dietary fats</Heading>
                <Text>
                  Learn about the different types of fats and how to make healthier food choices.
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
                <Heading size='md'>Plate method for meal planning </Heading>
                <Text>
                  Try this fool proof method for limiting extra fats and calories.
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
                <Heading size='md'>Want to cook without oil? How to ditch the oil for every cooking method</Heading>
                <Text>
                  Believe or not, its not hard to cook without oil.Here are out best tips and tricks                </Text>
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
                <Heading size='md'>Say no to bland food</Heading>
                <Text>
                  Try these tips for cooking with herbs and spices.
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
                <Heading size='md'>How to make healthy home cooking easier</Heading>
                <Text>
                  Set up your kitchen for success!
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

export default LowFatdiet