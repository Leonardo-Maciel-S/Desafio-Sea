import Fields from "./Fields";

interface EmployeeCardProps {
	active?: boolean;
}

const EmployeeCard = ({ active }: EmployeeCardProps) => {
	const bgCard = active ? "bg-blueSky " : "bg-[#F2F2F2]";
	return (
		<div
			className={`${bgCard} overflow-hidden rounded-[10px] flex justify-between`}
		>
			<div className="flex flex-col gap-2 m-4">
				<h2 className="text-2xl text-[#707070]">Daniel Alves da Silva</h2>
				<div className="flex gap-5 ">
					<Fields text="000.000.000-99" />
					<Fields text="Ativo 00" />
					<Fields text="Cargo 1" />
				</div>
			</div>

			<button
				type="button"
				className="bg-default w-12 flex justify-center items-center"
			>
				<span className=" text-white text-3xl pb-4">...</span>
			</button>
		</div>
	);
};

export default EmployeeCard;
