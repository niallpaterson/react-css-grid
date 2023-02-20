import * as React from 'react';

// type CssUnit =
// 	| 'px'
// 	| 'em'
// 	| 'rem'
// 	| 'ch'
// 	| 'vw'
// 	| 'vh'
// 	| 'vmin'
// 	| 'vmax'
// 	| 'cm'
// 	| 'mm'
// 	| 'in'
// 	| 'pc'
// 	| 'pt'
// 	| '%'
// 	| 'ex';

// type CssSize = `${number}${CssUnit}`;

export type GridContainerProps = React.CSSProperties &
	React.HTMLAttributes<unknown> & { as?: React.ElementType };

export type GridItemProps = GridContainerProps & {
	// config props
	start: number;
	end: number;
	subGrid?: boolean;
};

// TODO: Implement gutter functionality

export type GridConfig = Partial<{
	columns: number | 'auto';
	rows: number | 'auto';
	gutter: string;
	gap: string;
	width: string;
	height: string;
	enabledProperties: (keyof React.CSSProperties)[];
}>;
