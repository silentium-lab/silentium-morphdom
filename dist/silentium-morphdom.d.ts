import { TheInformation, TheOwner } from 'silentium';

/**
 * Represents a function that renders HTML string into an element
 */
declare class Render extends TheInformation<HTMLElement> {
    private rootSrc;
    private htmlSrc;
    constructor(rootSrc: TheInformation<HTMLElement>, htmlSrc: TheInformation<string>);
    value(o: TheOwner<HTMLElement>): this;
}

export { Render };
