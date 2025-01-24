import { useContext, useState } from "react";
import Button from "../../buttons/Button";
import Fieldset from "../../inputs/Fieldset";
import { Epis } from "./Epis";
import { EditEmployeeContext } from "../../../context/EditEmployeeContext";
import { useSelector } from "react-redux";
import type { RootState } from "../../../store";
import GenerateActivity from "../../GenerateActivity";
import GenerateEPI from "../../GenerateEPI";

export const EditActivity = () => {
	const { employeeToEdit } = useSelector((state: RootState) => state.employees);
	if (!employeeToEdit) return;

	const generateListOfActivity = () => {
		const list: number[] = [];

		employeeToEdit.activities.forEach((item, index) => {
			list.push(index);
		});
		return list;
	};

	const list = generateListOfActivity();
	const [listOfActivity, setListOfActivity] = useState(list);

	const context = useContext(EditEmployeeContext);
	if (!context) return;
	const {
		register,
		unregister,
		formState: { errors },
	} = context.formMethods;

	const handleAddActivity = (method: string, position?: number) => {
		unregister("activities");

		if (method === "add") {
			const lastIndex = listOfActivity.length - 1;
			console.log(listOfActivity);

			setListOfActivity([...listOfActivity, listOfActivity[lastIndex] + 1]);

			return;
		}

		const newList = listOfActivity.filter((item, index) => {
			return index !== position;
		});

		console.log(newList);
		setListOfActivity([...newList]);
	};

	const options = ["Atividade 1", "Atividade 2", "Atividade 3"];

	return (
		<div className="flex flex-col gap-6">
			{listOfActivity.map((item, index) => {
				if (index < employeeToEdit.activities.length) {
					return (
						<Fieldset key={item} className="flex-col gap-6 ">
							<div className="flex flex-col gap-2 ">
								<span className="text-sm font-medium">
									Selecione a atividade:
								</span>

								<div
									className={`input h-9 flex justify-between items-center ${errors.activities?.[index]?.name && "error"}`}
								>
									<select
										{...register(`activities.${index}.name`, {
											value: employeeToEdit?.activities[index].name,
										})}
										className={`bg-transparent w-full flex justify-between items-center gap-2  `}
									>
										<option
											value={employeeToEdit?.activities[index].name}
											disabled
										>
											{employeeToEdit?.activities[index].name}
										</option>

										{options.map((option) => {
											if (employeeToEdit?.activities[index].name !== option)
												return (
													<option key={option} value={option}>
														{option}
													</option>
												);
										})}
									</select>
								</div>
							</div>

							{index < employeeToEdit.activities[index].epi.length ? (
								<Epis activityNumber={index} />
							) : (
								<GenerateEPI
									length={listOfActivity.length}
									activityNumber={index}
									isNew
									options={options}
								/>
							)}

							{index < listOfActivity.length - 1 && (
								<Button
									onClick={() => handleAddActivity("delete", index)}
									className="font-normal text-sm"
									isEnable
								>
									Excluir Atividade
								</Button>
							)}
						</Fieldset>
					);
				}

				return (
					<GenerateActivity
						key={item}
						item={item}
						index={index}
						length={listOfActivity.length}
						isNew={false}
						options={options}
						listOfActivity={listOfActivity}
						handleAddActivity={handleAddActivity}
					/>
				);
			})}
			<Button
				onClick={() => handleAddActivity("add")}
				className="font-normal text-sm"
				isEnable
			>
				Adicionar outra atividade
			</Button>
		</div>
	);
};
