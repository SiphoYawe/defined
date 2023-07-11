import ReactPlayer from "react-player";

const DefinitionListing = ({ item, id }) => {
	console.log(item);

	return (
		<>
			<p className=" font-serif text-2xl font-bold">{item.word}</p>
			<p className=" text-lg">{item?.phonetics[1]?.text}</p>
			<div className="mt-3">
				{item.phonetics[1]?.audio && (
					<ReactPlayer controls url={item?.phonetics[1]?.audio} height={50} />
				)}
			</div>
			{item.meanings.map((meaning, id) => {
				const { antonyms, definitions, partOfSpeech, synonym } = meaning;
				return (
					<div className="mt-5">
						<p className=" font-bold">
							{id + 1}. {partOfSpeech}
						</p>
						<p>
							{definitions.map((item) => (
								<p>{item.definition}</p>
							))}
						</p>
					</div>
				);
			})}
		</>
	);
};

export default DefinitionListing;
