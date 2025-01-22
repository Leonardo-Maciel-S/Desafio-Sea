import { useState } from "react";
import { useFormHook } from "../../../hooks/useFormHook";
import Button from "../../buttons/Button";
import Fieldset from "../../inputs/Fieldset";
import Select from "../../inputs/Select";
import { Epis } from "./Epis";

export const Activity = () => {
	const { register } = useFormHook();

	const [listOfActivity, setListOfActivity] = useState([1]);

	const handleAddActivity = (method: string, position?: number) => {
		if (method === "add") {
			const lastIndex = listOfActivity.length - 1;
			setListOfActivity([...listOfActivity, listOfActivity[lastIndex] + 1]);

			return;
		}

		const newList = listOfActivity.filter((item) => {
			return item !== position;
		});

		setListOfActivity([...newList]);
	};

	return (
		<div className="flex flex-col gap-6">
			{listOfActivity.map((item, index) => {
				return (
					<Fieldset key={item} className="flex-col gap-6 ">
						<div className="flex flex-col gap-2 ">
							<span className="text-sm font-medium">
								Selecione a atividade:
							</span>

							<Select
								defaultValue="Atividade 1"
								options={["Atividade 1", "Atividade 2", "Atividade 3"]}
								{...register("gender")}
							/>
						</div>

						<Epis />

						{index < listOfActivity.length - 1 && (
							<Button
								onClick={() => handleAddActivity("delete", item)}
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
