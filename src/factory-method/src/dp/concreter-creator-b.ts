import { ConcreteProductB } from './concrete-product-b';
import { Creator } from './creator';
import { Product } from './product';

export class ConcreteCreatorB extends Creator {
  public FactoryMethod(): Product {
    return new ConcreteProductB();
  }
}
