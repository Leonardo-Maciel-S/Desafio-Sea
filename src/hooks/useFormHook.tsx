import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const newEmployeeSchema = z.object({
	name: z.string(),
	cpf: z.string().min(11, { message: "CPF mínimo de 11 números" }),
	RG: z.string().min(7, { message: "RG mínimo de 7 números" }),
	gender: z.enum(["feminino", "masculino"]),
	birth: z.date(),
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

export function useFormHook() {
	const { register, handleSubmit } = useForm<NewEmployeeSchema>({
		resolver: zodResolver(newEmployeeSchema),
	});

	return {
		register,
		handleSubmit,
	};
}
