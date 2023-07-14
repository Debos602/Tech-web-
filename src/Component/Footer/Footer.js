import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
	return (
		<div className="bg-indigo-900 py-10">
			<div className="container mx-auto">
				<div className="grid grid-cols-3 container text-white">
					<div className="text-center">
						<h2 className="font-extrabold">Training Web</h2>
						<p>
							This is platform for new and beginner programmer. We are hope that
							we always best learning from here. Thank you
						</p>
						<Link to="" className="btn btn-circle mx-2 mt-3">
							<FaFacebookF></FaFacebookF>
						</Link>
						<Link to="" className="btn btn-circle mx-2 mt-3">
							<FaTwitter></FaTwitter>
						</Link>
						<Link to="" className="btn btn-circle mx-2 mt-3">
							<FaInstagram></FaInstagram>
						</Link>
					</div>
					<div className="text-center">
						<h2 className="font-extrabold">Our Solution</h2>
						<ul>
							<li>Programming solving </li>
							<li>Web Design</li>
							<li>Web Development</li>
							<li>UI/UX Design </li>
							<li>Algorithom </li>
						</ul>
					</div>
					<div className="text-center">
						<h2 className="font-extrabold">Our Course</h2>
						<ul>
							<li>Javascript Programming</li>
							<li>React Programming</li>
							<li>Data Structure</li>
							<li>Problem Solving</li>
							<li>Backend Server</li>
						</ul>
					</div>
				</div>
				<p className="text-center font-bold text-orange-300 my-5">
					Training Web © 2023
					<span>Development by DEBOS</span>
				</p>
			</div>
		</div>
	);
};

export default Footer;
