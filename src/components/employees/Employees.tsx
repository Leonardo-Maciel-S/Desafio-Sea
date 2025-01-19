import { useState } from "react";
import Button from "../buttons/Button";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store";
import {
	completeFirstStage,
	nextStage,
	previousStage,
} from "../../slices/stages";

const Employees = () => {
	const { actualStage, completedFirstStage } = useSelector(
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
		<div className="rounded-default w-full overflow-hidden">
			<header className="bg-default text-white px-5 py-2">
				<h2 className="text-[28px]">Funcionário&#40;s&#41;</h2>
			</header>
			<div>
				<div className="flex flex-col justify-center px-6 py-4 gap-4 w-full border  ">
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
					<Button isEnable onClick={() => dispatch(completeFirstStage())}>
						Concluir etapa
					</Button>
					<Button
						onClick={() => dispatch(nextStage())}
						isEnable={completedFirstStage}
					>
						Próximo passo
					</Button>
					<Button
						onClick={() => dispatch(previousStage())}
						isEnable={actualStage >= 2}
					>
						Passo anterior
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Employees;
