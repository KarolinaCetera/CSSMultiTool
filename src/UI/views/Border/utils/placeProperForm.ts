import { borderProps } from "const";
import { useRadiusMode, useBorderForms } from "hooks";
import { ProperForm } from "typings";

export const placeProperForm = (): ProperForm => {
	const { mode } = useRadiusMode();

	return borderProps.map(({ id, modifyStyle }) => {
		const borderForms = useBorderForms({ id, modifyStyle });

		switch (id) {
			case "type":
				return borderForms.typeForm;
			case "color":
				return borderForms.colorForm;
			case "width":
				return borderForms.widthForm;
			case "radiusTL":
				return mode === "separate" && borderForms.radiusTLForm;
			case "radiusTR":
				return mode === "separate" && borderForms.radiusTRForm;
			case "radiusBR":
				return mode === "separate" && borderForms.radiusBRForm;
			case "radiusBL":
				return mode === "separate" && borderForms.radiusBLForm;
			case "radius":
				return mode === "all" && borderForms.radiusForm;
		}
	});
};
