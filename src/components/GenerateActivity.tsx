import { type HTMLAttributes, useContext } from "react";
import Fieldset from "./inputs/Fieldset";
import { NewEmployeeContext } from "../context/NewEmployeeContext";
import { EditEmployeeContext } from "../context/EditEmployeeContext";
import Button from "./buttons/Button";
import GenerateEPI from "./GenerateEPI";

interface GenerateActivityProps extends HTMLAttributes<HTMLDivElement> {
	item: number;
	index: number;
	length: number;
	isNew?: boolean;
	options: string[];
	listOfActivity: number[];
	handleAddActivity: (method: string, index: number) => void;
}

const GenerateActivity = ({
	item,
	index,
	length,
	isNew,
	options,
	listOfActivity,
	handleAddActivity,
}: GenerateActivityProps) => {
	const context = isNew
		? useContext(NewEmployeeContext)
		: useContext(EditEmployeeContext);
	if (!context) return;

	const {
		register,
		formState: { errors },
	} = context.formMethods;

	return (
		<div>
			<Fieldset key={item} className="flex-col gap-6 ">
				<div className="flex flex-col gap-2 ">
					<span className="text-sm font-medium">Selecione a atividade:</span>

					<div
						className={`input h-9 flex justify-between items-center ${errors.activities?.[index]?.name && "error"}`}
					>
						<select
							{...register(`activities.${index}.name`)}
							defaultValue={""}
							className={`bg-transparent w-full flex justify-between items-center gap-2`}
						>
							<option value="" disabled>
								Selecione uma opção
							</option>
							{options.map((option) => (
								<option key={option} value={option}>
									{option}
								</option>
							))}
						</select>
					</div>
				</div>

				<GenerateEPI
					length={listOfActivity.length}
					activityNumber={index}
					isNew={false}
					options={options}
				/>

				{index < length - 1 && (
					<Button
						onClick={() => handleAddActivity("delete", index)}
						className="font-normal text-sm"
						isEnable
					>
						Excluir Atividade
					</Button>
				)}
			</Fieldset>
		</div>
	);
};

export default GenerateActivity;
