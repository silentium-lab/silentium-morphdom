import { EventType } from 'silentium';

/**
 * Represents a function that renders HTML string into an element
 */
declare function Render(rootSrc: EventType<HTMLElement>, htmlSrc: EventType<string>): EventType<HTMLElement>;

export { Render };
