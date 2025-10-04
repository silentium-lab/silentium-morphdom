import { DataType } from 'silentium';

/**
 * Represents a function that renders HTML string into an element
 */
declare const render: (rootSrc: DataType<HTMLElement>, htmlSrc: DataType<string>) => DataType<HTMLElement>;

export { render };
