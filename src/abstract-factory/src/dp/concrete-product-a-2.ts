import { AbstractProductA } from './abstract-product-a';

export class ConcreteProductA2 extends AbstractProductA {
  public methodA(): void {
    console.log('This is methodA from ConcreteProductA2');
  }
}
