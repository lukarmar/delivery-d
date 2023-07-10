/* eslint-disable no-unused-vars */
// Registra os eventos e método de notificação quando um evento acontecer. ele será responsável ṕor executar todos os hanlders
import IEventHandlerInterface from './IEventHandler.interface';
import IEventInterface from './IEvent.interface';

export default interface IEvetnDispatcherInterface {
  notify(event: IEventInterface): void;
  register(eventName: string, eventHandler: IEventHandlerInterface): void;
  unregister(eventName: string, eventHandler: IEventHandlerInterface): void;
  unregisterAll(): void;
}
