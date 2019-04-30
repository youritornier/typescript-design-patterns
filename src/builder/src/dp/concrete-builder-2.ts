import { Builder } from './builder';
import { Product } from './product';

export class ConcreteBuilder2 extends Builder {
  private readonly product = new Product();

  public buildPartA(): void {
    this.product.partA = 'Part A builder 2';
  }

  public buildPartB(): void {
    this.product.partB = 'Part B builder 2';
  }

  public getResult(): Product {
    return this.product;
  }
}
