import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import { toast } from "react-hot-toast";

const Register = () => {
	const { createUser, updateUserData, logOut } = useContext(AuthContext);
	const [confirmPassword, setConfirmPassword] = useState("");
	const [error, setError] = useState(null);
	const navigate = useNavigate();

	const handleEmailPassword = (event) => {
		event.preventDefault();
		const form = event.target;
		const name = form.name.value;
		const photo = form.photoURL.value;
		const email = form.email.value;
		const password = form.password.value;

		if (password !== confirmPassword) {
			setError("Password Does not match");
			return;
		}

		createUser(email, password)
			.then((result) => {
				const user = result.user;
				handleUpdateUserData(name, photo);
				navigate("/login");
				handleLogOut();
				console.log(user);
				form.reset();
				setConfirmPassword("");
				toast.success("Please verify your email address");
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const handleUpdateUserData = (name, photoURL) => {
		const profile = {
			displayName: name,
			photoURL: photoURL,
		};
		updateUserData(profile)
			.then(() => {})
			.catch((error) => console.log(error));
	};
	const handleLogOut = async () => {
		try {
			await logOut();
			navigate("/login");
		} catch (error) {
			console.error(error);
		}
	};
	return (
		<div className="bg-indigo-950 py-10">
			<div className="container mx-auto  ">
				<div className="text-center">
					<div className="card w-full md:w-2/5 mx-auto glass p-3">
						<div className="card-body text-white">
							<h2 className="text-2xl font-bold">Register</h2>
							<form onSubmit={handleEmailPassword} className="">
								<div>
									<label className="text-2xl flex" htmlFor="name">
										Username
									</label>
									<input
										type="text"
										className="my-3 p-2 rounded-lg w-full text-black"
										id="name"
										name="name"
										placeholder="Enter your username"
									/>
								</div>

								<div>
									<label className="text-2xl flex" htmlFor="photo">
										PhotoUrl
									</label>
									<input
										type="text"
										className="my-3 p-2 rounded-lg w-full text-black"
										id="photo"
										name="photoURL"
										placeholder="Enter your photo URL"
									/>
								</div>

								<div>
									<label className="text-2xl flex" htmlFor="email">
										Email Address
									</label>
									<input
										type="email"
										className="my-3 p-2 rounded-lg w-full text-black "
										id="email"
										name="email"
										placeholder="Enter your email address"
										required
									/>
								</div>

								<div>
									<label className="text-2xl flex" htmlFor="password">
										Password
									</label>
									<input
										type="password"
										className="my-3 p-2 rounded-lg w-full text-black "
										id="password"
										name="password"
										placeholder="Enter your password"
										style={{ color: "black" }}
										required
									/>
								</div>

								<>
									<label className="text-2xl flex" htmlFor="confirmPasswords">
										Confirm Password
									</label>
									<input
										type="password"
										className="my-3 p-2 rounded-lg w-full text-black"
										id="confirmPasswords"
										name="confirmPasswords"
										placeholder="Confirm your password"
										value={confirmPassword}
										onChange={(event) => setConfirmPassword(event.target.value)}
									/>
								</>
								<p className="text-orange text-2xl">{error}</p>
								<button
									className="btn bg-indigo-400 border-0 text-xl w-full my-2"
									type="submit"
								>
									Create Account
								</button>
							</form>

							<p>
								Already have an account{" "}
								<Link to="/login" className="text-rose-500">
									<span className="text-xl font-bold">Log In</span>
								</Link>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Register;
