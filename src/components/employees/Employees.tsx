import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../store";
import { Link } from "react-router";

import Button from "../buttons/Button";
import Switch from "../Switch";
import EmployeeCard from "../employeeCard/EmployeeCard";
import { completeFirstStage, nextStage } from "../../slices/stages";
import FiltersEmployee from "./FiltersEmployee";

const Employees = () => {
	const [onlyActive, setOnlyActives] = useState(false);

	const { completedFirstStage } = useSelector(
		(state: RootState) => state.stages,
	);

	const { listOfEmployees } = useSelector(
		(state: RootState) => state.employees,
	);

	const dispatch = useDispatch<AppDispatch>();

	return (
		<div className="rounded-default w-full overflow-hidden ">
			<header className="bg-default text-white px-5 py-2">
				<h2 className="text-[28px]">Funcionário&#40;s&#41;</h2>
			</header>

			<div className="flex flex-col justify-center px-6 py-4 gap-4 w-full border bg-white rounded-b-[20px]">
				<FiltersEmployee
					onlyActive={onlyActive}
					setOnlyActives={setOnlyActives}
				/>

				<div className="flex flex-col gap-4 py-6">
					{listOfEmployees?.map((item) => {
						if (onlyActive && onlyActive === item.active) {
							return (
								<EmployeeCard
									active={item.active}
									key={item.id}
									itemId={item.id}
									name={item.name}
									cpf={item.cpf}
									job={item.job}
								/>
							);
						}

						if (!onlyActive) {
							return (
								<EmployeeCard
									active={item.active}
									key={item.id}
									itemId={item.id}
									name={item.name}
									cpf={item.cpf}
									job={item.job}
								/>
							);
						}
					})}
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
				<Link to="/employees/2">
					<Button
						isEnable={completedFirstStage}
						bgFullDisable={!completedFirstStage}
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

export default Employees;
