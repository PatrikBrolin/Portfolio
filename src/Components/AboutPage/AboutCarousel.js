import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./AboutCarousel.css";

const AboutCarousel = () => {
	const responsive = {
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 1,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 1,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
		},
	};
	return (
		<div className="carousel__wrapper">
			<Carousel responsive={responsive}
      containerClass="carousel-container"
      itemClass="carousel-item"
      autoPlay={false}
      autoPlaySpeed={10000}
      swipeable={true}
      draggable={true}
      infinite={true}>
    
				<div>hej</div>
				<div>mitt</div>
				<div>namn</div>
			</Carousel>
		</div>
	);
};

export default AboutCarousel;
