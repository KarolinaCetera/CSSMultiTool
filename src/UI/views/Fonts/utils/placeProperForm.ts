import { ProperForm } from "typings";
import { fontProps } from "const";
import { useFontsForms } from "hooks";

export const placeProperForm = (): ProperForm => {
	return fontProps.map(({ id, modifyStyle }) => {
		const fontForms = useFontsForms({ id, modifyStyle });

		switch (id) {
			case "color":
				return fontForms.colorForm;
			case "size":
				return fontForms.fontSizeForm;
			case "style":
				return fontForms.fontStyleForm;
			case "weight":
				return fontForms.fontWeightForm;
			case "letterSpacing":
				return fontForms.letterSpacingForm;
			case "lineHeight":
				return fontForms.lineHeightForm;
			case "textTransform":
				return fontForms.textTransformForm;
			case "wordSpacing":
				return fontForms.wordSpacingForm;
		}
	});
};
