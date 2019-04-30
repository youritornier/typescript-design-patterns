import { Builder } from './builder';
import { Product } from './product';

export class ConcreteBuilder1 extends Builder {
  private readonly product = new Product();

  public buildPartA(): void {
    this.product.partA = 'Part A builder 1';
  }

  public buildPartB(): void {
    this.product.partB = 'Part B builder 1';
  }

  public getResult(): Product {
    return this.product;
  }
}
