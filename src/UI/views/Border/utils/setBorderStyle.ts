export const setBorderStyle = (mode, borderStyle, borderRadius) =>
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
