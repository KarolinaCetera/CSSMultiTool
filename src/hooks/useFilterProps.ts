import { useSelector } from "react-redux";
import { FilterStyles, hooksReturnType } from "../typings";

export const useFilterBlur = (): hooksReturnType =>
	useSelector((state: FilterStyles) => state.filter.filterBlur.blur);

export const useFilterBrightness = (): hooksReturnType =>
	useSelector(
		(state: FilterStyles) => state.filter.filterBrightness.brightness,
	);

export const useFilterContrast = (): hooksReturnType =>
	useSelector((state: FilterStyles) => state.filter.filterContrast.contrast);

export const useFilterDropShadow = (): hooksReturnType =>
	useSelector(
		(state: FilterStyles) => state.filter.filterDropShadow.dropShadow,
	);

export const useFilterGreyScale = (): hooksReturnType =>
	useSelector((state: FilterStyles) => state.filter.filterGreyScale.greyScale);

export const useFilterHueRotate = (): hooksReturnType =>
	useSelector((state: FilterStyles) => state.filter.filterHueRotate.hueRotate);

export const useFilterInvert = (): hooksReturnType =>
	useSelector((state: FilterStyles) => state.filter.filterInvert.invert);

export const useFilterOpacity = (): hooksReturnType =>
	useSelector((state: FilterStyles) => state.filter.filterOpacity.opacity);

export const useFilterSaturate = (): hooksReturnType =>
	useSelector((state: FilterStyles) => state.filter.filterSaturate.saturate);

export const useFilterSepia = (): hooksReturnType =>
	useSelector((state: FilterStyles) => state.filter.filterSepia.sepia);
