import { useDispatch } from "react-redux";
import { useContext, useEffect, useState } from "react";
import {
	addAnEmployee,
	setIsNewEmployeeModalOpen,
} from "../../slices/employees";
import { Link } from "react-router";

// Pages
import { nextStage } from "../../slices/stages";

// Components
import Button from "../buttons/Button";
import Switch from "../Switch";
import CheckBox from "../inputs/CheckBox";
import Fieldset from "../inputs/Fieldset";
import arrowLeft from "../../assets/arrowLeft.svg";
import InputFile from "../inputs/InputFile";
import { Activity } from "./newEmployee/Activity";
import { PersonalDatas } from "./newEmployee/PersonalDatas";
import type { UseFormData } from "../../types/employees";
import type { AppDispatch } from "../../store";
import { NewEmployeeContext } from "../../context/NewEmployeeContext";

const NewEmployee = () => {
	const dispatch = useDispatch<AppDispatch>();

	const context = useContext(NewEmployeeContext);
	if (!context) return;

	const {
		register,
		handleSubmit,
		unregister,
		reset,
		watch,
		formState: { errors },
	} = context.formMethods;

	const [isActive, setIsActive] = useState(true);
	const [useEPI, setUseEPI] = useState(true);
	const [inputFileName, setInputFileName] = useState("");

	const handleForm = handleSubmit((data: UseFormData) => {
		if (!useEPI) {
			data.activities = [];
		}
		data.active = isActive;
		data.useEPI = useEPI;

		dispatch(addAnEmployee(data));
	});

	const activities = watch("activities");

	useEffect(() => {
		if (!useEPI) {
			unregister("activities");
			unregister("medicalCertificate");
		}
	}, [useEPI, handleSubmit, activities]);

	useEffect(() => {
		reset();
	}, []);

	return (
		<div className="rounded-default w-full overflow-hidden text-dark">
			<header className="bg-default text-white px-5 py-2 flex items-center gap-4">
				<button
					type="button"
					onClick={() => dispatch(setIsNewEmployeeModalOpen(false))}
				>
					<img
						src={arrowLeft}
						width={"24px"}
						height={"24px"}
						alt="seta para esquerda"
					/>
				</button>
				<h2 className="text-[28px] font-normal">Adicionar Funcionário</h2>
			</header>

			<form
				onSubmit={handleForm}
				className="flex flex-col justify-center px-6 pb-4 pt-8 gap-4 w-full border bg-white rounded-b-[20px]"
			>
				<div className="flex flex-col justify-center gap-4">
					<Fieldset className="justify-between">
						<span className="font-medium">
							O trabalhador está ativo ou inativo?
						</span>
						<Switch
							onClick={() => setIsActive(!isActive)}
							active={isActive}
							on="Ativo"
							off="inativo"
						/>
					</Fieldset>

					<PersonalDatas />
				</div>

				<Fieldset className="flex-col gap-4">
					<span className="font-medium">
						Quais EPIs o trabalhador usa na atividade?
					</span>
					<div className="flex gap-2">
						<CheckBox useEPI={useEPI} setUseEPI={setUseEPI} />
						<span>O trabalhador não usa EPI.</span>
						<input
							type="checkbox"
							className="hidden"
							checked={useEPI}
							{...register("useEPI")}
						/>
					</div>

					{useEPI && <Activity />}
				</Fieldset>

				{useEPI && (
					<Fieldset className="flex-col gap-6">
						<span className="text-sm font-medium">
							Adicione Atestado de Saúde (opcional):
						</span>

						<InputFile
							error={errors.medicalCertificate}
							inputFileName={inputFileName}
							setInputFileName={setInputFileName}
							isNew
						/>
					</Fieldset>
				)}

				<Button type="submit" className="font-normal text-sm  my-4" isEnable>
					Salvar
				</Button>
			</form>

			<div className="my-8 w-full flex justify-end">
				<Link to="/employees/2">
					<Button
						isEnable={true}
						bgFullDisable={false}
						bgFull
						onClick={() => dispatch(nextStage())}
					>
						Próximo passo
					</Button>
				</Link>
			</div>
		</div>
	);
};

export default NewEmployee;
