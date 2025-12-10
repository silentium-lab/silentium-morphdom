import * as silentium from 'silentium';
import { MessageType } from 'silentium';

/**
 * Represents a function that renders HTML string into an element
 */
declare function Render($root: MessageType<HTMLElement>, $html: MessageType<string>): silentium.SharedImpl<HTMLElement>;

export { Render };
