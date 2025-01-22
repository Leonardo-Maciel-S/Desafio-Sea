import { useState } from "react";
import Button from "../../buttons/Button";
import Input from "../../inputs/Input";
import Label from "../../inputs/Label";
import Select from "../../inputs/Select";

export const Epis = () => {
	const [listOfEpi, setListOfEpi] = useState([1]);

	const handleAddEpi = (method: string, position?: number) => {
		if (method === "add") {
			const lastIndex = listOfEpi.length - 1;
			setListOfEpi([...listOfEpi, listOfEpi[lastIndex] + 1]);

			return;
		}

		const newList = listOfEpi.filter((item) => {
			return item !== position;
		});

		setListOfEpi([...newList]);
	};

	return (
		<div className="flex flex-col gap-4">
			{listOfEpi.map((item, index) => (
				<div key={item} className="flex gap-6 items-end flex-wrap justify-end">
					<div className="flex flex-col gap-[8px] flex-1 h-16 justify-end">
						<span className="text-sm font-medium">Selecione o EPI:</span>

						<Select
							defaultValue="Calçado de segurança"
							options={["Cinto", "Capacete"]}
						/>
					</div>

					<Label name="Informe o número do CA:" className="  ">
						<Input type="text" placeholder="Digite o número" className="py-2" />
					</Label>

					<div className="flex-1 w-full border">
						{index + 1 < listOfEpi.length ? (
							<Button
								className="font-normal min-w-52 py-[8px] flex-1 w-full"
								isEnable
								onClick={() => handleAddEpi("delete", item)}
							>
								Excluir EPI
							</Button>
						) : (
							<Button
								className="font-normal min-w-52 py-[8px] flex-1 w-full"
								isEnable
								onClick={() => handleAddEpi("add", item)}
							>
								Adicionar EPI
							</Button>
						)}
					</div>
				</div>
			))}
		</div>
	);
};
