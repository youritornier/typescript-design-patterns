import { Builder } from './dp/builder';
import { ConcreteBuilder1 } from './dp/concrete-builder-1';
import { ConcreteBuilder2 } from './dp/concrete-builder-2';
import { Director } from './dp/director';
import { Product } from './dp/product';

export function run(): void {
  console.log('Builder pattern');
  const director = new Director();

  const builder1: Builder = new ConcreteBuilder1();
  director.construct(builder1);
  const product1: Product = builder1.getResult();
  product1.show();

  const builder2: Builder = new ConcreteBuilder2();
  director.construct(builder2);
  const product2: Product = builder2.getResult();
  product2.show();
}
