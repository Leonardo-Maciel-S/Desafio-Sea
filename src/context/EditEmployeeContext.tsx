import { createContext, type HtmlHTMLAttributes } from "react";
import { useForm, type UseFormReturn } from "react-hook-form";
import { type NewEmployeeSchema, newEmployeeSchema } from "../types/employees";
import { zodResolver } from "@hookform/resolvers/zod";

interface EditEmployeeContextType {
	formMethods: UseFormReturn<NewEmployeeSchema>;
}

export const EditEmployeeContext =
	createContext<EditEmployeeContextType | null>(null);

const EditEmployeeContextProvider = ({
	children,
}: HtmlHTMLAttributes<HTMLElement>) => {
	const formMethods = useForm<NewEmployeeSchema>({
		resolver: zodResolver(newEmployeeSchema),
	});

	return (
		<EditEmployeeContext.Provider value={{ formMethods }}>
			{children}
		</EditEmployeeContext.Provider>
	);
};

export default EditEmployeeContextProvider;
