import * as React from 'react';
import { GridConfig, GridContainerProps } from '../types';
import { toCssVariable } from '../utils';

export const createGridContainer = (
	config: GridConfig
): React.FC<GridContainerProps> => {
	return (props) => {
		const defaults: GridContainerProps = {
			display: 'grid',
			gridAutoRows: 'min-content',
			gridTemplateColumns: `repeat(${config.columns ?? 12}, minmax(0, 1fr))`,
			gridTemplateRows: config.rows
				? `repeat(${config.rows}, minmax(0, 1fr))`
				: undefined,
			alignItems: 'start',
			gridGap: config.gap,
			boxSizing: 'border-box',
			width: config.width ?? '100%',
			height: config.height,
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
