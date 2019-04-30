import { AbstractFactory } from './abstract-factory';
import { AbstractProductA } from './abstract-product-a';
import { AbstractProductB } from './abstract-product-b';
import { ConcreteProductA1 } from './concrete-product-a-1';
import { ConcreteProductB1 } from './concrete-product-b-1';

export class ConcreteFactory1 extends AbstractFactory {
  public CreateProductA(): AbstractProductA {
    return new ConcreteProductA1();
  }

  public CreateProductB(): AbstractProductB {
    return new ConcreteProductB1();
  }
}
