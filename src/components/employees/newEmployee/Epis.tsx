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
					<Label name="Selecione o EPI:" className="flex-1 ">
						<Select
							defaultValue="Calçado de segurança"
							options={["Cinto", "Capacete"]}
						/>
					</Label>

					<Label name="Informe o número do CA:" className="flex-1 ">
						<Input type="text" placeholder="Digite o número" />
					</Label>

					{index + 1 < listOfEpi.length ? (
						<Button
							className="font-normal flex-1 min-w-52 xl:max-w-52"
							isEnable
							onClick={() => handleAddEpi("delete", item)}
						>
							Excluir EPI
						</Button>
					) : (
						<Button
							className="font-normal flex-1 min-w-52 xl:max-w-52"
							isEnable
							onClick={() => handleAddEpi("add", item)}
						>
							Adicionar EPI
						</Button>
					)}
				</div>
			))}
		</div>
	);
};
