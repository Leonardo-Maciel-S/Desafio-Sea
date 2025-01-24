const SpaceBetweenCards = ({ className }: { className?: string }) => {
	return (
		<div
			className={`hidden phone:flex size-9 mb-2 border-t-4 border-defaultBlue border-dashed flex-1 min-w-8  ${className}`}
		/>
	);
};

export default SpaceBetweenCards;
