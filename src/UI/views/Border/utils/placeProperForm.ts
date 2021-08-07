import { borderProps } from "const";
import { useRadiusMode, useBorderForms } from "hooks";
import { ProperForm } from "typings";

export const placeProperForm = (): ProperForm => {
	const { mode } = useRadiusMode();

	return borderProps.map(({ id, modifyStyle }) => {
		const borderForms = useBorderForms({ id, modifyStyle });

		switch (id) {
			case "type":
				return borderForms.borderTypeForm;
			case "color":
				return borderForms.borderColorForm;
			case "width":
				return borderForms.borderWidthForm;
			case "radiusTL":
				return mode === "separate" && borderForms.borderRadiusTLForm;
			case "radiusTR":
				return mode === "separate" && borderForms.borderRadiusTRForm;
			case "radiusBR":
				return mode === "separate" && borderForms.borderRadiusBRForm;
			case "radiusBL":
				return mode === "separate" && borderForms.borderRadiusBLForm;
			case "radius":
				return mode === "all" && borderForms.borderRadiusForm;
		}
	});
};
