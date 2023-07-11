import { useToast } from "@chakra-ui/react";

const Error = ({ error }) => {
	const toast = useToast();

	console.log(error);

	if (error.response.status === 404) {
		return toast({
			title: "Warning",
			description: "The word that you are looking for can not be found.",
			status: "warning",
			variant: "subtle",
			isClosable: true,
		});
	} else {
		return toast({
			title: "Error",
			description: "An unexpected error has occured.",
			status: "error",
			isClosable: true,
		});
	}
};

export default Error;
