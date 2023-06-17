import { List, ListIcon, ListItem } from '@chakra-ui/react'
import { React, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { CalendarIcon, CloseIcon, EditIcon, QuestionOutlineIcon, StarIcon } from "@chakra-ui/icons";
import AOS from 'aos'
import 'aos/dist/aos.css';
const Food_Nav = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false
    })
  }, [])
  return (
    <>
      <List color="white" fontSize={{ base: "1.2rem", md: "1.4rem", xl: "1.4rem" }}

        pb="2rem" spacing={3} >
        <ListItem
          pb={{ base: "1rem", md: "1rem", xl: "1rem" }}
          data-aos="fade-right"
        >
          <NavLink to="/FoodLibrary/Howto">
            <ListIcon as={CalendarIcon} color="white" />
            How to search
          </NavLink>
        </ListItem>
        <ListItem
          pb={{ base: "1rem", md: "1rem", xl: "1rem" }}
          data-aos="fade-right"

        >
          <NavLink to="/FoodLibrary/FoodNutrition">
            <ListIcon as={QuestionOutlineIcon} color="white" />

            Food Nutrition Value
          </NavLink>
        </ListItem>
        <ListItem
          pb={{ base: "1rem", md: "1rem", xl: "1rem" }}
          data-aos="fade-right"

        >
          <NavLink to="/DietLibrary/KetoDiet">
            <ListIcon as={EditIcon} color="white" />

            Recipes
          </NavLink>
        </ListItem>

        <ListItem
          pb={{ base: "1rem", md: "1rem", xl: "1rem" }}
          data-aos="fade-right"

        >
          <NavLink to="/DietLibrary/LowFatdiet">
            <ListIcon as={CloseIcon} color="white" />
            Diet Plans
          </NavLink>
        </ListItem>

      </List >

    </>
  )
}

export default Food_Nav