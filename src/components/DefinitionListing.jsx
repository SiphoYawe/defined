import ReactPlayer from "react-player";

const DefinitionListing = ({ item, id }) => {
	console.log(item);

	return (
		<>
			<p className=" font-serif text-2xl font-bold">{item.word}</p>
			<p className=" text-lg">{item?.phonetics[1]?.text}</p>
			<div className="mt-3">
				{item.phonetics[1]?.audio && (
					<ReactPlayer
						controls
						url={item?.phonetics[1]?.audio}
						height={50}
						width={"100%"}
					/>
				)}
			</div>
			{item.meanings.map((meaning, id) => {
				const { antonyms, definitions, partOfSpeech, synonyms } = meaning;
				return (
					<div className="mt-5" key={id}>
						<p className=" font-bold">
							{id + 1}. {partOfSpeech}
						</p>

						{definitions.map((item, id) => (
							<p key={id}>{item.definition}</p>
						))}
						<div className="mt-3 flex flex-row flex-wrap gap-x-3 gap-y-3">
							{synonyms.map((synonym, id) => {
								return (
									<div
										key={id}
										className="rounded-md border-gray-400 bg-gray-200 px-3 py-1 text-slate-800 dark:text-slate-900">
										{synonym}
									</div>
								);
							})}
						</div>
					</div>
				);
			})}
		</>
	);
};

export default DefinitionListing;
