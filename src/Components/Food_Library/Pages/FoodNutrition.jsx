import { useState } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, Button, Grid, GridItem, Box, Heading, Text, Wrap, WrapItem } from '@chakra-ui/react';
import data from './food2.json';
import './styles.css'

import AOS from 'aos'
import 'aos/dist/aos.css';
const DataTable = () => {




    const [searchValue, setSearchValue] = useState('');
    const [filteredData, setFilteredData] = useState(data);
    const [sortConfig, setSortConfig] = useState({ key: null, direction: '' });

    const handleSearch = (event) => {
        event.preventDefault();
        // Filter data based on search value
        const filtered = data.filter((item) =>
            Object.values(item).some((val) =>
                String(val).toLowerCase().includes(searchValue.toLowerCase())
            )
        );
        setFilteredData(filtered);
    };

    const handleSort = (key) => {
        let direction = 'asc';
        if (sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }
        setSortConfig({ key, direction });

        // Sort data based on column key and direction
        const sorted = [...filteredData].sort((a, b) => {
            if (a[key] < b[key]) return direction === 'asc' ? -1 : 1;
            if (a[key] > b[key]) return direction === 'asc' ? 1 : -1;
            return 0;
        });
        setFilteredData(sorted);
    };

    return (
        <>
            <Grid templateColumns="repeat(6,1fr)" bg="white">
                <GridItem
                    data-aos="fade-right"
                    className='hidden'
                    as="main"
                    colSpan={{ base: 6, lg: 6, xl: 6 }}
                    p={{ base: "0rem", md: "1rem 3rem 1rem 8rem", xl: "3rem" }}
                >
                    <Box maxW='64rem'>
                        <Heading mb={4} fontSize={{ base: "2.5rem", lg: "2rem", xl: "3.5rem" }}>Good Health Starts with What you eat !</Heading>
                        <Text fontSize='xl'>
                            Check the nutrtion value of the food you and then take decisions
                        </Text>

                        {/* <Button size='md' colorScheme='purple' mt='24px'>
                            Create a free account
                        </Button> */}
                    </Box>
                </GridItem>

            </Grid>
            <br />
            <br />
            <br />
            <br />
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    placeholder="Search"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                />
                <Button type="submit">Search</Button>
            </form>
            <Table className='datable'>
                <Thead>
                    <Tr>

                        <Th onClick={() => handleSort('name')}>
                            Name{' '}
                            {sortConfig.key === 'name' &&
                                (sortConfig.direction === 'asc' ? '▲' : '▼')}
                        </Th>
                        <Th onClick={() => handleSort('Energy_kcal')}>
                            Energy_kcal{' '}
                            {sortConfig.key === 'name' &&
                                (sortConfig.direction === 'asc' ? '▲' : '▼')}
                        </Th>
                        <Th onClick={() => handleSort('Protein_g')}>
                            Protein_g{' '}
                            {sortConfig.key === 'age' &&
                                (sortConfig.direction === 'asc' ? '▲' : '▼')}
                        </Th>
                        <Th onClick={() => handleSort('Saturated_fats_g')}>
                            Saturated_fats_g{' '}
                            {sortConfig.key === 'id' &&
                                (sortConfig.direction === 'asc' ? '▲' : '▼')}
                        </Th>
                        <Th onClick={() => handleSort('Fat_g')}>
                            Fat_g{' '}
                            {sortConfig.key === 'name' &&
                                (sortConfig.direction === 'asc' ? '▲' : '▼')}
                        </Th>
                        <Th onClick={() => handleSort('Carb_g')}>
                            Carb_g{' '}
                            {sortConfig.key === 'age' &&
                                (sortConfig.direction === 'asc' ? '▲' : '▼')}
                        </Th>
                        {/* Add more columns as needed */}
                    </Tr>
                </Thead>
                <Tbody>
                    {filteredData.map((item) => (
                        <Tr key={item.id}>
                            <Td>{item.Descrip}</Td>
                            <Td>{item.Energy_kcal}</Td>
                            <Td>{item.Protein_g}</Td>
                            <Td>{item.Saturated_fats_g}</Td>
                            <Td>{item.Fat_g}</Td>
                            <Td>{item.Carb_g}</Td>
                            {/* Add more cells based on the column structure */}
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </>
    );
};

export default DataTable;
