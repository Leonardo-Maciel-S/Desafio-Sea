import { z } from "zod";
import type { FieldErrors, UseFormRegister } from "react-hook-form";

export const newEmployeeSchema = z.object({
	active: z.boolean().optional(),
	name: z.string(),
	cpf: z.string().min(11, { message: "CPF mínimo de 11 números" }),
	RG: z.string().min(7, { message: "RG mínimo de 7 números" }),
	gender: z.enum(["feminino", "masculino"]),
	birth: z.string(),
	job: z.string(),
	useEPI: z.array(
		z
			.object({
				activity: z.string(),
				epi: z.string(),
				ca: z.string(),
			})
			.optional(),
	),
	medicalCertificate: z.string(),
});

export type NewEmployeeSchema = z.infer<typeof newEmployeeSchema>;

export interface Register {
	register: UseFormRegister<NewEmployeeSchema>;
	errors: FieldErrors<NewEmployeeSchema>;
}
