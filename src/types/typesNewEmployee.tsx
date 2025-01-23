import { z } from "zod";
import type { FieldErrors, UseFormRegister } from "react-hook-form";

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
					z.object({
						name: z.string().nonempty(),
						ca: z.string().nonempty(),
					}),
				),
			}),
		)
		.nullable()
		.optional(),
	medicalCertificate: z.string().nonempty().optional(),
});

export type NewEmployeeSchema = z.infer<typeof newEmployeeSchema>;

export interface Register {
	register: UseFormRegister<NewEmployeeSchema>;
	errors: FieldErrors<NewEmployeeSchema>;
}
