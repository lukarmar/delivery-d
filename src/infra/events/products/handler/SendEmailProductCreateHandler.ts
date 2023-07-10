import IEventHandlerInterface from '@core/common/events/types/IEventHandler.interface';
import ProductCreateEvent from '../ProductCreateEvent';

export default class SendEmailProductCreateHandler implements IEventHandlerInterface<ProductCreateEvent> {
  handle(event: ProductCreateEvent): void {
    console.log(event);
  }
}
