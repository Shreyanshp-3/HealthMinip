import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar';
import { Box, Grid, GridItem } from '@chakra-ui/react'



// for the navigation side bar
import Mhomepage from './Components/Homepage/Mhomepage';
import Dl_Navbar from './Components/DietLibrary/DietLib_Navbar/Dl_Navbar';


//for the navdata importing the links
import Homepage from './Components/Homepage/Homepage';





function App() {
    return (
        <>
            {/* this is the fixed navbar */}
            <Navbar />
            <div className='routes1'>

                <Grid templateColumns="repeat(6,1fr)" bg="white">


                    {/* this is the new navbar of the item list present in the columns */}
                    <GridItem
                        as="main"
                        colSpan={{ base: 6, lg: 2, xl: 1 }}
                        bg="purple.400"
                        minHeight={{ base: "20vh", lg: '40vh', xl: "100vh" }}
                        p={{ base: "3rem 3rem 0rem 3rem ", lg: "5rem 0rem 4rem 4rem", xl: "2rem" }}
                        width="100%"
                    >
                        <Routes>
                            <Route exact path='/' element={<Mhomepage />} />
                            <Route exact path='/DietLibrary' element={<Dl_Navbar />} />
                        </Routes>
                    </GridItem>


                    {/* this is the new navdata for the items according to it */}
                    <GridItem
                        as="main"
                        colSpan={{ base: 6, lg: 4, xl: 5 }}
                        p="3rem"
                        width="100%"
                    >
                        <Routes>
                            <Route exact path='/' element={<Homepage />} />

                        </Routes>
                    </GridItem>
                </Grid>
            </div >
        </>
    );
}
export default App;