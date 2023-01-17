import { Button, Heading, Slider } from "@chakra-ui/react";
import React from "react";
import "./Banner.css";
import { BsFillPlayFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import Section from "./Section";

const Banner = () => {
  // Slider
  const slider = (event) => {
    let span = document.querySelectorAll(".dot");
    span.forEach((elem) => {
      elem.classList.remove("active");
    });
    event.target.classList.add("active");
    images(span);
  };

  const images = (event) => {
    let image = document.querySelectorAll(".slider");
    image.forEach((elem, index) => {
      elem.style.transform = "none";
      if (event[index].classList.contains("active")) {
        image[0].style.transform = `translate(0,${500 * index}px)`;
        return (elem.style.transform = `translate(0,${-500 * index}px)`);
      }
    });
  };
  // SLIDER
  return (
    <>
      <div className="banner">
        {/* dots */}
        <div className="dots">
          <span className="dot active" onClick={slider}>
            .
          </span>
          <span className="dot" onClick={slider}>
            .
          </span>
          <span className="dot" onClick={slider}>
            .
          </span>
        </div>
        {/* Images */}
        <div className="images">
          <div className="slider">
            <img src="./Images/men2.png" alt="slider" />
          </div>
          <div className="slider">
            <img src="./Images/men1.png" alt="slider" />
          </div>
          <div className="slider">
            <img
              src="./Images/men4.png"
              alt="slider"
              style={{ height: "auto" }}
            />
          </div>
        </div>
        {/* Content */}
        <div className="content">
          <b>
            <p>Men's Accessories</p>
          </b>
          <Heading>
            Alway's Be A <br /> Gentlemen.
          </Heading>
          <p>
            You can pass "limit" and "skip" params to limit and skip the results
            for pagination. You can pass "select" as query params with
            comma-separated values to select specific data.
          </p>
          <Link to="/shop">
            <Button my="4" bgColor={"purple.400"} variant={"ghost"}>
              <BsFillPlayFill />
              Shop Now
            </Button>
          </Link>
        </div>
      </div>
      <Section />
    </>
    
  );
};

export default Banner;
