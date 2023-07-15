import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const Login = () => {
	const { handleEmailSignIn, googleSignIn, githubSignIn } =
		useContext(AuthContext);
	const [error, setError] = useState("");
	const navigate = useNavigate();
	const location = useLocation();

	const from = location?.state?.from?.pathname || "/";

	const handleSubmit = (event) => {
		event.preventDefault();
		const form = event.target;
		const email = form.emails.value;
		const password = form.passwords.value;
		console.log(email, password);
		handleEmailSignIn(email, password)
			.then((result) => {
				const user = result.user;
				console.log(user);
				form.reset();
				navigate(from, { replace: true });
				// if (user?.emailVerified) {
				// 	navigate(from, { replace: true });
				// } else {
				// 	setError("Your email is not verified. Please verify your email.");
				// }
			})
			.catch((error) => {
				console.log(error);
				setError("Wrong Email or Password");
			});
	};
	const signInWithGoogle = (event) => {
		event.preventDefault();
		googleSignIn()
			.then((result) => {
				const user = result.user;
				console.log(user);
				navigate("/");
			})
			.catch((error) => console.log(error));
	};

	const signInWithGithub = (event) => {
		event.preventDefault();
		githubSignIn()
			.then((result) => {
				const user = result.user;
				console.log(user);
				navigate("/");
			})
			.catch((error) => console.log(error));
	};
	return (
		<div className="bg-indigo-950 py-10">
			<div className="container mx-auto">
				<div className="text-center">
					<div className="card w-full md:w-2/5 mx-auto glass">
						<div className="card-body text-white">
							<h2 className="text-2xl font-bold">LOGIN</h2>
							<form onSubmit={handleSubmit} className="">
								<label className="text-2xl flex" htmlFor="login">
									Email
								</label>
								<input
									type="email"
									className="my-3 p-2 rounded-lg w-full text-black "
									id="login"
									name="emails"
									placeholder="Enter your username"
									required
								/>

								<label className="text-2xl flex" htmlFor="password">
									Password
								</label>
								<input
									type="password"
									className="my-3 p-2 rounded-lg w-full text-black"
									id="password"
									name="passwords"
									placeholder="Enter your password"
									required
								/>
								<button
									type="submit"
									className="btn bg-indigo-400 border-0 text-xl my-2 w-full"
								>
									Sign In
								</button>
								{error && <p className="text-red-500 font-bold">{error}</p>}
							</form>

							<Link
								to="/resetpassword"
								className="flex justify-end text-xl py-2"
							>
								Reset Password
							</Link>

							<p className="py-2">
								<span>Or, Login With</span>
							</p>
							<button
								onClick={signInWithGoogle}
								className="btn bg-indigo-300 text-xl w-3/4 mx-auto my-2"
							>
								Google
							</button>
							<button
								onClick={signInWithGithub}
								className="btn bg-indigo-300  text-xl w-3/4 mx-auto my-2"
							>
								Github
							</button>
							<p>
								You have no account{" "}
								<Link to="/register" className="text-rose-500">
									<span className="text-xl font-bold">Register</span>
								</Link>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
