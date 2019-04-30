import { ConcreteProductA } from './concrete-product-a';
import { Creator } from './creator';
import { Product } from './product';

export class ConcreteCreatorA extends Creator {
  public FactoryMethod(): Product {
    return new ConcreteProductA();
  }
}
