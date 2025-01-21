import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import type { RootState } from "../../store";
import { setIsNewEmployeeModalOpen } from "../../slices/employees";

// Pages
import { completeFirstStage, nextStage } from "../../slices/stages";

// Components
import Button from "../buttons/Button";
import Switch from "../Switch";
import Label from "../inputs/Label";
import Input from "../inputs/Input";
import Select from "../inputs/Select";
import CheckBox from "../inputs/CheckBox";
import Fieldset from "../inputs/Fieldset";
import InputRadio from "../inputs/InputRadio";
import arrowLeft from "../../assets/arrowLeft.svg";
import InputFile from "../inputs/InputFile";
import { Link } from "react-router";

const NewEmployee = () => {
	const { completedFirstStage } = useSelector(
		(state: RootState) => state.stages,
	);

	const { isNewEmployeeModalOpen } = useSelector(
		(state: RootState) => state.employees,
	);

	const dispatch = useDispatch();

	const [isActive, setIsActive] = useState(true);
	const [useEPI, setUseEPI] = useState(true);

	const [listOfEpi, setListOfEpi] = useState([1]);

	const handleChangeSelect = (value: string) => {
		console.log(value);
	};

	const handleAddEPi = (method: string, position?: number) => {
		if (method === "add") {
			const lastIndex = listOfEpi.length - 1;
			setListOfEpi([...listOfEpi, listOfEpi[lastIndex] + 1]);

			return;
		}

		const newList = listOfEpi.filter((item) => {
			return item !== position;
		});

		setListOfEpi([...newList]);
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
						<span className="font-medium">
							O trabalhador está ativo ou inativo?
						</span>
						<Switch
							onClick={() => setIsActive(!isActive)}
							active={isActive}
							on="Ativo"
							off="inativo"
						/>
					</Fieldset>

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
				</div>

				<Fieldset className="flex-col gap-4">
					<span className="font-medium">
						Quais EPIs o trabalhador usa na atividade?
					</span>
					<div className="flex gap-2">
						<CheckBox useEPI={useEPI} setUseEPI={setUseEPI} />
						<span>O trabalhador não usa EPI.</span>
					</div>
					{useEPI && (
						<div className="flex flex-col gap-6">
							{listOfEpi.map((item, index) => {
								return (
									<Fieldset key={item} className="flex-col gap-6">
										<div className="flex flex-col gap-2  ">
											<span className="text-sm font-medium">
												Selecione a atividade:
											</span>

											<Select
												defaultValue="Atividade 1"
												options={["Atividade 1", "Atividade 2", "Atividade 3"]}
											/>
										</div>

										<div className="flex gap-6 items-end flex-wrap ">
											<Label name="Selecione o EPI:" className="">
												<Select
													defaultValue="Calçado de segurança"
													options={["Cinto", "Capacete"]}
												/>
											</Label>

											<Label name="Informe o número do CA:">
												<Input type="text" placeholder="Digite o número" />
											</Label>

											<Button className="font-normal" isEnable>
												Adicionar EPI
											</Button>
										</div>

										{index < listOfEpi.length - 1 && (
											<Button
												onClick={() => handleAddEPi("delete", item)}
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
								onClick={() => handleAddEPi("add")}
								className="font-normal text-sm"
								isEnable
							>
								Adicionar outra atividade
							</Button>
						</div>
					)}
				</Fieldset>

				{useEPI && (
					<Fieldset className="flex-col gap-6">
						<span className="text-sm font-medium">
							Adicione Atestado de Saúde (opcional):
						</span>

						<InputFile />
					</Fieldset>
				)}

				<Button className="font-normal text-sm  my-4" isEnable>
					Salvar
				</Button>
			</div>

			<div className="my-8 w-full flex justify-end">
				<Link to="/employees/2">
					<Button
						isEnable={true}
						bgFullDisable={false}
						bgFull
						onClick={() => dispatch(nextStage())}
					>
						Próximo passo
					</Button>
				</Link>
			</div>
		</div>
	);
};

export default NewEmployee;
