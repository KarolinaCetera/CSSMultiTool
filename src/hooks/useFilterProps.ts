import { useSelector } from "react-redux";
import { ControlProps, FilterStyles, hooksReturnType } from "../typings";

const useFilterBlur = (): hooksReturnType =>
	useSelector((state: FilterStyles) => state.filter.filterBlur.blur);

const useFilterBrightness = (): hooksReturnType =>
	useSelector(
		(state: FilterStyles) => state.filter.filterBrightness.brightness,
	);

const useFilterContrast = (): hooksReturnType =>
	useSelector((state: FilterStyles) => state.filter.filterContrast.contrast);

const useFilterDropShadow = (): hooksReturnType =>
	useSelector(
		(state: FilterStyles) => state.filter.filterDropShadow.dropShadow,
	);

const useFilterGreyScale = (): hooksReturnType =>
	useSelector((state: FilterStyles) => state.filter.filterGreyScale.greyScale);

const useFilterHueRotate = (): hooksReturnType =>
	useSelector((state: FilterStyles) => state.filter.filterHueRotate.hueRotate);

const useFilterInvert = (): hooksReturnType =>
	useSelector((state: FilterStyles) => state.filter.filterInvert.invert);

const useFilterOpacity = (): hooksReturnType =>
	useSelector((state: FilterStyles) => state.filter.filterOpacity.opacity);

const useFilterSaturate = (): hooksReturnType =>
	useSelector((state: FilterStyles) => state.filter.filterSaturate.saturate);

const useFilterSepia = (): hooksReturnType =>
	useSelector((state: FilterStyles) => state.filter.filterSepia.sepia);

export const useFilterProps = (): ControlProps => {
	return {
		blur: useFilterBlur(),
		contrast: useFilterContrast(),
		dropShadow: useFilterDropShadow(),
		greyScale: useFilterGreyScale(),
		hueRotate: useFilterHueRotate(),
		invert: useFilterInvert(),
		opacity: useFilterOpacity(),
		saturate: useFilterSaturate(),
		sepia: useFilterSepia(),
	};
};
