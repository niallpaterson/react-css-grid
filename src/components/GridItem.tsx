import * as React from 'react';
import { GridItemProps, GridConfig } from '../types';
import { toCssVariable } from '../utils';

export const createGridItem = (config: GridConfig): React.FC<GridItemProps> => {
	return (props) => {
		if (props.start > props.end) {
			throw new RangeError(
				`Invalid value passed to Grid Item. Start value ${props.start} is greater than end value ${props.end}.`
			);
		}

		if (props.end > (config?.columns ?? 12)) {
			throw new RangeError(
				`Invalid value passed to Grid Item. End value ${props.end} greater than ${config.columns}`
			);
		}

		const invalidBoxOverride =
			[props.margin, props.padding].some(Boolean) && props.subGrid;
		if (invalidBoxOverride) {
			console.warn(
				'Invalid padding or margin override provided to Grid Item. If subgrid is specified, right and left padding must be 0 for subcolumns to be calculated correctly. Left and right margins and padding have been set to 0. To override this behavior, pass in a value in the style tag.'
			);
		}

		const defaults: Partial<GridItemProps> = {
			display: props.subGrid ? 'grid' : 'block',
			gridTemplateColumns: props.subGrid
				? `repeat(${props.end - props.start}, minmax(0, 1fr))`
				: 'unset',
			boxSizing: 'border-box',
			gridColumn: `${props.start} / ${props.end}`,
			width: props.subGrid ? config.width ?? '100%' : 'unset',
		};

		const variables = Object.fromEntries(
			Object.entries(defaults).map(([key, val]) => [toCssVariable(key), val])
		);

		const Tag = props.as ?? 'div';

		return (
			<Tag
				style={{ ...props.style, ...variables }}
				className={`ReactCSSGrid ${props.className ?? ''}`}
			>
				{props.children}
			</Tag>
		);
	};
};
