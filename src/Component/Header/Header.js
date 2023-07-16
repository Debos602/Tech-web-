import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineSun, HiMoon } from "react-icons/hi";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import { CgProfile } from "react-icons/cg";
import { Bars3Icon } from "@heroicons/react/24/solid";

const Header = ({ handleToggleTheme, isDarkMode }) => {
	const { user, logOut } = useContext(AuthContext);
	const [open, setOpen] = useState(false);

	const handleLogOut = async () => {
		try {
			await logOut();
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div className="bg-blue-950 relative z-20">
			<div className="lg:container mx-auto px-3 md:px-20 py-5 text-white">
				<ul className="flex justify-between items-center">
					<li className="text-2xl font-bold">
						<Link to="/">TeqWeb</Link>
					</li>
					<div
						onClick={() => setOpen(!open)}
						className="h-6 w-6  text-white md:hidden"
					>
						<Bars3Icon />
					</div>
					<ul
						className={`left-0 md:flex bg-blue-950 items-center justify-end md:static w-full absolute duration-500 ${
							open ? "top-[70px]" : "top-[-300px]"
						}`}
					>
						<li className="px-2 py-1 text-xl font-semibold">
							<Link to="/">Home</Link>
						</li>
						<li className="px-2 py-1 text-xl font-semibold">
							<Link to="/course">Course</Link>
						</li>
						<li className="px-2 py-1 text-xl font-semibold">
							<Link to="/faq">Faq</Link>
						</li>
						<li className="px-2 py-1 text-xl font-semibold">
							<Link to="/blog">Blog</Link>
						</li>
						<li className="px-2 py-1 text-xl font-semibold flex items-center">
							<Link to="/">
								<>
									{isDarkMode ? (
										<HiMoon onClick={handleToggleTheme} />
									) : (
										<HiOutlineSun onClick={handleToggleTheme} />
									)}
								</>
							</Link>
						</li>
						<li className="px-2 py-1 text-xl font-semibold flex items-center">
							<Link to="/">
								{user?.uid ? (
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
						<li className="px-2 py-1 text-xl font-semibold">
							{user?.uid ? (
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
