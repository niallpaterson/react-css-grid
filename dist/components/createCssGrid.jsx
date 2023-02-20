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
const createMediaQueries = () => () => <style>background: black;</style>;
const createContainer = () => () => <h1>Hello World</h1>;
const createItem = () => () => <h2>You only live once</h2>;
export const createCssGrid = ({ columns = 12, rows = 'auto', margin = '24px', gap = '24px', }) => {
    return {
        MediaQueries: createMediaQueries(),
        Item: createItem(),
        Container: createContainer(),
    };
};
