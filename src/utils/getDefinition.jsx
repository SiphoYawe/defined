import axios from "axios";

const options = {};

async function getDefinition(searchTerm) {
	return axios.get(
		`https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`,
		options
	);
}

export default getDefinition;
