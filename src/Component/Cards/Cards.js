import React from "react";
import { useLoaderData } from "react-router-dom";
import Card from "../Card/Card";

const Cards = () => {
	const allCard = useLoaderData();
	return (
		<div>
			<h2 className="text-end text-xl font-bold">
				Total Card: {allCard?.length}
			</h2>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
				{allCard?.map((card) => (
					<Card key={card._id} card={card}></Card>
				))}
			</div>
		</div>
	);
};

export default Cards;
