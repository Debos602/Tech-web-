import React from "react";
import { useLoaderData } from "react-router-dom";

const CheckOut = () => {
	const { course_fee, title } = useLoaderData();
	// console.log(data)
	return (
		<div className="container mx-auto p-20 text-center">
			<h2 className="text-xl py-2">
				<span className="font-bold">Course Name: </span>
				{title}
			</h2>
			<p className="text-xl py-2 ">
				<span className="font-bold">Course Fee:</span> {course_fee}
			</p>
			<button className="btn btn-primary">CheckOut</button>
		</div>
	);
};

export default CheckOut;
