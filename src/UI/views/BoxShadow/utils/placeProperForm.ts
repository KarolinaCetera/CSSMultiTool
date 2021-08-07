import { boxShadowProps } from "const";
import { useBoxShadowForms } from "hooks";
import { ProperForm } from "typings";

export const placeProperForm = (): ProperForm => {
	return boxShadowProps.map(({ id, modifyStyle }) => {
		const boxShadowForms = useBoxShadowForms({ id, modifyStyle });

		switch (id) {
			case "blur":
				return boxShadowForms.blurForm;
			case "color":
				return boxShadowForms.colorForm;
			case "horizontal":
				return boxShadowForms.horizontalForm;
			case "opacity":
				return boxShadowForms.opacityForm;
			case "spread":
				return boxShadowForms.spreadForm;
			case "vertical":
				return boxShadowForms.verticalForm;
		}
	});
};
