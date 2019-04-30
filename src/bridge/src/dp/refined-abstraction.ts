import { Abstraction } from './abstraction';

export class RefinedAbstraction extends Abstraction {
  public operation(): void {
    console.log('RefinedAbstraction operation()');
    this._implementor.operation();
  }
}
