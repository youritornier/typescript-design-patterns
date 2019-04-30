import { ConcreteCreatorA } from './dp/concreter-creator-a';
import { ConcreteCreatorB } from './dp/concreter-creator-b';
import { Creator } from './dp/creator';
import { Product } from './dp/product';

export function run(): void {
  console.log('Factory Method pattern');
  const creatorA: Creator = new ConcreteCreatorA();
  const productA: Product = creatorA.FactoryMethod();
  productA.show();

  const creatorB: Creator = new ConcreteCreatorB();
  const productB: Product = creatorB.FactoryMethod();
  productB.show();
}
