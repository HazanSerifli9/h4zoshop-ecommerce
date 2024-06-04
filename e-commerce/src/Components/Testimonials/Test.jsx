import React from "react";
import "./Test.css";
import Hero from "../../assets/testimonialHero.png";
import { TestimonialsData } from "../../data/testimonials";
import { Carousel } from "react-bootstrap";

const Test = () => {
  return (
    <div className="test">
      <div className="wrapper-test">
        <div className="testContainer">
          <span>Top Rated</span>
          <span>
            Seedily has suitable disposal and boy. Exercise joy man children
            rejoiced.
          </span>
        </div>
        <img src={Hero} alt="" />
        <div className="testContainer">
          <span>100k</span>
          <span>Happy Customers with us</span>
        </div>
      </div>

      <div className="reviews">Reviews</div>

      <Carousel className="testcarousel">
        <Carousel.Item>
          <div className="tCarousel">
            {TestimonialsData.map((testimonial, i) => (
              <div className="testimonial" key={i}>
                <img src={testimonial.image} alt="" />
                <span>{testimonial.comment}</span>
                <hr />
                <span>{testimonial.name}</span>
              </div>
            ))}
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Test;
