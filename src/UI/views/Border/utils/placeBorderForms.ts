import { borderProps } from "const";
import { useBorderForms } from "hooks";

export const placeBorderForms = () =>
	borderProps.map(
		({ id, modifyStyle }) =>
			useBorderForms({ id, modifyStyle }).find((element) => element.id === id)
				?.form,
	);
