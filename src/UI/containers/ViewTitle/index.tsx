import React, { ReactNode } from "react";

export const ViewTitle: React.FC<{ children?: ReactNode }> = (props) => (
	<>{props.children}</>
);
