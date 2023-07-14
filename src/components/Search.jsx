import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const navigate = useNavigate();

	return (
		<>
			<form
				className=" mt-5 flex w-full flex-col px-8 md:flex-row"
				onSubmit={(e) => {
					e.preventDefault;

					if (searchTerm) {
						navigate(`/search/${searchTerm}`);
					}
				}}>
				<input
					className=" flex-grow bg-gray-200 py-3 pl-5 text-sm focus:border-0 dark:bg-darkModeSecondary dark:text-textColor"
					placeholder="Enter dictionary word..."
					onChange={(event) => {
						setSearchTerm(event.target.value);
					}}
					value={searchTerm}
				/>
				<button className=" bg-black px-12  py-3 text-sm text-white dark:bg-darkModeWhite dark:text-darkModeSecondary md:ml-3">
					Search
				</button>
			</form>
		</>
	);
};

export default Search;
