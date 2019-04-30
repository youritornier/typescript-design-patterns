import { Implementor } from './implementor';

export class Abstraction {
  protected _implementor: Implementor;
  set implementor(value: Implementor) {
    this._implementor = value;
  }

  public operation(): void {
    console.log('Abstraction operation()');
    this._implementor.operation();
  }
}
