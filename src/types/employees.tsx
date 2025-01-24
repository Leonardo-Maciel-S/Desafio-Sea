import { z } from "zod";

// Schemas ----------------------------------------------------------

export const newEmployeeSchema = z.object({
	active: z.boolean().optional(),
	name: z.string().nonempty(),
	cpf: z.string().min(11, { message: "CPF mínimo de 11 números" }),
	RG: z.string().min(7, { message: "RG mínimo de 7 números" }),
	gender: z.enum(["female", "male"]),
	birth: z.string().nonempty(),
	job: z.string().nonempty(),
	useEPI: z.boolean(),
	activities: z
		.array(
			z.object({
				name: z.string().nonempty(),
				epi: z.array(
					z
						.object({
							name: z.string().nonempty(),
							ca: z.string().nonempty(),
						})
						.optional(),
				),
			}),
		)
		.nullable()
		.optional(),
	medicalCertificate: z.string().nonempty().optional(),
});

export type NewEmployeeSchema = z.infer<typeof newEmployeeSchema>;

// Interfaces Employee ----------------------------------------------------------

export interface Employee {
	id: string;
	active: boolean;
	name: string;
	cpf: string;
	RG: string;
	gender: string;
	birth: string;
	job: string;
	useEPI: boolean;
	activities: [
		{
			name: string;
			epi: [
				{
					name: string;
					ca: string;
				},
			];
		},
	];
	medicalCertificate: string;
}

export interface EmployeesState {
	employeeToEdit: Employee | null;
	listOfEmployees: Employee[];
	loading: boolean;
	isNewEmployeeModalOpen: boolean;
	isEditEmployeeModalOpen: boolean;
}

// Interfaces Forms ----------------------------------------------------------

export interface UseFormData {
	id?: string;
	name: string;
	cpf: string;
	RG: string;
	gender: "female" | "male";
	birth: string;
	job: string;
	useEPI: boolean;
	active?: boolean | undefined;
	activities?:
		| {
				name: string;
				epi: (
					| {
							name: string;
							ca: string;
					  }
					| undefined
				)[];
		  }[]
		| null
		| undefined;
	medicalCertificate?: string | undefined;
}
