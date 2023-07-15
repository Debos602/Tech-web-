import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { HiOutlineSun } from "react-icons/hi";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import { CgProfile } from "react-icons/cg";

const Header = () => {
	const { user, logOut } = useContext(AuthContext);

	const handleLogOut = async () => {
		try {
			await logOut();
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div className="bg-blue-950">
			<div className="container mx-auto px-20 py-5 text-white">
				<ul className="flex justify-between items-center">
					<li className="text-2xl font-bold">
						<Link to="/">TeqWeb</Link>
					</li>
					<ul className="flex items-center">
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
						<li className="px-2 text-xl font-semibold flex items-center">
							<Link to="/">
								<HiOutlineSun />
							</Link>
						</li>
						<li className="px-2 text-xl font-semibold flex items-center">
							<Link to="/">
								{user?.email ? (
									<img
										className="rounded-full"
										style={{ height: 40, width: 40 }}
										title={user.displayName}
										src={user.photoURL}
										alt=""
									/>
								) : (
									<CgProfile />
								)}
							</Link>
						</li>
						<li className="px-2 text-xl font-semibold">
							{user?.email ? (
								(
									<button className="btn" onClick={handleLogOut}>
										Log out
									</button>
								) || <span>{user.email}</span>
							) : (
								<Link to="/login" className="btn">
									Login
								</Link>
							)}
						</li>
					</ul>
				</ul>
			</div>
		</div>
	);
};

export default Header;
