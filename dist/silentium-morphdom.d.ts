import { EventType } from 'silentium';

/**
 * Represents a function that renders HTML string into an element
 */
declare const render: (rootSrc: EventType<HTMLElement>, htmlSrc: EventType<string>) => EventType<HTMLElement>;

export { render };
