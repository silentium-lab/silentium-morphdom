import { InformationType } from 'silentium';

/**
 * Represents a function that renders HTML string into an element
 */
declare const render: (rootSrc: InformationType<HTMLElement>, htmlSrc: InformationType<string>) => InformationType<HTMLElement>;

export { render };
