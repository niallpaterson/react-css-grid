type CssVariableConfig = {
	property: string;
	default?: string;
};

export const createCssVariable = (config: CssVariableConfig) =>
	`var(${config.property}${config.default ? `, ${config.default}` : ''})`;
