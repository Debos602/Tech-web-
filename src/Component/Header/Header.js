import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineSun } from "react-icons/hi2";

const Header = () => {
	return (
		<div className="bg-blue-950">
			<div className="flex justify-between container mx-auto px-20 py-5 text-white">
				<li className="text-2xl font-bold list-none">
					<Link to="/">TeqWeb</Link>
				</li>
				<ul className="flex">
					<li className="px-2 text-xl font-semibold">
						<Link to="/">Home</Link>
					</li>
					<li className="px-2 text-xl font-semibold">
						<Link to="/course">Course</Link>
					</li>
					<li className="px-2 text-xl font-semibold">
						<Link to="/faq">Faq</Link>
					</li>
					<li className="px-2 text-xl font-semibold">
						<Link to="/blog">Blog</Link>
					</li>
					<li className="px-2 text-xl font-semibold flex justify-center items-center">
						<Link to="/">
							<HiOutlineSun />
						</Link>
					</li>

					<li className="px-2 text-xl font-semibold flex justify-center items-center">
						<Link to="/">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="w-6 h-6"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
								/>
							</svg>
						</Link>
					</li>
					<li className="px-2 text-xl font-semibold">
						<Link to="/login">Login</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Header;
