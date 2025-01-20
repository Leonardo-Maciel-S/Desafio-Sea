import { useDispatch, useSelector } from "react-redux";
import Button from "../components/buttons/Button";
import StagesModal from "../components/stages/StagesModal";
import type { RootState } from "../store";
import { nextStage, previousStage } from "../slices/stages";
import { Link, useNavigate, useParams } from "react-router";
import ComingSoon from "../components/ComingSoon";

const NextStage = () => {
	const { stagePath } = useParams();
	const navigate = useNavigate();

	const { completedFirstStage, actualStage } = useSelector(
		(state: RootState) => state.stages,
	);

	const dispatch = useDispatch();

	return (
		<div className="w-full h-screen border border-black flex justify-between flex-col pb-8">
			<div>
				<StagesModal />
				<ComingSoon />
			</div>

			<div className="w-full flex justify-between ">
				<Button
					isEnable={completedFirstStage}
					bgFullDisable={!completedFirstStage}
					bgFull
					onClick={() => dispatch(previousStage())}
				>
					<Link to={`/${Number(stagePath) - 1}`}>Próximo anterior</Link>
				</Button>

				<Button
					isEnable={completedFirstStage}
					bgFullDisable={!completedFirstStage}
					bgFull
					onClick={() => dispatch(nextStage())}
				>
					<Link to={`/${Number(stagePath) + 1}`}>Próximo passo</Link>
				</Button>
			</div>
		</div>
	);
};

export default NextStage;
