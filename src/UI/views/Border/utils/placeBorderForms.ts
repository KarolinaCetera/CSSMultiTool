import { borderProps } from "const";
import { useBorderForms } from "hooks";

export const placeBorderForms = () =>
	borderProps.map(({ id, modifyStyle }) => {
		const borderForms = useBorderForms({ id, modifyStyle });
		const borderForm = borderForms.find((element) => element.id === id);

		return borderForm && borderForm.form;
	});
