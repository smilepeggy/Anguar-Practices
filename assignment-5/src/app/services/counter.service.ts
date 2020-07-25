export class CounterService {
  activeToInactiveCounter = 0;
  inactiveToActiveCounter = 0;

  incrementActiveToinActive() {
    this.activeToInactiveCounter++;
    console.log("Active to Inactive = " + this.activeToInactiveCounter);
  }
  incrementInactiveToActive() {
    this.inactiveToActiveCounter++;
    console.log("Inactive to Active = " + this.inactiveToActiveCounter);
  }
}
