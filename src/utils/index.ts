// @index(['./*.{ts,tsx}', './*/index.{ts,tsx}'], f => `export * from '${f.path.replace(/\/index$/, '')}'`)
export * from './createCssVariable';
export * from './createGridVariables';
export * from './toCssVariable';
export * from './toKebabCase';
