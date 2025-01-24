import { useContext, useState } from "react";
import Button from "../../buttons/Button";
import Fieldset from "../../inputs/Fieldset";
import { Epis } from "./Epis";
import { NewEmployeeContext } from "../../../context/NewEmployeeContext";

export const Activity = () => {
	const [listOfActivity, setListOfActivity] = useState([0]);

	const context = useContext(NewEmployeeContext);
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
			setListOfActivity([...listOfActivity, listOfActivity[lastIndex] + 1]);

			return;
		}

		const newList = listOfActivity.filter((item, index) => {
			return index !== position;
		});

		setListOfActivity([...newList]);
	};

	const options = ["Atividade 1", "Atividade 2", "Atividade 3"];

	return (
		<div className="flex flex-col gap-6">
			{listOfActivity.map((item, index) => {
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
									{...register(`activities.${index}.name`)}
									defaultValue={""}
									className={`bg-transparent w-full flex justify-between items-center gap-2  `}
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

						<Epis activityNumber={index} />

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
