import React from "react";
import Carousel from "./Carousel";

const slide = [
  {
    name: "Akshay Kumar",
    rate: "The eye health monitoring app is amazing! Highly Recommended.",
    rimg: "https://st4.depositphotos.com/1017228/21207/i/450/depositphotos_212071270-stock-photo-portrait-happy-young-casual-man.jpg",
  },
  {
    name: "Aadya Verma",
    rate: "I love how easy it is to track my eye health with this app.",
    rimg: "https://eit.europa.eu/sites/default/files/cristina_aleixendri_portrait_-_vertical_0.jpg",
  },
  {
    name:'Sakshi Singh',
    rate:'With the assessment I was able to early diagonose my eye disease.',
    rimg:'https://img.freepik.com/free-photo/cheerful-dark-skinned-woman-smiling-broadly-rejoicing-her-victory-competition-among-young-writers-standing-isolated-against-grey-wall-people-success-youth-happiness-concept_273609-1246.jpg'
  }
];
const Review = () => {
  return (
    <div>
      <section id="testimonials">
        <div className="max-w-lg">
          <Carousel>
            {slide.map((s, i) => (
              <div className="c-item"key={i}>
                <h2>{s.rate}</h2>
                <p className="rev-name"><b>{s.name}</b></p>
                <div>
                <img className="t-img" src={s.rimg} /></div>
              </div>
            ))}
          </Carousel>
        </div>
      </section>
    </div>
  );
};

export default Review;
