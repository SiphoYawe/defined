import { GrSun } from "react-icons/gr";
import { FaMoon } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = ({ toggleDarkMode, isDarkMode }) => {
	return (
		<>
			<div className=" flex h-20  flex-grow-0 items-center border-b-2 dark:border-darkModeWhite">
				<div
					id="container"
					className=" container m-auto flex flex-row justify-between">
					<Link to="/">
						<p className="font-serif text-2xl font-bold">defined</p>
					</Link>

					<div className="flex flex-row items-center space-x-4">
						<button
							id="theme-toggle"
							type="button"
							className=" flex h-10 w-10 items-center justify-center rounded-lg bg-slate-200 text-lg hover:bg-slate-300">
							{isDarkMode ? <FaMoon /> : <GrSun />}
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Navbar;
