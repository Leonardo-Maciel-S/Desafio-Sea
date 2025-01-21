import { useDispatch, useSelector } from "react-redux";
import Button from "../buttons/Button";
import Switch from "../Switch";
import type { RootState } from "../../store";
import { nextStage } from "../../slices/stages";

import arrowLeft from "../../assets/arrowLeft.svg";
import Fieldset from "../inputs/fieldset";
import { useState } from "react";
import Input from "../inputs/Input";
import Label from "../inputs/Label";
import { setIsNewEmployeeModalOpen } from "../../slices/employees";
import InputRadio from "../inputs/InputRadio";
import Select from "../inputs/Select";

const NewEmployee = () => {
	const { completedFirstStage } = useSelector(
		(state: RootState) => state.stages,
	);

	const dispatch = useDispatch();

	const [isActive, setIsActive] = useState(true);

	const handleChangeSelect = (value: string) => {
		console.log(value);
	};

	return (
		<div className="rounded-default w-full overflow-hidden ">
			<header className="bg-default text-white px-5 py-2 flex items-center gap-4">
				<button
					type="button"
					onClick={() => dispatch(setIsNewEmployeeModalOpen(false))}
				>
					<img
						src={arrowLeft}
						width={"24px"}
						height={"24px"}
						alt="seta para esquerda"
					/>
				</button>
				<h2 className="text-[28px] font-normal">Adicionar Funcionário</h2>
			</header>
			<div className="flex flex-col justify-center px-6 py-4 gap-4 w-full border bg-white rounded-b-[20px]">
				<div className="flex flex-col justify-center gap-4 ">
					<Fieldset className="justify-between">
						<span>O trabalhador está ativo ou inativo?</span>
						<Switch
							onClick={() => setIsActive(!isActive)}
							active={isActive}
							on="Ativo"
							off="inativo"
						/>
					</Fieldset>

					<Fieldset className="gap-[24px]">
						<Label name="Nome">
							<Input type="text" placeholder="Nome" />
						</Label>

						<div className="flex flex-col flex-1 gap-[8px]">
							<span className="font-medium text-base">Sexo</span>

							<InputRadio />
						</div>

						<Label name="CPF">
							<Input type="text" placeholder="CPF" />
						</Label>

						<Label name="Data de Nascimento">
							<Input type="Date" />
						</Label>

						<Label name="RG">
							<Input type="text" placeholder="Nome" />
						</Label>

						<Label name="Cargo">
							<Select
								defaultValue="Frontend"
								options={["Frontend", "Design", "Backend"]}
							/>
						</Label>
					</Fieldset>
				</div>

				<div className="my-8 w-full flex justify-end">
					<Button
						isEnable={completedFirstStage}
						bgFullDisable={!completedFirstStage}
						bgFull
						onClick={() => dispatch(nextStage())}
					>
						Próximo passo
					</Button>
				</div>
			</div>
		</div>
	);
};

export default NewEmployee;
