import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import getDefinition from "../utils/getDefinition";
import Loading from "./Loading";
import Error from "./Error";
import DefinitionListing from "./DefinitionListing";

const Definition = () => {
	const { searchTerm } = useParams();

	useEffect(() => {}, [searchTerm]);

	const { data, isLoading, error } = useQuery({
		queryKey: ["definition"],
		queryFn: () => getDefinition(searchTerm),
	});

	if (isLoading) {
		return <Loading />;
	} else if (error) {
		return <Error error={error} />;
	} else {
		return (
			<div className="mt-10 flex w-full flex-col ">
				{data.data.map((item, id) => {
					return <DefinitionListing key={id} item={item} />;
				})}
			</div>
		);
	}
};

export default Definition;
