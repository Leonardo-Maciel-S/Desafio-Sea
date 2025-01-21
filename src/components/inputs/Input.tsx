import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = ({ type, ...rest }: InputProps) => {
	return (
		<input
			type={type}
			{...rest}
			className="px-[12px] py-1 outline-none border border-defaultBlue rounded-[10px] text-base font-medium text-dark placeholder:text-dark 2xl:max-w-[50%px]"
		/>
	);
};

export default Input;
