import { useContext, useState } from "react";

import Fieldset from "../../inputs/Fieldset";
import InputRadio from "../../inputs/InputRadio";
import Label from "../../inputs/Label";
import { NewEmployeeContext } from "../../../context/NewEmployeeContext";

export const PersonalDatas = () => {
	const [inputGender, setInputGender] = useState("");

	const context = useContext(NewEmployeeContext);
	if (!context) return;

	const {
		register,
		formState: { errors },
	} = context.formMethods;

	console.log(errors);

	const options = ["Frontend", "Backend", "Designer"];

	return (
		<Fieldset className="gap-[24px]">
			<Label name="Nome" minWidth>
				<input
					type="text"
					placeholder="Digite seu nome"
					className={`input ${errors.name && "error"}`}
					{...register("name")}
				/>
			</Label>

			<div
				className={`flex flex-col flex-1 gap-[8px] ${errors.gender && "border-b-1 border-red-500"}`}
			>
				<span className="font-medium text-base">Sexo</span>

				<InputRadio setInputGender={setInputGender} />
			</div>

			<Label name="CPF" minWidth>
				<input
					className={`input ${errors.cpf && "error"}`}
					{...register("cpf")}
					type="text"
					placeholder="CPF"
				/>
			</Label>

			<Label name="Data de Nascimento">
				<input
					type="date"
					className={`input ${errors.birth && "error"}`}
					{...register("birth")}
				/>
			</Label>

			<Label name="RG" className="flex-1" minWidth>
				<input
					className={`input ${errors.RG && "error"}`}
					{...register("RG")}
					type="text"
					placeholder="RG"
				/>
			</Label>

			<Label name="Cargo" minWidth className="xl:min-w-[250px] flex-1">
				<div
					className={`input h-9 flex justify-between items-center ${errors.job && "error"} xl:min-w-[250px]`}
				>
					<select
						{...register("job")}
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
			</Label>
		</Fieldset>
	);
};
