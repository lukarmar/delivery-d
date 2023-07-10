import IEvetnDispatcherInterface from './types/IEventDispatcher.interface';
import { EvenHanderDataPropertiesInDispatch } from './types/EvenHanderDataPropertiesInDispatch';
import IEventInterface from './types/IEvent.interface';
import IEventHandlerInterface from './types/IEventHandler.interface';

export default class EventDispatcher implements IEvetnDispatcherInterface {
  private eventHandlers: EvenHanderDataPropertiesInDispatch = {};

  get EventHandlers(): EvenHanderDataPropertiesInDispatch {
    return this.eventHandlers;
  }

  register(eventName: string, eventHandler: IEventHandlerInterface<IEventInterface>): void {
    if (!this.eventHandlers[eventName]) {
      this.eventHandlers[eventName] = [];
    }
    this.eventHandlers[eventName].push(eventHandler);
  }

  unregister(eventName: string, eventHandler: IEventHandlerInterface): void {
    if (this.eventHandlers[eventName]) {
      const index = this.eventHandlers[eventName].indexOf(eventHandler);
      if (index !== -1) {
        this.eventHandlers[eventName].splice(index, 1);
      }
    }
  }

  unregisterAll(): void {
    this.eventHandlers = {};
  }

  notify(event: IEventInterface): void {
    const eventName = event.constructor.name;
    if (this.eventHandlers[eventName]) {
      this.eventHandlers[eventName].forEach((eventHandler) => {
        eventHandler.handle(event);
      });
    }
  }
}
