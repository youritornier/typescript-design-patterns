import { AbstractFactory } from './abstract-factory';
import { AbstractProductA } from './abstract-product-a';
import { AbstractProductB } from './abstract-product-b';
import { ConcreteProductA2 } from './concrete-product-a-2';
import { ConcreteProductB2 } from './concrete-product-b-2';

export class ConcreteFactory2 extends AbstractFactory {
  public CreateProductA(): AbstractProductA {
    return new ConcreteProductA2();
  }

  public CreateProductB(): AbstractProductB {
    return new ConcreteProductB2();
  }
}
