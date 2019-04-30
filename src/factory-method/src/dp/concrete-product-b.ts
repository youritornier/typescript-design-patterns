import { Product } from './product';

export class ConcreteProductB extends Product {
  public show(): void {
    console.log('Product B');
  }
}
