import { useRef } from "react";
import type { Register } from "../../../types/typesNewEmployee";

import Fieldset from "../../inputs/Fieldset";
import InputRadio from "../../inputs/InputRadio";
import Label from "../../inputs/Label";
import Select from "../../inputs/Select";

interface PersonalDatasProps extends Register {}

export const PersonalDatas = ({ register, errors }: PersonalDatasProps) => {
	console.log(errors);
	const valueSelect = useRef("");

	return (
		<Fieldset className="gap-[24px]">
			<Label name="Nome" minWidth>
				<input
					type="text"
					placeholder="Nome"
					className={`input ${errors.name && "error"}`}
					{...register("name")}
				/>
			</Label>

			<div className="flex flex-col flex-1 gap-[8px]">
				<span className="font-medium text-base">Sexo</span>

				<InputRadio {...register("gender")} />
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

			<Label name="RG" minWidth>
				<input
					className={`input ${errors.RG && "error"}`}
					{...register("RG")}
					type="text"
					placeholder="RG"
				/>
			</Label>

			<Label name="Cargo" minWidth>
				<Select
					options={["Frontend", "Design", "Backend"]}
					defaultValue="Frontend"
				/>
				<input type="text" className="hidden" value={valueSelect.current} />
			</Label>
		</Fieldset>
	);
};
