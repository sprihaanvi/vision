import React from "react";
import { TypeAnimation } from 'react-type-animation';

import "./styles/home.css";

import Features from "./Homecomp/Features";
import Review from "./Homecomp/Review";
import Closing from "./Homecomp/Closing";

const Home = () => {
  return (
    <div>
      <section id="title">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <div className="title-heading-container">
              <TypeAnimation sequence={['We care for your eye.',1000]}
                wrapper="span"
                speed={20}
                className="title-heading"
                repeat={Infinity}
                cursor={false}
                />
                </div>
              {/* <h1 className="title-heading">We care for your eye.</h1> */}
            </div>
            <div className="col-lg-6">
              <img className="title-img" src="./doctor.png" alt="doctor" />
            </div>
          </div>
        </div>
      </section>

      <Features />

      <Review />
      <Closing/>

    </div>
  );
};

export default Home;
