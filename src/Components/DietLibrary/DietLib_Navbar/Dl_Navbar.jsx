import { List, ListIcon, ListItem } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { AtSignIcon, CalendarIcon, CloseIcon, EditIcon, QuestionOutlineIcon, StarIcon } from "@chakra-ui/icons";

const DL_Navbar = () => {
  return (

    <List color="white" fontSize={{ base: "1.2rem", md: "1.4rem", xl: "1.4rem" }}
      pb="2rem" spacing={3}>
      <ListItem
        pb={{ base: "1rem", md: "1rem", xl: "1rem" }}
      >
        <NavLink to="/">
          <ListIcon as={CalendarIcon} color="white" />
          Low Diet
        </NavLink>
      </ListItem>
      <ListItem
        pb={{ base: "1rem", md: "1rem", xl: "1rem" }}
      >
        <NavLink to="/create">
          <ListIcon as={EditIcon} color="white" />

          High Protein
        </NavLink>
      </ListItem>
      <ListItem
        pb={{ base: "1rem", md: "1rem", xl: "1rem" }}
      >
        <NavLink to="/profile">
          <ListIcon as={QuestionOutlineIcon} color="white" />

          Keto Diet
        </NavLink>
      </ListItem>
      <ListItem
        pb={{ base: "1rem", md: "1rem", xl: "1rem" }}
      >
        <NavLink to="/">
          <ListIcon as={CloseIcon} color="white" />
          Low fat Diet
        </NavLink>
      </ListItem>
      <ListItem
        pb={{ base: "1rem", md: "1rem", xl: "1rem" }}
      >
        <NavLink to="/create">
          <ListIcon as={EditIcon} color="white" />

          Vegan Diet
        </NavLink>
      </ListItem>
      <ListItem
        pb={{ base: "1rem", md: "1rem", xl: "1rem" }}
      >
        <NavLink to="/profile">
          <ListIcon as={StarIcon} color="white" />

          Vegetarian Diet
        </NavLink>
      </ListItem>
    </List >)
}

export default DL_Navbar