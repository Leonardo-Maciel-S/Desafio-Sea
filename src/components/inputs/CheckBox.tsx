import { FaCheck } from "react-icons/fa";

interface CheckBoxProps {
	useEPI: boolean;
	setUseEPI: (value: boolean) => void;
}

const CheckBox = ({ useEPI, setUseEPI }: CheckBoxProps) => {
	return (
		<div className="flex items-center">
			<button
				type="button"
				onClick={() => setUseEPI(!useEPI)}
				className="size-3 border-defaultBlue border flex justify-center items-center"
			>
				{!useEPI && <FaCheck size={10} color="#4fa1c2" />}
			</button>
			<input type="checkbox" className="hidden" checked={!useEPI} />
		</div>
	);
};

export default CheckBox;
