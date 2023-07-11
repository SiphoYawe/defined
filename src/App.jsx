import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Layout from "./components/Layout";

import { useState } from "react";

export default function App() {
	const { isDarkMode, setisDarkMode } = useState(false);

	const toggleDarkMode = () => {};

	return (
		<div className="flex min-h-screen flex-col dark:bg-darkModePrimary dark:text-darkModeWhite">
			<Navbar
				isDarkMode={isDarkMode}
				setisDarkMode={setisDarkMode}
				toggleDarkMode={toggleDarkMode}
			/>
			<Layout />
			<Footer />
		</div>
	);
}
