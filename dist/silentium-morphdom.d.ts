import { TheInformation, InformationType, OwnerType } from 'silentium';

/**
 * Represents a function that renders HTML string into an element
 */
declare class Render extends TheInformation<HTMLElement> {
    private rootSrc;
    private htmlSrc;
    constructor(rootSrc: InformationType<HTMLElement>, htmlSrc: InformationType<string>);
    value(o: OwnerType<HTMLElement>): this;
}

export { Render };
