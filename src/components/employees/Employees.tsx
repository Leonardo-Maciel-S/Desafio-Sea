import { useState } from "react";
import Button from "../buttons/Button";
import { useDispatch } from "react-redux";

import EmployeeCard from "../employeeCard/EmployeeCard";

import Switch from "../Switch";

const Employees = () => {
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
		<div className="rounded-default w-full overflow-hidden">
			<header className="bg-default text-white px-5 py-2">
				<h2 className="text-[28px]">Funcionário&#40;s&#41;</h2>
			</header>
			<div>
				<div className="flex flex-col justify-center px-6 py-4 gap-4 w-full border bg-white ">
					<Button isEnable textSize="base16">
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

					<EmployeeCard active />
					<EmployeeCard />
					<EmployeeCard />
					<EmployeeCard active />

					<div className="w-full flex justify-end items-center gap-2 text-sm text-darkGray">
						<span>A etapa está concluída?</span>
						<Switch on="Sim" off="Não" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Employees;
