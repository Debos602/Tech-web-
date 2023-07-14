import React from "react";
import { HiArrowTrendingUp } from "react-icons/hi2";

const InnerSection = () => {
	return (
		<div className="container mx-auto py-20 px-20">
			<div className="grid lg:grid-cols-2 md:grid-cols-1">
				<div className="m-auto w-3/4">
					<h2 className="text-2xl font-extrabold text-center py-2 text-sky-800">
						Learn new skills online with top educators
					</h2>
					<p className="text-xl font-semibold py-2 text-slate-400">
						The automated process all your website tasks. Discover tools and
						techniques to engage effectively with vulnerable children and young
						people.
					</p>
					<ul>
						<li className="flex font-medium items-center py-2 text-sky-700">
							{" "}
							<HiArrowTrendingUp />
							<span className="px-2">
								Techniques to engage effectively with vulnerable children and
								young people
							</span>
						</li>
						<li className="flex font-medium items-center py-2 text-sky-700">
							{" "}
							<HiArrowTrendingUp />
							<span className="px-2">
								{" "}
								Techniques to engage effectively with vulnerable children and
								young people
							</span>
						</li>
						<li className="flex font-medium items-center py-2 text-sky-700">
							{" "}
							<HiArrowTrendingUp />
							<span className="px-2">
								Techniques to engage effectively with vulnerable children and
								young people
							</span>
						</li>
					</ul>
				</div>
				<div className="flex justify-center pb-5 rounded-lg">
					<iframe
						className="w-full rounded"
						src="https://www.youtube.com/embed/mNxW_iURVl0"
						title="YouTube video player"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
					></iframe>
				</div>
			</div>
		</div>
	);
};

export default InnerSection;
