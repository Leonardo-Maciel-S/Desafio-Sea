import Fieldset from "../../inputs/Fieldset";
import Input from "../../inputs/Input";
import InputRadio from "../../inputs/InputRadio";
import Label from "../../inputs/Label";
import Select from "../../inputs/Select";

export const PersonalDatas = () => {
	return (
		<Fieldset className="gap-[24px]">
			<Label name="Nome" minWidth>
				<Input type="text" placeholder="Nome" />
			</Label>

			<div className="flex flex-col flex-1 gap-[8px]">
				<span className="font-medium text-base">Sexo</span>

				<InputRadio />
			</div>

			<Label name="CPF" minWidth>
				<Input type="text" placeholder="CPF" />
			</Label>

			<Label name="Data de Nascimento" minWidth>
				<Input type="Date" />
			</Label>

			<Label name="RG" minWidth>
				<Input type="text" placeholder="RG" />
			</Label>

			<Label name="Cargo" minWidth>
				<Select
					defaultValue="Frontend"
					options={["Frontend", "Design", "Backend"]}
				/>
			</Label>
		</Fieldset>
	);
};
