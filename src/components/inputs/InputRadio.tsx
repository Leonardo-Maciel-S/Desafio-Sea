import { useContext, useState } from "react";
import { NewEmployeeContext } from "../../context/NewEmployeeContext";
import { EditEmployeeContext } from "../../context/EditEmployeeContext";
import { useSelector } from "react-redux";
import type { RootState } from "../../store";

const InputRadio = ({ isNew = false }: { isNew?: boolean }) => {
	const { employeeToEdit } = useSelector((state: RootState) => state.employees);

	const defaultValue = employeeToEdit?.gender || "";

	const [selected, isSelected] = useState(defaultValue);

	const handleClick = (gender: string): void => {
		if (gender === "female") {
			isSelected("female");
			return;
		}

		isSelected("male");
	};

	const context = isNew
		? useContext(NewEmployeeContext)
		: useContext(EditEmployeeContext);
	if (!context) return;

	const {
		register,
		formState: { errors },
	} = context.formMethods;

	return (
		<div
			className={`flex gap-2 items-center h-8 ${errors.gender && "border border-red-500 rounded-[10px] px-2"}`}
		>
			<button type="button" onClick={() => handleClick("female")} className="">
				<label
					htmlFor="female"
					className="flex items-center justify-center gap-2"
				>
					<div
						className={`${selected === "female" && "bg-default"} size-4 border border-bgRadio rounded-full transition-all delay-75 linear`}
					/>
					<span>Feminino</span>

					<input
						type="radio"
						id="female"
						{...register("gender", {
							value: employeeToEdit?.gender as "female" | "male",
						})}
						value="female"
						className="hidden"
					/>
				</label>
			</button>

			<button type="button" onClick={() => handleClick("male")}>
				<label
					htmlFor="male"
					className="flex items-center justify-center gap-2 "
				>
					<div
						className={`${selected === "male" && "bg-default"} size-4 border border-bgRadio rounded-full transition-all delay-75 linear`}
					/>
					<span>Masculino</span>
					<input
						type="radio"
						id="male"
						{...register("gender", {
							value: employeeToEdit?.gender as "female" | "male",
						})}
						value="male"
						className="hidden"
					/>
				</label>
			</button>
		</div>
	);
};

export default InputRadio;
