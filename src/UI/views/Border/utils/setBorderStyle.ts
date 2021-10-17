import { ControlProps } from "typings";

interface BorderRadiusMode {
	border: string;
	borderRadius?: string;
	borderTopLeftRadius?: string;
	borderTopRightRadius?: string;
	borderBottomRightRadius?: string;
	borderBottomLeftRadius?: string;
}

export const setBorderStyle = (
	mode: string,
	borderStyle: ControlProps,
	borderRadius: ControlProps,
): BorderRadiusMode =>
	mode === "all"
		? {
				border: `${borderStyle.width}px ${borderStyle.type} ${borderStyle.color}`,
				borderRadius: `${borderStyle.radius}px`,
		  }
		: {
				border: `${borderStyle.width}px ${borderStyle.type} ${borderStyle.color}`,
				borderTopLeftRadius: `${borderRadius.TL}px`,
				borderTopRightRadius: `${borderRadius.TR}px`,
				borderBottomRightRadius: `${borderRadius.BR}px`,
				borderBottomLeftRadius: `${borderRadius.BL}px`,
		  };
