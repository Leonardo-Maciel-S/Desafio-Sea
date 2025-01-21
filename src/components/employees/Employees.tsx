import { useState } from "react";
import Button from "../buttons/Button";
import { useDispatch, useSelector } from "react-redux";

import EmployeeCard from "../employeeCard/EmployeeCard";

import Switch from "../Switch";
import type { RootState } from "../../store";
import { completeFirstStage, nextStage } from "../../slices/stages";
import { setIsNewEmployeeModalOpen } from "../../slices/employees";

const Employees = () => {
	const { completedFirstStage } = useSelector(
		(state: RootState) => state.stages,
	);
	const dispatch = useDispatch();

	const [onlyActive, setOnlyActives] = useState(false);

	const handleClickFilter = () => {
		if (onlyActive) {
			setOnlyActives(false);
			return;
		}

		setOnlyActives(true);
	};

	return (
		<div className="rounded-default w-full overflow-hidden ">
			<header className="bg-default text-white px-5 py-2">
				<h2 className="text-[28px]">Funcionário&#40;s&#41;</h2>
			</header>
			<div className="flex flex-col justify-center px-6 py-4 gap-4 w-full border bg-white rounded-b-[20px]">
				<div className="flex flex-col justify-center gap-4 ">
					<Button
						isEnable
						textSize="base16"
						onClick={() => {
							dispatch(setIsNewEmployeeModalOpen(true));
						}}
					>
						+ Adicionar Funcionário
					</Button>
					<div className="flex justify-between">
						<div className="flex gap-6">
							<Button isEnable={!onlyActive} onClick={handleClickFilter}>
								Ver apenas ativos
							</Button>
							<Button isEnable={onlyActive} onClick={handleClickFilter}>
								Limpar filtros
							</Button>
						</div>

						<span className="text-darkGray text-sm font-normal">
							Ativos 2/4
						</span>
					</div>
				</div>

				<div className="flex flex-col gap-4 py-6">
					<EmployeeCard name="Daniel Alves da Silva" active />
					<EmployeeCard name="Giselle Torres Lopes" />
					<EmployeeCard name="Ana Bispo dos Santos" />
					<EmployeeCard name="Regina Elisa Souza" active />
				</div>

				<div className="w-full flex justify-end items-center gap-2 text-sm text-darkGray font-regular">
					<span>A etapa está concluída?</span>
					<Switch
						onClick={() => dispatch(completeFirstStage())}
						on="Sim"
						off="Não"
					/>
				</div>
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
	);
};

export default Employees;
