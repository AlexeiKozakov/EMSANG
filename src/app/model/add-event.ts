export class AddEvent {
  constructor(
    public name: string,
    public eventType: string,
    public price: number,
    public date: string,
    public participantLimit: number
  ) {}
}
