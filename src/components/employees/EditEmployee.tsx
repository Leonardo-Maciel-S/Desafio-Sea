import { useDispatch, useSelector } from "react-redux";
import { useContext, useEffect, useState } from "react";
import {
	putAnEmployee,
	setIsEditEmployeeModalOpen,
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
import { PersonalDatas } from "./editEmployee/PersonalDatas";
import type { UseFormData } from "../../types/employees";
import type { AppDispatch, RootState } from "../../store";
import { EditEmployeeContext } from "../../context/EditEmployeeContext";
import { EditActivity } from "./editEmployee/EditActivity";
import InputFile from "../inputs/InputFile";

const EditEmployee = () => {
	const { employeeToEdit, loading } = useSelector(
		(state: RootState) => state.employees,
	);
	if (loading) return;
	if (!employeeToEdit) return;

	const [isActive, setIsActive] = useState(employeeToEdit?.active);
	const [useEPI, setUseEPI] = useState(employeeToEdit?.useEPI);
	const [inputFileName, setInputFileName] = useState(
		employeeToEdit?.medicalCertificate,
	);

	const context = useContext(EditEmployeeContext);
	if (!context) return;

	const {
		register,
		handleSubmit,
		unregister,
		reset,
		watch,
		formState: { errors },
	} = context.formMethods;

	const dispatch = useDispatch<AppDispatch>();
	console.log(errors);

	const handleFormSubmits = handleSubmit((data: UseFormData) => {
		if (!useEPI) {
			data.activities = [];
		}

		data.useEPI = false;

		if (useEPI) {
			data.useEPI = useEPI;
		}

		data.id = employeeToEdit?.id;
		data.active = isActive;

		console.log(data);

		dispatch(putAnEmployee(data));
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
					onClick={() => dispatch(setIsEditEmployeeModalOpen(false))}
				>
					<img
						src={arrowLeft}
						width={"24px"}
						height={"24px"}
						alt="seta para esquerda"
					/>
				</button>
				<h2 className="text-[28px] font-normal">Editar Funcionário</h2>
			</header>

			<form
				onSubmit={handleFormSubmits}
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
							{...register("useEPI", { value: employeeToEdit?.useEPI })}
						/>
					</div>

					{useEPI && <EditActivity />}
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

export default EditEmployee;
