import { EventType } from 'silentium';

/**
 * Represents a function that renders HTML string into an element
 */
declare function Render($root: EventType<HTMLElement>, $html: EventType<string>): EventType<HTMLElement>;

export { Render };
