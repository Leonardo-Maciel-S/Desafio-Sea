import type { HTMLAttributes } from "react";
import { tv } from "tailwind-variants";

const button = tv({
	base: "border border-defaultBlue rounded-[10px] text-center",
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
		bgFull: {
			true: "bg-default text-white font-bold border-none px-14",
			false: "bg-white text-defaultBlue",
		},
		bgFullDisable: {
			true: "bg-mediumGray",
		},
	},
	defaultVariants: {
		textSize: "default",
		isEnable: true,
		bgFull: false,
	},
});

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
	textSize?: "default" | "base16";
	flex1?: boolean;
	isEnable?: boolean;
	bgFull?: boolean;
	bgFullDisable?: boolean;
}

const Button = ({
	children,
	textSize,
	isEnable,
	flex1,
	className,
	bgFull,
	bgFullDisable,
	...rest
}: ButtonProps) => {
	return (
		<button
			className={button({
				flex1,
				textSize,
				isEnable,
				className,
				bgFull,
				bgFullDisable,
			})}
			disabled={!isEnable}
			{...rest}
		>
			{children}
		</button>
	);
};

export default Button;
