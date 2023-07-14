import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Layout from "./components/Layout";

import { useEffect, useState } from "react";

export default function App() {
	const [theme, setTheme] = useState("light");

	useEffect(() => {
		if (theme === "dark") {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	}, [theme]);

	return (
		<div className="flex min-h-screen flex-col dark:bg-darkModePrimary dark:text-darkModeWhite">
			<Navbar theme={theme} setTheme={setTheme} />
			<Layout />
			<Footer />
		</div>
	);
}
