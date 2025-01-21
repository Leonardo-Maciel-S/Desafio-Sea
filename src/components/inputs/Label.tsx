import type { HTMLAttributes } from "react";

interface LabelProps extends HTMLAttributes<HTMLDivElement> {
	name: string;
}

const Label = ({ name, className, children, ...rest }: LabelProps) => {
	return (
		<div
			className={`flex flex-col gap-[8px] flex-1 ${className} xl:min-w-[45%]`}
			{...rest}
		>
			<span className="">{name}</span>
			{children}
		</div>
	);
};

export default Label;
