/* eslint-disable no-unused-vars */
// Método que será executado quando o evento acontecer

import IEventInterface from './IEvent.interface';

export default interface IEventHandlerInterface<T extends IEventInterface = IEventInterface> {
  handle(event: T): void;
}
