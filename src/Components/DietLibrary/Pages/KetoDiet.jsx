import { Box, Button, Card, CardBody, Grid, GridItem, Heading, Image, Stack, Text } from '@chakra-ui/react'
import { React, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css';

const KetoDiet = () => {
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
          <Heading mb={4} fontSize='3.5rem'>Keto Diet Features</Heading>
          <br />
          <Text fontSize='xl'>
            The articles below will help you be successful on your keto plan, learn about nutrition, and gain valuable tips for using MyNetDiary.
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
                <Heading size='md'>Get started on keto Diet</Heading>
                <Text>
                  You done your research and want to get started on a keto diet, but aren't sure where to begin? Follow these steps
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
                <Heading size='md'>Monitoring ketones: How do I know I am in ketosis?</Heading>
                <Text>
                  Thinking about the monitoring ketones? You may get additional information about this down below
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
                <Heading size='md'>These are the top 10 kept foods you should include if you're on the diet</Heading>
                <Text>
                  If you're on the keto diet, here are the top 10 keto foods to include.
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
                <Heading size='md'>10 Staples to turn your pantry into a healthy source for a low carb diet </Heading>
                <Text>
                  You won't regret putting these tasty staples in your shopping cart.
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
                <Heading size='md'>keto Food Grade : Helping you find the best keto foods</Heading>
                <Text>
                  Need help finding the beset keto Foods?. Follow the below like to get all the resources for keto diet.
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
                <Heading size='md'>Are you missing out on these important keto micro nutrients?</Heading>
                <Text>
                  Is your keto diet lacking in micro nutrients? Make sure you are getting these important vitamins and minerals if you are following a keto diet.                </Text>
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

export default KetoDiet