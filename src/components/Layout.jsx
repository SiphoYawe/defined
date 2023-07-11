import Search from "./Search";
import Definition from "./Definition";
import { Route, Routes } from "react-router-dom";

const Layout = () => {
	return (
		<div className=" flex grow flex-col">
			<div className="min container mx-auto flex flex-col items-center py-10 lg:px-48">
				<h1 className="font font-serif text-3xl font-bold">
					Free Online Dictionary
				</h1>
				<Search />
				<Routes>
					<Route path={`/search/:searchTerm`} element={<Definition />} />
				</Routes>
			</div>
		</div>
	);
};

export default Layout;
