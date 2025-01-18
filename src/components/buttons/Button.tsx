import type { HTMLAttributes } from "react";
import { tv } from "tailwind-variants";

const button = tv({
	base: "bg-white text-defaultBlue border border-defaultBlue rounded-[10px] text-center",
	variants: {
		textSize: {
			default: "text-sm px-10 py-[10px]",
			base16: "text-base px-10 py-6",
		},
		isEnable: {
			false: "text-mediumGray border-mediumGray",
		},
		flex1: {
			true: "flex-1",
		},
	},
	defaultVariants: {
		textSize: "default",
		isEnable: true,
	},
});

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
	textSize?: "default" | "base16";
	flex1?: boolean;
	isEnable?: boolean;
}

const Button = ({
	children,
	textSize,
	isEnable,
	flex1,
	...rest
}: ButtonProps) => {
	return (
		<button
			className={button({ flex1, textSize, isEnable })}
			disabled={!isEnable}
			{...rest}
		>
			{children}
		</button>
	);
};

export default Button;
