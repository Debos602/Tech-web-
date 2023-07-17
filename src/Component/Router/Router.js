import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Home/Home";
import Faq from "../Faq/Faq";
import Blog from "../Blog/Blog";
import Login from "../Login/Login";
import Register from "../Register/Register";
import ResetPassword from "../ResetPassword/ResetPassword";
import ErrorPage from "../ErrorPage/ErrorPage";
import Course from "../Course/Course";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Cards from "../Cards/Cards";
import Details from "../Details/Details";
import CheckOut from "../CheckOut/CheckOut";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Main></Main>,
		children: [
			{
				path: "/",
				element: <Home></Home>,
			},
			{
				path: "/course",
				loader: () => fetch("https://teq-web-server.vercel.app/course"),
				element: <Course></Course>,
				children: [
					{
						path: "/course/:id",
						loader: ({ params }) =>
							fetch(`https://teq-web-server.vercel.app/catcourse/${params.id}`),
						element: <Cards></Cards>,
					},
					{
						path: "/course/details/:id",
						loader: ({ params }) =>
							fetch(
								`https://teq-web-server.vercel.app/courseDetails/${params.id}`
							),
						element: <Details></Details>,
					},
					{
						path: "/course/details/checkout/:id",
						loader: ({ params }) =>
							fetch(
								`https://teq-web-server.vercel.app/courseDetails/${params.id}`
							),
						element: (
							<PrivateRoute>
								<CheckOut></CheckOut>,
							</PrivateRoute>
						),
					},
				],
			},
			{
				path: "/faq",
				element: <Faq></Faq>,
			},
			{
				path: "/blog",
				element: <Blog></Blog>,
			},

			{
				path: "/login",
				element: <Login></Login>,
			},
			{
				path: "/register",
				element: <Register></Register>,
			},
			{
				path: "/resetpassword",
				element: <ResetPassword></ResetPassword>,
			},
		],
	},
	{
		path: "*",
		element: <ErrorPage></ErrorPage>,
	},
]);
