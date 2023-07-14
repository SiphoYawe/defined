import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<>
			<div className=" border-t-2 py-3  dark:border-t dark:border-darkModeWhite">
				<div className=" container m-auto">
					<p className=" text-xs text-gray-400">
						©Copyright. All Rights Reserved. Made with ❤️ by{" "}
						<span className=" underline">
							<Link to="https://twitter.com/siphoyawe">Sipho Yawe</Link>
						</span>
					</p>
				</div>
			</div>
		</>
	);
};

export default Footer;
