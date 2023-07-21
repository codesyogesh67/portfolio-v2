import React, { forwardRef, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateScroll } from "../../features/scrollSlice";
import AnimatedLetters from "../../components/animation/AnimatedLetters";
import "./styles.css"
import Typewriter from "typewriter-effect";
import { NavLink } from "react-router-dom"

function Home() {
    const nameArray = ['Y', 'o', 'g', 'e', 's', 'h']
    const dispatch = useDispatch()


    const scrollTo = (value) => {
        dispatch(updateScroll(value));
    };


    return (
        <div className="home">
            {/* <p className="home__info">Hello I'm </p> */}

            {/* <AnimatedLetters
        letterClass="text-animate"
        strArray={nameArray}
        idx={15}
      /> */}





            <p className="home__name">Yogesh Pradhan</p>
            <Typewriter

                options={{
                    strings: ["Web Developer", "Front End Developer"],
                    autoStart: true,
                    loop: true,
                }}
            />

            <p className="home__description">

                Being full-stack developer, I build exceptional, high-quality websites
                and applications.

                I bring together stunning user interfaces
                with robust functionality and fully responsive webpages.
          <br />

           Whether it's crafting intuitive user experiences or
           architecting scalable solutions, I thrive on turning ideas into reality and delivering
            outstanding
            <NavLink to="/projects">
                    <span className="home__results">results</span>
                </NavLink>
            .<br /><br />
                <span className="home__highlightedLine">
                    Let's collaborate to create web experiences that captivate, inspire, and elevate your brand.

            </span>
            </p>
            <NavLink to="/contact">
                <p className="home__button">Get in touch</p>
            </NavLink>
        </div>
    );
}

export default Home
