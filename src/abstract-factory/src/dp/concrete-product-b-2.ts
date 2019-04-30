import { AbstractProductB } from './abstract-product-b';

export class ConcreteProductB2 extends AbstractProductB {
  public methodB(): void {
    console.log('This is methodB from ConcreteProductB2');
  }
}
