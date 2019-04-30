import { Product } from './product';

export abstract class Builder {
  public abstract buildPartA(): void;
  public abstract buildPartB(): void;
  public abstract getResult(): Product;
}
