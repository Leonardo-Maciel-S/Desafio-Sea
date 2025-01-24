import { useDispatch } from "react-redux";
import closeInfoX from "../assets/closeInfoX.svg";
import { deleteAnEmployee } from "../slices/employees";
import type { AppDispatch } from "../store";
import { useEffect } from "react";

interface InfoModalProps {
	setIsInfoModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
	itemId: string;
}

const InfoModal = ({ setIsInfoModalOpen, itemId }: InfoModalProps) => {
	const dispatch = useDispatch<AppDispatch>();

	const disableScroll = () => {
		const body = document.body;
		body.style.height = "100vh";
		body.style.width = "100vw";
		body.style.overflow = "hidden";
	};

	const enableScroll = () => {
		const body = document.body;
		body.style.height = "";
		body.style.width = "";
		body.style.overflow = "";
	};

	useEffect(() => {
		disableScroll();
	});

	return (
		<>
			<div className="fixed w-screen h-screen top-0 left-0 flex justify-center items-center bg-black opacity-60 z-10" />

			<div className="fixed w-screen h-screen flex flex-col bottom-0 left-0 items-center justify-center overflow-hidden z-20 ">
				<div className="flex flex-col items-center justify-center gap-2 z-20 bg-[#E9E9E9] p-[32px] rounded-[24px] border border-[#DBDBDB] w-[564px] h-[134px] shadow-closeInfo opacity-90 ">
					<div className="flex items-center justify-between w-full">
						<span className="text-dark opacity-100 text-[20px] font-bold leading-[150%] ">
							Usuário excluído com sucesso!
						</span>
						<button
							type="button"
							className="text-defaultBlue mb-2 relative size-6"
							onClick={() => {
								enableScroll();
								setIsInfoModalOpen(false);
								dispatch(deleteAnEmployee(itemId));
							}}
						>
							<img
								src={closeInfoX}
								alt="x"
								width={16}
								className="absolute  -right-1 top-1"
							/>
						</button>
					</div>

					<button
						type="button"
						className="text-defaultBlue font-extrabold text-[16px]"
						onClick={() => {
							enableScroll();
							setIsInfoModalOpen(false);
							dispatch(deleteAnEmployee(itemId));
						}}
					>
						OK
					</button>
				</div>
			</div>
		</>
	);
};

export default InfoModal;
