import { useContext, useState } from "react";
import Button from "../../buttons/Button";
import Label from "../../inputs/Label";
import { NewEmployeeContext } from "../../../context/NewEmployeeContext";

export const Epis = ({ activityNumber }: { activityNumber: number }) => {
	const [listOfEpi, setListOfEpi] = useState([0]);

	const handleAddEpi = (method: string, position?: number) => {
		if (method === "add") {
			const lastIndex = listOfEpi.length - 1;
			setListOfEpi([...listOfEpi, listOfEpi[lastIndex] + 1]);

			return;
		}

		const newList = listOfEpi.filter((item) => {
			unregister(`activities.${activityNumber}`);
			return item !== position;
		});

		setListOfEpi([...newList]);
	};

	const context = useContext(NewEmployeeContext);
	if (!context) return;

	const {
		register,
		unregister,
		formState: { errors },
	} = context.formMethods;

	const options = ["Cinto", "Capacete"];

	return (
		<div className="flex flex-col gap-4">
			{listOfEpi.map((item, index) => (
				<div key={item} className="flex gap-6 items-end flex-wrap justify-end">
					<div className="flex flex-col gap-[8px] flex-1 h-16 justify-end xl:min-w-[250px] ">
						<span className="text-sm font-medium">Selecione o EPI:</span>

						<div
							className={`input h-9 flex justify-between items-center ${errors.activities?.[activityNumber]?.epi?.[item]?.name && "error"}`}
						>
							<select
								{...register(
									`activities.${activityNumber}.epi.${item}.name`,
									{},
								)}
								defaultValue={""}
								className="bg-transparent w-full flex justify-between items-center gap-2 "
							>
								<option value="" disabled>
									Selecione uma opção {item}
								</option>
								{options.map((option) => (
									<option key={option} value={option}>
										{option}
									</option>
								))}
							</select>
						</div>
					</div>

					<Label name="Informe o número do CA:" className="  ">
						<input
							type="text"
							placeholder="Digite o número"
							className={`input py-2 ${errors.activities?.[activityNumber]?.epi?.[item]?.ca && "error"}`}
							{...register(`activities.${activityNumber}.epi.${item}.ca`)}
						/>
					</Label>

					<div className="flex-1 w-full border">
						{index + 1 < listOfEpi.length ? (
							<Button
								className="font-normal min-w-52 py-[8px] flex-1 w-full"
								isEnable
								onClick={() => handleAddEpi("delete", item)}
							>
								Excluir EPI
							</Button>
						) : (
							<Button
								className="font-normal min-w-52 py-[8px] flex-1 w-full"
								isEnable
								onClick={() => handleAddEpi("add", item)}
							>
								Adicionar EPI
							</Button>
						)}
					</div>
				</div>
			))}
		</div>
	);
};
