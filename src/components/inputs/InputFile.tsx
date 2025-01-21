import { FaPaperclip } from "react-icons/fa";

const InputFile = () => {
	return (
		<label
			htmlFor="file"
			className="px-[12px] py-1 outline-none border border-defaultBlue rounded-[10px] text-base font-medium text-dark placeholder:text-dark flex justify-between items-center"
		>
			<input id="file" type="file" className="" />
			<FaPaperclip size={18} color="#959595" />
		</label>
	);
};

export default InputFile;
