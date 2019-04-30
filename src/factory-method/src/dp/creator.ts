import { Product } from './product';

export abstract class Creator {
  public abstract FactoryMethod(): Product;
}
