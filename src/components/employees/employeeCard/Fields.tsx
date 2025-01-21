interface FieldsProps {
	text: string;
}

const Fields = ({ text }: FieldsProps) => {
	return (
		<div className="bg-default	text-white text-sm rounded-[36px] max-w-max text-center px-4 py-1">
			{text}
		</div>
	);
};

export default Fields;
