import IEventInterface from '@core/common/events/types/IEvent.interface';

export default class ProductCreateEvent implements IEventInterface {
  dataTimeOccurred: Date;
  eventData: any;

  constructor(eventData: any) {
    this.dataTimeOccurred = new Date();
    this.eventData = eventData;
  }
}
