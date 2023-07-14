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
				element: <Course></Course>,
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
