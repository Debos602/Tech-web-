import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "../../assets/sliderImg/img(1).jpg";
import Image1 from "../../assets/sliderImg/img(2).jpg";
import Image2 from "../../assets/sliderImg/img(3).jpg";
import Image3 from "../../assets/sliderImg/img(4).jpg";
import Image4 from "../../assets/sliderImg/img(5).jpg";
import Image5 from "../../assets/sliderImg/img(6).jpg";
import Image6 from "../../assets/sliderImg/img(7).jpg";
import "./SliderSection.css";

const SliderSection = () => {
	const allData = [
		{ id: 1, img: `${Image}`, name: "Myckel" },
		{ id: 2, img: `${Image1}`, name: "Grisman" },
		{ id: 3, img: `${Image2}`, name: "Novello" },
		{ id: 4, img: `${Image3}`, name: "artpaniatn" },
		{ id: 5, img: `${Image4}`, name: "critopaer" },
		{ id: 6, img: `${Image5}`, name: "Aralsaln" },
		{ id: 7, img: `${Image6}`, name: "Robert" },
	];
	const slidesPerView = window.innerWidth < 768 ? 2 : 4;

	return (
		<div className="container mx-auto py-16 px-20">
			<h1 className="text-center text-5xl font-semibold text-sky-800 my-9">
				Community Experts
			</h1>
			<Swiper
				spaceBetween={50}
				slidesPerView={slidesPerView}
				// onSlideChange={() => console.log("slide change")}
				// onSwiper={(swiper) => console.log(swiper)}
			>
				{allData.map((data) => (
					<SwiperSlide key={data.id}>
						<img className="img my-5" src={data.img} alt="" />
						<p className="text-center text-3xl font-semibold">{data.name}</p>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default SliderSection;
