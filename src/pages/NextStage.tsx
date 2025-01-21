import { useDispatch, useSelector } from "react-redux";
import Button from "../components/buttons/Button";
import StagesModal from "../components/stages/StagesModal";
import type { RootState } from "../store";
import { nextStage, previousStage } from "../slices/stages";
import { Link, useNavigate } from "react-router";
import ComingSoon from "../components/ComingSoon";

const NextStage = () => {
	const navigate = useNavigate();

	const { completedFirstStage, actualStage } = useSelector(
		(state: RootState) => state.stages,
	);

	if (actualStage > 2 && !completedFirstStage) {
		navigate("/employees");
	}

	const dispatch = useDispatch();

	return (
		<div className="w-full h-screen flex justify-between flex-col pb-8">
			<div>
				<StagesModal />
				<ComingSoon />
			</div>

			<div className="w-full flex justify-between ">
				<Link to={`/employees/${actualStage - 1}`}>
					<Button
						isEnable={completedFirstStage}
						bgFullDisable={!completedFirstStage}
						bgFull
						onClick={() => dispatch(previousStage())}
					>
						Próximo anterior
					</Button>
				</Link>
				{actualStage < 9 && (
					<Link to={`/employees/${actualStage + 1}`}>
						<Button
							isEnable={completedFirstStage}
							bgFullDisable={!completedFirstStage}
							bgFull
							onClick={() => dispatch(nextStage())}
						>
							Próximo passo
						</Button>
					</Link>
				)}
			</div>
		</div>
	);
};

export default NextStage;
