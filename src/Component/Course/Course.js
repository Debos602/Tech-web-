import React from "react";
import { Link, Outlet, useLoaderData } from "react-router-dom";

const Course = () => {
	const categories = useLoaderData();
	console.log(categories);
	return (
		<div className="container mx-auto px-20 py-2 min-h-screen">
			<div className="grid grid-cols-1 md:grid-cols-6">
				<div className="col-span-1">
					<h2 className="text-2xl font-bold">All Categories</h2>
					<div className="underline underline-offset-2">
						{categories?.map((category) => (
							<li
								key={category.id}
								className="list-none text-xl font-semibold py-1 px-2 w-full border rounded"
							>
								<Link to={`/course/${category.id}`}>{category.name}</Link>
							</li>
						))}
					</div>
				</div>
				<div className="col-span-5">
					<Outlet></Outlet>
				</div>
			</div>
		</div>
	);
};

export default Course;
