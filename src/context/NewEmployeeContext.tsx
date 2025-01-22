import { createContext, type HtmlHTMLAttributes } from "react";
import { useForm, type UseFormReturn } from "react-hook-form";
import {
	type NewEmployeeSchema,
	newEmployeeSchema,
} from "../types/typesNewEmployee";
import { zodResolver } from "@hookform/resolvers/zod";

interface NewEmployeeContextType {
	formMethods: UseFormReturn<NewEmployeeSchema>;
}

export const NewEmployeeContext = createContext<NewEmployeeContextType | null>(
	null,
);

const NewEmployeeContextProvider = ({
	children,
}: HtmlHTMLAttributes<HTMLElement>) => {
	const formMethods = useForm<NewEmployeeSchema>({
		resolver: zodResolver(newEmployeeSchema),
	});

	return (
		<NewEmployeeContext.Provider value={{ formMethods }}>
			{children}
		</NewEmployeeContext.Provider>
	);
};

export default NewEmployeeContextProvider;
