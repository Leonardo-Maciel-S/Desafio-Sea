import type { HTMLAttributes } from "react";

interface FieldsetProps extends HTMLAttributes<HTMLFieldSetElement> {}

const Fieldset = ({ children, className }: FieldsetProps) => {
	return (
		<fieldset
			className={`flex flex-wrap w-full p-[12px] rounded-[10px] text-base font-medium border border-defaultBlue shadow-fieldset ${className}`}
		>
			{children}
		</fieldset>
	);
};

export default Fieldset;
