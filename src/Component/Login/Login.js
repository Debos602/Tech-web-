import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
	return (
		<div className="bg-indigo-950 py-10">
			<div className="container mx-auto">
				<div className="text-center">
					<div className="card w-full md:w-2/5 mx-auto glass">
						<div className="card-body text-white">
							<h2 className="text-2xl font-bold">LOGIN</h2>
							<form className="">
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
								{/* {error && <p className="text-red-500 font-bold">{error}</p>} */}
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
								// onClick={signInWithGoogle}
								className="btn bg-indigo-300 text-xl w-3/4 mx-auto my-2"
							>
								Google
							</button>
							<button
								// onClick={signInWithGithub}
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
