import { AbstractProductB } from './abstract-product-b';

export class ConcreteProductB1 extends AbstractProductB {
  public methodB(): void {
    console.log('This is methodB from ConcreteProductB1');
  }
}
