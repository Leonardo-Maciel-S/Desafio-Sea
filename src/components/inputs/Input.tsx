import type { InputHTMLAttributes } from "react";

const Input = ({ ...rest }: InputHTMLAttributes<HTMLInputElement>) => {
	return (
		<input
			className="px-[12px] py-1 outline-none border border-defaultBlue rounded-[10px] text-base font-medium text-dark placeholder:text-dark "
			{...rest}
		/>
	);
};

export default Input;
