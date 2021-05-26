import { useSelector } from "react-redux";
import { dropShadowTypes, FilterStyles } from "../typings";

export const useFilterBlur = (): number =>
	useSelector((state: FilterStyles) => state.filter.filterBlur.blur);

export const useFilterBrightness = (): number =>
	useSelector(
		(state: FilterStyles) => state.filter.filterBrightness.brightness,
	);

export const useFilterContrast = (): number =>
	useSelector((state: FilterStyles) => state.filter.filterContrast.contrast);

export const useFilterDropShadow = (): dropShadowTypes =>
	useSelector(
		(state: FilterStyles) => state.filter.filterDropShadow.dropShadow,
	);

export const useFilterGreyScale = (): number =>
	useSelector((state: FilterStyles) => state.filter.filterGreyScale.greyScale);

export const useFilterHueRotate = (): number =>
	useSelector((state: FilterStyles) => state.filter.filterHueRotate.hueRotate);

export const useFilterInvert = (): number =>
	useSelector((state: FilterStyles) => state.filter.filterInvert.invert);

export const useFilterOpacity = (): number =>
	useSelector((state: FilterStyles) => state.filter.filterOpacity.opacity);

export const useFilterSaturate = (): number =>
	useSelector((state: FilterStyles) => state.filter.filterSaturate.saturate);

export const useFilterSepia = (): number =>
	useSelector((state: FilterStyles) => state.filter.filterSepia.sepia);
