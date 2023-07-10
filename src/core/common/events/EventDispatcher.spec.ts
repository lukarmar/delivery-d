import { describe, it, expect, jest } from '@jest/globals';
import EventDispatcher from './EventDispatcher';
import SendEmailProductCreateHandler from '@infra/events/products/handler/SendEmailProductCreateHandler';
import ProductCreateEvent from '@infra/events/products/ProductCreateEvent';

let eventDispatcher: EventDispatcher;
let sendEmailProductCreateHandler: SendEmailProductCreateHandler;
let productCreateEvent: ProductCreateEvent;

describe('Event Dispatch', () => {
  eventDispatcher = new EventDispatcher();
  sendEmailProductCreateHandler = new SendEmailProductCreateHandler();

  it('should be able register a dispatch handler', () => {
    eventDispatcher = new EventDispatcher();
    sendEmailProductCreateHandler = new SendEmailProductCreateHandler();

    eventDispatcher.register('ProductCreateEvent', sendEmailProductCreateHandler);

    expect(eventDispatcher.EventHandlers['ProductCreateEvent']).toBeDefined();
    expect(eventDispatcher.EventHandlers['ProductCreateEvent']).toHaveLength(1);
    expect(eventDispatcher.EventHandlers['ProductCreateEvent'][0]).toBeInstanceOf(SendEmailProductCreateHandler);
  });

  it('should be able unregister an event handler', () => {
    eventDispatcher = new EventDispatcher();
    sendEmailProductCreateHandler = new SendEmailProductCreateHandler();

    eventDispatcher.register('ProductCreateEvent', sendEmailProductCreateHandler);

    expect(eventDispatcher.EventHandlers['ProductCreateEvent']).toBeDefined();
    expect(eventDispatcher.EventHandlers['ProductCreateEvent']).toHaveLength(1);

    eventDispatcher.unregister('ProductCreateEvent', sendEmailProductCreateHandler);

    expect(eventDispatcher.EventHandlers['ProductCreateEvent']).toHaveLength(0);
    expect(eventDispatcher.EventHandlers['ProductCreateEvent'][0]).toBeUndefined();
  });

  it('should be able unregister all event handlers', () => {
    eventDispatcher = new EventDispatcher();
    sendEmailProductCreateHandler = new SendEmailProductCreateHandler();

    eventDispatcher.register('ProductCreateEvent', sendEmailProductCreateHandler);

    expect(eventDispatcher.EventHandlers['ProductCreateEvent']).toBeDefined();
    expect(eventDispatcher.EventHandlers['ProductCreateEvent']).toHaveLength(1);

    eventDispatcher.unregisterAll();

    expect(eventDispatcher.EventHandlers['ProductCreateEvent']).toBeUndefined();
    expect(eventDispatcher.EventHandlers).toMatchObject({});
  });

  it('should be able notify all event handlers', () => {
    eventDispatcher = new EventDispatcher();
    sendEmailProductCreateHandler = new SendEmailProductCreateHandler();
    productCreateEvent = new ProductCreateEvent({ id: '1', name: 'Product 1', price: 100, quantity: 10 });

    jest.spyOn(sendEmailProductCreateHandler, 'handle');

    eventDispatcher.register('ProductCreateEvent', sendEmailProductCreateHandler);

    expect(eventDispatcher.EventHandlers['ProductCreateEvent']).toBeDefined();
    expect(eventDispatcher.EventHandlers['ProductCreateEvent']).toHaveLength(1);

    eventDispatcher.notify(productCreateEvent);

    expect(sendEmailProductCreateHandler.handle).toHaveBeenCalled();
    expect(sendEmailProductCreateHandler.handle).toHaveBeenCalledTimes(1);
    expect(sendEmailProductCreateHandler.handle).toHaveBeenCalledWith(productCreateEvent);
  });
});
