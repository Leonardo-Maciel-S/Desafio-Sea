import { useContext, useState } from "react";
import Button from "../../buttons/Button";
import Label from "../../inputs/Label";
import { EditEmployeeContext } from "../../../context/EditEmployeeContext";
import { useSelector } from "react-redux";
import type { RootState } from "../../../store";

export const Epis = ({ activityNumber }: { activityNumber: number }) => {
	const context = useContext(EditEmployeeContext);
	if (!context) return;

	const { employeeToEdit } = useSelector((state: RootState) => state.employees);
	if (!employeeToEdit) return;

	const {
		register,
		unregister,
		formState: { errors },
	} = context.formMethods;

	const generateListOfEpi = () => {
		const list: number[] = [];

		employeeToEdit.activities[activityNumber].epi.forEach((item, index) => {
			list.push(index);
		});
		return list;
	};

	const list = generateListOfEpi();

	const [listOfEpi, setListOfEpi] = useState(list);

	const handleAddEpi = (method: string, position: number) => {
		unregister("activities");

		if (method === "add") {
			const lastIndex = listOfEpi.length - 1;
			setListOfEpi([...listOfEpi, listOfEpi[lastIndex] + 1]);

			return;
		}

		const newList = listOfEpi.filter((item, index) => {
			return index !== position;
		});

		setListOfEpi([...newList]);
	};

	const options = ["Cinto", "Capacete", "Bota"];

	return (
		<div className="flex flex-col gap-4">
			{listOfEpi.map((item, index) => {
				if (index < listOfEpi.length) {
					return (
						<div
							key={item}
							className="flex gap-6 items-end flex-wrap justify-end"
						>
							<div className="flex flex-col gap-[8px] flex-1 h-16 justify-end xl:min-w-[250px] ">
								<span className="text-sm font-medium">Selecione o EPI:</span>

								<div
									className={`input h-9 flex justify-between items-center ${errors.activities?.[activityNumber]?.epi?.[index]?.name && "error"}`}
								>
									<select
										{...register(
											`activities.${activityNumber}.epi.${index}.name`,
											{
												value:
													employeeToEdit.activities[activityNumber].epi[index]
														.name,
											},
										)}
										defaultValue={""}
										className="bg-transparent w-full flex justify-between items-center gap-2 "
									>
										<option
											value={
												employeeToEdit.activities[activityNumber].epi[index]
													.name
											}
											disabled
										>
											{
												employeeToEdit.activities[activityNumber].epi[index]
													.name
											}
										</option>
										{options.map((option) => {
											if (
												employeeToEdit.activities[activityNumber].epi[index]
													.name !== option
											) {
												return (
													<option key={option} value={option}>
														{option}
													</option>
												);
											}
										})}
									</select>
								</div>
							</div>

							<Label name="Informe o número do CA:" className="  ">
								<input
									type="text"
									placeholder="Digite o número"
									defaultValue={
										employeeToEdit.activities[activityNumber].epi[index].ca
									}
									className={`input py-2 ${errors.activities?.[activityNumber]?.epi?.[index]?.ca && "error"}`}
									{...register(`activities.${activityNumber}.epi.${index}.ca`, {
										value:
											employeeToEdit.activities[activityNumber].epi[index].ca,
									})}
								/>
							</Label>

							<div className="flex-1 w-full border">
								{index > listOfEpi.length ? (
									<Button
										className="font-normal min-w-52 py-[8px] flex-1 w-full"
										isEnable
										onClick={() => handleAddEpi("delete", index)}
									>
										Excluir EPI
									</Button>
								) : (
									<Button
										className="font-normal min-w-52 py-[8px] flex-1 w-full"
										isEnable
									>
										Adicionar EPI
									</Button>
								)}
							</div>
						</div>
					);
				}

				return (
					<div
						key={item}
						className="flex gap-6 items-end flex-wrap justify-end"
					>
						<div className="flex flex-col gap-[8px] flex-1 h-16 justify-end xl:min-w-[250px] ">
							<span className="text-sm font-medium">Selecione o EPI:</span>

							<div
								className={`input h-9 flex justify-between items-center ${errors.activities?.[activityNumber]?.epi?.[index]?.name && "error"}`}
							>
								<select
									{...register(
										`activities.${activityNumber}.epi.${index}.name`,
										{},
									)}
									defaultValue={""}
									className="bg-transparent w-full flex justify-between items-center gap-2 "
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

						<Label name="Informe o número do CA:" className="  ">
							<input
								type="text"
								placeholder="Digite o número"
								className={`input py-2 ${errors.activities?.[activityNumber]?.epi?.[index]?.ca && "error"}`}
								{...register(`activities.${activityNumber}.epi.${index}.ca`)}
							/>
						</Label>

						<div className="flex-1 w-full border">
							{index < listOfEpi.length ? (
								<Button
									className="font-normal min-w-52 py-[8px] flex-1 w-full"
									isEnable
									onClick={() => handleAddEpi("delete", index)}
								>
									Excluir EPI
								</Button>
							) : (
								<Button
									className="font-normal min-w-52 py-[8px] flex-1 w-full"
									isEnable
									onClick={() => handleAddEpi("add", index)}
								>
									Adicionar EPI
								</Button>
							)}
						</div>
					</div>
				);
			})}
		</div>
	);
};
