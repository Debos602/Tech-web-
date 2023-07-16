import React from "react";
import { Link } from "react-router-dom";

const Card = ({ card }) => {
	const { _id, author, title, total_student, rating, course_fee } = card;
	// console.log(_id);
	return (
		<div>
			<div className="card  bg-base-100 shadow-xl">
				<figure>
					<img
						src={author?.img}
						alt="Shoes"
						style={{ height: 200, width: 366 }}
					/>
				</figure>
				<div className="card-body">
					<h2 className="card-title">{title}</h2>
					<div className="flex justify-between">
						<p>
							<span className="text-xl font-bold">Enrolled Student: </span>
							{total_student}
						</p>
						<p>
							<span className="text-xl font-semibold">Ratings: </span>
							{rating?.number}
						</p>
					</div>
					<p>
						<span className="text-xl font-semibold">Course Time: </span>
						{author?.course_time}
					</p>
					<p>
						<span className="text-xl font-semibold">Instructor Name: </span>
						{author.name}
					</p>
					<p>
						<span className="text-xl font-semibold">Course Fee: </span>
						{course_fee}
					</p>
					<div className="card-actions justify-end">
						<button className="btn btn-primary w-full">
							<Link to={`/course/details/${_id}`}>details</Link>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
