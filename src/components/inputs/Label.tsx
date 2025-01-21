import type { HTMLAttributes } from "react";

interface LabelProps extends HTMLAttributes<HTMLDivElement> {
	name: string;
	minWidth?: boolean;
}

const Label = ({
	name,
	className,
	children,
	minWidth,
	...rest
}: LabelProps) => {
	const min = minWidth && " xl:min-w-[45%]";
	return (
		<div
			className={`flex flex-col gap-[8px] flex-1 h-16 ${className} ${min}`}
			{...rest}
		>
			<span className="">{name}</span>
			{children}
		</div>
	);
};

export default Label;
