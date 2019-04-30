import { AbstractFactory } from './dp/abstract-factory';
import { Client } from './dp/client';
import { ConcreteFactory1 } from './dp/concrete-factory-1';
import { ConcreteFactory2 } from './dp/concrete-factory-2';

export function run(): void {
  console.log('Abstract Factory pattern');
  const factory1: AbstractFactory = new ConcreteFactory1();
  const client1 = new Client(factory1);
  client1.Run();

  const factory2: AbstractFactory = new ConcreteFactory2();
  const client2 = new Client(factory2);
  client2.Run();
}
