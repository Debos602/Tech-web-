import React, { useState } from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

const Main = () => {
	const [isDarkMode, setIsDarkMode] = useState(false);
	const themeStyles = {
		backgroundColor: isDarkMode ? "LightGray" : "white",
		color: isDarkMode ? "black" : "black",
	};
	const handleToggleTheme = (event) => {
		event.preventDefault();
		setIsDarkMode((prevState) => !prevState);
	};
	return (
		<div style={themeStyles}>
			<Header
				handleToggleTheme={handleToggleTheme}
				isDarkMode={isDarkMode}
			></Header>
			<Outlet></Outlet>
			<Footer></Footer>
		</div>
	);
};

export default Main;
