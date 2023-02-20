import type { GridConfig } from '../types';
import { toKebabCase } from './toKebabCase';
import { createCssVariable } from './createCssVariable';

export const createGridStyles = (config: GridConfig) => {
	const customVariables = (() => {
		const entries = (config.enabledProperties ?? []).map(
			(property) =>
				[toKebabCase(property), createCssVariable({ property })] as [
					string,
					string
				]
		);
		return Object.fromEntries(entries);
	})();

	const merged = { ...BASE_VARIABLES, ...customVariables };

	const styles = Object.entries(merged)
		.map(([key, val]) => `${key}: ${val};`)
		.join('');

	const className = `.ReactCSSGrid {${styles}}`;
	return className;
};

const BASE_VARIABLES = {
	'row-gap': 'var(--rcssg-rowGap)',
	'column-gap': 'var(--rcssg-columnGap)',
	'align-items': 'var(--rcssg-alignItems)',
	'align-content': 'var(--rcssg-alignContent)',
	'justify-content': 'var(--rcssg-justifyContent)',
	'justify-items': 'var(--rcssg-justifyItems)',
	'grid-template-columns': 'var(--rcssg-gridTemplateColumns)',
	'grid-template-rows': 'var(--rcssg-gridTemplateRows)',
	'grid-auto-columns': 'var(--rcssg-gridAutoColumns)',
	'grid-auto-rows': 'var(--rcssg-gridAutoRows)',
	'grid-column': 'var(--rcssg-gridColumn)',
	'grid-row': 'var(--rcssg-gridRow)',
	'grid-gap': 'var(--rcssg-gridGap)',
	'min-height': 'var(--rcssg-minHeight)',
	'max-height': 'var(--rcssg-maxHeight)',
	'box-sizing': 'var(--rcssg-boxSizing)',
	position: 'var(--rcssg-position)',
	padding: 'var(--rcssg-padding)',
	margin: 'var(--rcssg-margin)',
	width: 'var(--rcssg-width)',
	height: 'var(--rcssg-height)',
	display: 'var(--rcssg-display)',
};
