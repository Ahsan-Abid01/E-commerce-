import React, { useContext } from "react";
import "./Header.css";
import { BiCart, BiSun } from "react-icons/bi";
import { AiFillHeart } from "react-icons/ai";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ContextData } from "../Context/Context";
import { useColorMode, Button, Box, HStack, Heading } from "@chakra-ui/react";
import { BiMoon } from "react-icons/bi";
const Header = () => {
  const { state } = useContext(ContextData);

  //LINK ACTIVE
  const tabsChange = (e) => {
    let list = document.querySelectorAll(".list");
    list.forEach((elem) => {
      if (elem.classList.contains("active")) {
        elem.classList.remove("active");
      }
      e.target.classList.add("active");
    });
  };
  //Link Active

  return (
    <nav>
      <motion.Box
        className="navbar"
        initial={{ opacity: 0, x: "-100vw" }}
        animate={{ opacity: 1, x: "0" }}
        transition={{ duration: 1 }}
      >
        {/* LOGO */}
        <Box className="logo">
          <Heading>
            TheLoke<span>.</span>
          </Heading>
        </Box>
        {/* MENU */}
        <Box className="menu">
          <ul>
            <li>
              <Link className="list active" to="/" onClick={tabsChange}>
                Home
              </Link>
            </li>
            <li>
              <Link className="list " to="/shop" onClick={tabsChange}>
                Shop
              </Link>
            </li>
            <li>
              <Link className="list " to="/" onClick={tabsChange}>
                Collection
              </Link>
            </li>
          </ul>
        </Box>
        {/* ICONS */}
        <HStack className="icons" flexDirection={["row", "auto"]}>
          <Box className="cartIcon">
            <Link to="/product/cart">
              <BiCart />
              <span className="cartCount">{state.cart.length}</span>
            </Link>
          </Box>
          <ColorMode />
        </HStack>
      </motion.Box>
    </nav>
  );
};


function ColorMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <header>
      <Button onClick={toggleColorMode}>
        {colorMode === "light" ? <BiMoon /> : <BiSun />}
      </Button>
    </header>
  );
}
export default Header;
