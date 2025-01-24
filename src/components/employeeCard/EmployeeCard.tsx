import { useEffect, useRef, useState } from "react";
import Fields from "./Fields";

import InfoModal from "../InfoModal";
import { useDispatch } from "react-redux";
import {
	getEmployeeById,
	setIsEditEmployeeModalOpen,
} from "../../slices/employees";
import type { AppDispatch } from "../../store";

interface EmployeeCardProps {
	active?: boolean;
	name: string;
	cpf: string;
	job: string;
	itemId: string;
}

const EmployeeCard = ({
	active,
	name,
	cpf,
	job,
	itemId,
}: EmployeeCardProps) => {
	const [isMenuModalOpen, setIsMenuModalOpen] = useState(false);
	const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
	const dropdownRef = useRef<HTMLDivElement | null>(null);

	const bgCard = active ? "bg-blueSky " : "bg-[#F2F2F2]";

	const dispatch = useDispatch<AppDispatch>();

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target as Node)
			) {
				setIsMenuModalOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [isMenuModalOpen]);

	return (
		<div
			className={`${bgCard} relative overflow-hidden rounded-[10px] flex justify-between`}
		>
			<div className="flex flex-col gap-2 m-4">
				<h2 className="text-2xl text-[#707070]">{name}</h2>
				<div className="flex gap-5 ">
					<Fields text={cpf} />
					<Fields text={active ? "Ativo" : "Inativo"} />
					<Fields text={job} />
				</div>
			</div>

			<button
				type="button"
				className="bg-default w-12 flex justify-center items-center"
				onClick={() => setIsMenuModalOpen(true)}
			>
				<span className=" text-white text-3xl pb-4">...</span>

				{isMenuModalOpen && (
					<div
						ref={dropdownRef}
						className="absolute shadow-stagesCardsHover flex flex-col text-mediumGray bg-white right-0 top-0 rounded-[10px] text-base font-normal "
					>
						<button
							type="button"
							className="flex-1 flex justify-center items-center px-8 py-3 hover:text-defaultBlue border-b border-[#DBDBDB]"
							onClick={() => {
								dispatch(getEmployeeById(itemId));
								dispatch(setIsEditEmployeeModalOpen(true));
							}}
						>
							Alterar
						</button>
						<button
							type="button"
							onClick={() => {
								setIsInfoModalOpen(true);
							}}
							className="flex-1 flex justify-center items-center px-8 py-3 border-t border-[#DBDBDB] hover:text-defaultBlue"
						>
							Excluir
						</button>
					</div>
				)}
			</button>

			{isInfoModalOpen && (
				<InfoModal itemId={itemId} setIsInfoModalOpen={setIsInfoModalOpen} />
			)}
		</div>
	);
};

export default EmployeeCard;
