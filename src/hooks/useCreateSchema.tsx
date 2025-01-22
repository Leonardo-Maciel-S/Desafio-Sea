import { useEffect, useState } from "react";
import { z, type ZodSchema } from "zod";

const UseCreateSchemaToForm = (useEPI: boolean) => {
	const [required, setRequired] = useState(useEPI);

	const [schema, setSchema] = useState<ZodSchema>();

	const activitySchema = z.object({
		useEPI: required
			? z.array(
					z.object({
						activity: z.array(
							z.object({
								name: z.string().nonempty(),
								epi: z.array(
									z.object({
										name: z.string().nonempty(),
										ca: z.string().nonempty(),
									}),
								),
							}),
						),
					}),
				)
			: z.array(
					z.object({
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
				),
		medicalCertificate: z.string().optional(),
	});

	const newEmployeeData = z.object({
		active: z.boolean().optional(),
		name: z.string().nonempty(),
		cpf: z.string().min(11, { message: "CPF mínimo de 11 números" }),
		RG: z.string().min(7, { message: "RG mínimo de 7 números" }),
		gender: z.enum(["feminino", "masculino"]).optional(),
		birth: z.string().nonempty(),
		job: z.string().nonempty(),
	});

	useEffect(() => {
		const merge = newEmployeeData.merge(activitySchema);
		setSchema(merge);
	}, [required]);

	return {
		setRequired,
		schema,
	};
};

export default UseCreateSchemaToForm;
