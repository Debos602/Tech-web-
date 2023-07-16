import React from "react";
import Image from "../../assets/learn.jpg";
import SingleCard from "../SingleCard/SingleCard";
import LearnSection from "../LearnSection/LearnSection";
import InnerSection from "../InnerSection/InnerSection";
import SliderSection from "../SliderSection/SliderSection";
import TrainingSection from "../TrainingSection/TrainingSection";

const Home = () => {
	return (
		<div className="relative">
			<>
				<div className="min-h-screen relative">
					<img
						src={Image}
						alt=""
						style={{
							width: "100%",
							height: "580px",
							filter: "blur(2px)",
							zIndex: -1,
						}}
					/>
					<div
						style={{ height: "580px" }}
						className="absolute top-0 left-0 w-full bg-black opacity-50"
					></div>
					<div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
						<h1 className="text-5xl font-bold text-white py-2">
							Online training platform
						</h1>
						<p className="text-xl font-semibold text-white py-2">
							Build skills with courses, certificates, and degrees online from
							world-class universities and companies
						</p>
						<button className="btn btn-primary  py-2">Join Now</button>
					</div>
				</div>
			</>
			<SingleCard></SingleCard>
			<InnerSection></InnerSection>
			<LearnSection></LearnSection>
			<SliderSection></SliderSection>
			<TrainingSection></TrainingSection>
		</div>
	);
};

export default Home;
