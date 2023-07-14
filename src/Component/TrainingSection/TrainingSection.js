import React from "react";
import Image from "../../assets/img.jpg";

const TrainingSection = () => {
	return (
		<div className="container mx-auto py-20">
			<div className="grid lg:grid-cols-2 md:grid-cols-1">
				<div className="p-10">
					<img className="w-full rounded" src={Image} alt="" />
				</div>
				<div className="flex items-center p-10">
					<div>
						<h2 className="text-3xl font-semibold text-sky-800 py-5">
							Take the next step toward your personal and professional goals
							with us.
						</h2>
						<p className="text-xl  text-sky-800 py-5">
							The automated process all your website tasks. Discover tools and
							techniques to engage effectively with vulnerable children and
							young people.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TrainingSection;
