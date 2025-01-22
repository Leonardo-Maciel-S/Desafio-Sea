import { z } from "zod";
import type { FieldErrors, UseFormRegister } from "react-hook-form";
import { isBoolean } from "tailwind-variants/dist/utils.js";

export const newEmployeeSchema = z
	.object({
		active: z.boolean().optional(),
		name: z.string().nonempty(),
		cpf: z.string().min(11, { message: "CPF mínimo de 11 números" }),
		RG: z.string().min(7, { message: "RG mínimo de 7 números" }),
		gender: z.enum(["feminino", "masculino"]).optional(),
		birth: z.string().nonempty(),
		job: z.string().nonempty(),
		epi: z.object({
			use: z.boolean(),
			activity: z.array(
				z.object({
					name: z.string().optional(),
					epi: z.array(
						z.object({
							name: z.string().optional(),
							ca: z.string().optional(),
						}),
					),
				}),
			),
		}),
		medicalCertificate: z.string().optional(),
	})
	.refine((data) => {
		if (data.epi.use) {
			return !data.epi.activity;
		}

		return true;
	});

export type NewEmployeeSchema = z.infer<typeof newEmployeeSchema>;

export interface Register {
	register: UseFormRegister<NewEmployeeSchema>;
	errors: FieldErrors<NewEmployeeSchema>;
}
