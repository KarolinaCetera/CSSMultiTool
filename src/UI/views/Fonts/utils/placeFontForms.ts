import { fontProps } from "const";
import { useFontForms } from "hooks";

export const placeFontForms = () =>
	fontProps.map(
		({ id, modifyStyle }) =>
			useFontForms({ id, modifyStyle }).find((element) => element.id === id)
				?.form,
	);
