import { AbstractProductA } from './abstract-product-a';
import { AbstractProductB } from './abstract-product-b';

export abstract class AbstractFactory {
  public abstract CreateProductA(): AbstractProductA;
  public abstract CreateProductB(): AbstractProductB;
}
