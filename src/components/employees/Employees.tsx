import Button from "../buttons/Button";

const Employees = () => {
	return (
		<div className="rounded-default w-full overflow-hidden">
			<header className="bg-default text-white px-5 py-2">
				<h2 className="text-[28px]">Funcionário&#40;s&#41;</h2>
			</header>
			<div>
				<div className="flex flex-col justify-center px-6 py-4 gap-4 w-full border  ">
					<Button textSize="base16">+ Adicionar Funcionário</Button>
					<div className="flex justify-between">
						<div className="flex gap-6">
							<Button>Ver apenas ativos</Button>
							<Button isEnable={false}>Limpar filtros</Button>
						</div>

						<span className="text-darkGray text-sm font-normal">
							Ativos 2/4
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Employees;
