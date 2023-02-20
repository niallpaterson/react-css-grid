import * as React from 'react';
import { createGridContainer, createGridItem } from './components';
import { createGridStyles } from './utils';
import { GridConfig } from './types';

export const createCssGrid = (config: GridConfig) =>
	Object.assign(createGridContainer(config), {
		Item: createGridItem(config),
		Styles: () => (
			<style>
				{createGridStyles({ enabledProperties: config.enabledProperties })}
			</style>
		),
	});
