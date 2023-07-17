import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const ResetPassword = () => {
	const { resetPassword } = useContext(AuthContext);
	const handleResetPassword = (event) => {
		event.preventDefault();
		const form = event.target;
		const email = form.email.value;
		console.log(email);
		resetPassword(email)
			.then(() => {
				alert("check your email");
			})
			.catch((error) => console.log(error));
	};
	return (
		<div className="bg-indigo-950 py-10">
			<div className="container mx-auto">
				<div className="text-center">
					<div className="card w-full md:w-2/5 mx-auto glass p-5">
						<div className="card-body text-white">
							<h2 className="text-2xl font-bold">Reset Password</h2>
							<form onSubmit={handleResetPassword} className="">
								<div>
									<label className="text-2xl flex" htmlFor="login">
										Email
									</label>
									<input
										type="email"
										className="my-5 p-3 rounded-lg w-full "
										id="login"
										name="email"
										placeholder="Enter your username"
										required
									/>
								</div>
								<button className="btn bg-indigo-400 border-0 text-xl">
									Submit
								</button>
							</form>

							<Link to="/login" className="flex justify-end text-xl py-3">
								Return
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ResetPassword;
