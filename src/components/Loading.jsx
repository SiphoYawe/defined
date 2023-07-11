import { SkeletonText, Skeleton } from "@chakra-ui/react";

const Loading = () => {
	return (
		<div className=" mt-20 w-full">
			<Skeleton height={8} width={150} />
			<SkeletonText mt="4" noOfLines={7} spacing="4" skeletonHeight="2" />
		</div>
	);
};

export default Loading;
