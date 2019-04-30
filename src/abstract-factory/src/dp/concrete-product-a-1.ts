import { AbstractProductA } from './abstract-product-a';

export class ConcreteProductA1 extends AbstractProductA {
  public methodA(): void {
    console.log('This is methodA from ConcreteProductA1');
  }
}
