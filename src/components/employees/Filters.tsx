import Button from "../buttons/Button";
import { useDispatch } from "react-redux";
import { setIsNewEmployeeModalOpen } from "../../slices/employees";

interface FiltersProps {
	onlyActive: boolean;
	setOnlyActives: (value: boolean) => void;
}

const Filters = ({ onlyActive, setOnlyActives }: FiltersProps) => {
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

				<span className="text-darkGray text-sm font-normal">Ativos 2/4</span>
			</div>
		</div>
	);
};

export default Filters;
