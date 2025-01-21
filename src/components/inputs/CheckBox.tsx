import { FaCheck } from "react-icons/fa";

interface CheckBoxProps {
	useEPI: boolean;
	setUseEPI: (value: boolean) => void;
}

const CheckBox = ({ useEPI, setUseEPI }: CheckBoxProps) => {
	return (
		<label htmlFor="epi" className="flex items-center">
			<button
				type="button"
				className="size-3 border-defaultBlue border flex justify-center items-center"
				onClick={() => setUseEPI(!useEPI)}
			>
				{!useEPI && <FaCheck size={10} color="#4fa1c2" />}
			</button>
			<input
				name="epi"
				type="checkbox"
				className="hidden"
				defaultChecked={!useEPI}
			/>
		</label>
	);
};

export default CheckBox;
