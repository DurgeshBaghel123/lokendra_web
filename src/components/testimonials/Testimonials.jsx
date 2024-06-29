import React from "react";
import "./Testimonials.css";
import SmallButton from "../smallbtn/SmallButton";
import Testimonialsbox from "./Testimonialsbox";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Testimonials() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <div className="col-12">
        <SmallButton data="Testimonials" />
      </div>
      <div className="col-12 cources-heading mt-5 ">
        <h2 className="fw-bold" data-aos="fade-up">
          We care about our customers
        </h2>
      </div>
      <div className="row testimonils_section py-4">
        
        <Carousel responsive={responsive} showDots={true} className="pb-5">
          <Testimonialsbox />
          <Testimonialsbox />
          <Testimonialsbox />
          <Testimonialsbox />
          <Testimonialsbox />
        </Carousel>
        <div className="blogimage  ">
          <img src="public\image\blob.svg" className="w-100 p-0"/>
        </div>
      </div>
    </>
  );
}

export default Testimonials;
