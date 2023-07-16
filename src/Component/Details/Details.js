import {
	Document,
	StyleSheet,
	Page,
	Text,
	Image,
	View,
	PDFDownloadLink,
} from "@react-pdf/renderer";
import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Details = () => {
	const { details, _id, author, title, rating } = useLoaderData();
	// console.log(details);

	return (
		<div className="container mx-auto px-10 min-h-screen">
			<div className="text-end">
				<PDFDownloadLink
					document={
						<Document>
							<Page style={{ padding: 20 }}>
								<Text style={{ fontSize: 24, marginBottom: 10 }}>
									Course Name: {title}
								</Text>
								<Text style={{ fontSize: 16, marginBottom: 5 }}>
									Instructor: {author?.name}
								</Text>
								<Text style={{ fontSize: 16, marginBottom: 5 }}>
									Details: {details}
								</Text>
								<Text style={{ fontSize: 16, marginBottom: 5 }}>
									Rating: {rating?.number}
								</Text>
								<Text style={{ fontSize: 16 }}>Enrolled Now</Text>
							</Page>
						</Document>
					}
					fileName="course_details.pdf"
				>
					{({ blob, url, loading, error }) => (
						<button
							className="btn btn-primary"
							style={{
								backgroundColor: "#007bff",
								color: "black",
								// padding: "20px 20px",
								borderRadius: "4px",
								border: "none",
								cursor: "pointer",
								margin: "10px 0 10px 0",
							}}
						>
							{loading ? "Loading document..." : "Download PDF"}
						</button>
					)}
				</PDFDownloadLink>
			</div>
			<div className="card w-full bg-base-100 shadow-2xl">
				<figure>
					<img src={author?.img} className="w-full" alt="Show" />
				</figure>
				<div className="card-body">
					<div className="flex justify-between">
						<p>
							<span className="text-xl font-semibold">Instructor Name: </span>
							{author.name}
						</p>
						<p className="text-end">
							<span className="text-xl font-semibold text-end">Ratings: </span>
							{rating?.number}
						</p>
					</div>
					<h2 className="card-title">{title}</h2>

					<p>
						<span className="text-xl font-semibold">Details: </span>
						{details}
					</p>
					<div className="card-actions justify-end">
						<button className="btn btn-primary w-full">
							<Link to={`/course/details/checkout/${_id}`}>Enrolled Now</Link>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Details;
