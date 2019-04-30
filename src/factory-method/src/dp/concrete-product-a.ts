import { Product } from './product';

export class ConcreteProductA extends Product {
  public show(): void {
    console.log('Product A');
  }
}
