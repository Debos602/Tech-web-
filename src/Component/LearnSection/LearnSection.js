import React from "react";
import { HiArrowTrendingUp } from "react-icons/hi2";
import "./LearnSection.css";

const LearnSection = () => {
	return (
		<div className="container mx-auto p-20">
			<div className="grid lg:grid-cols-2 md:grid-cols-1">
				<div className="learn-image w-4/5 mx-auto"></div>
				<div className="w-4/5 mx-auto">
					<h2 className="text-2xl font-extrabold text-center text-sky-800">
						Learner outcomes on courses you will take
					</h2>
					<ul className="text-xl py-3">
						<li className="flex items-center py-2 text-sky-700">
							<HiArrowTrendingUp />
							<span className="ps-2">
								Techniques to engage effectively with vulnerable children and
								young people
							</span>
						</li>
						<li className="flex items-center py-2 text-sky-700">
							<HiArrowTrendingUp />
							<span className="ps-2">
								Techniques to engage effectively with vulnerable children and
								young people
							</span>
						</li>
						<li className="flex items-center py-2 text-sky-700">
							<HiArrowTrendingUp />
							<span className="ps-2">
								Techniques to engage effectively with vulnerable children and
								young people
							</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default LearnSection;
