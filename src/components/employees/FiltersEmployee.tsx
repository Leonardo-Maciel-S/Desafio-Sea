import Button from "../buttons/Button";
import { useDispatch, useSelector } from "react-redux";
import { setIsNewEmployeeModalOpen } from "../../slices/employees";
import type { RootState } from "../../store";
import { completeFirstStage } from "../../slices/stages";

interface FiltersEmployeeProps {
	onlyActive: boolean;
	setOnlyActives: (value: boolean) => void;
}

const FiltersEmployee = ({
	onlyActive,
	setOnlyActives,
}: FiltersEmployeeProps) => {
	const { listOfEmployees } = useSelector(
		(state: RootState) => state.employees,
	);

	const { completedFirstStage } = useSelector(
		(state: RootState) => state.stages,
	);

	const qtdTotal = listOfEmployees.length;
	const qtdActives = listOfEmployees.reduce((accumulator, employee) => {
		return employee.active ? accumulator + 1 : accumulator;
	}, 0);

	const dispatch = useDispatch();

	const handleClickFilter = () => {
		setOnlyActives(!onlyActive);
	};

	return (
		<div className="flex flex-col justify-center gap-4 ">
			<Button
				isEnable
				textSize="base16"
				onClick={() => {
					dispatch(setIsNewEmployeeModalOpen(true));
					if (completedFirstStage) {
						dispatch(completeFirstStage());
					}
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
					Ativos {qtdActives}/{qtdTotal}
				</span>
			</div>
		</div>
	);
};

export default FiltersEmployee;
