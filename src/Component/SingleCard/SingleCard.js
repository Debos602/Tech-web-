import React from "react";
import { BiBlanket } from "react-icons/bi";

const SingleCard = () => {
	return (
		<div className="container mx-auto px-20 -mt-[60px]">
			<div className="">
				<div className="flex flex-wrap justify-between -mx-4 md:mt-0 -mt-0">
					<div className="px-4 w-full md:w-1/3 md:mt-0 mt-5">
						<div className="card bg-base-100 shadow-xl bg-color">
							<div className="card-body">
								<div className="flex items-center">
									<BiBlanket className="text-2xl" />
									<div className="px-2">
										<h2 className="text-2xl">PDF BOOK and 30+ Course</h2>
										<p>Automated all system by dynamic method</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="px-4 w-full md:w-1/3 md:mt-0 mt-5">
						<div className="card bg-base-100 shadow-xl bg-color">
							<div className="card-body">
								<div className="flex items-center">
									<BiBlanket className="text-2xl" />
									<div className="px-2">
										<h2 className="text-2xl">PDF BOOK and 30+ Course</h2>
										<p>Automated all system by dynamic method</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="px-4 w-full md:w-1/3 md:mt-0 mt-5">
						<div className="card bg-base-100 shadow-xl bg-color">
							<div className="card-body">
								<div className="flex items-center">
									<BiBlanket className="text-2xl" />
									<div className="px-2">
										<h2 className="text-2xl">PDF BOOK and 30+ Course</h2>
										<p>Automated all system by dynamic method</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SingleCard;
