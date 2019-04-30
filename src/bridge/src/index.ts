import { Abstraction } from './dp/abstraction';
import { ConcreteImplementorA } from './dp/concrete-implementor-a';
import { ConcreteImplementorB } from './dp/concrete-implementor-b';
import { RefinedAbstraction } from './dp/refined-abstraction';

export function run(): void {
  console.log('Bridge');
  const abstraction: Abstraction = new RefinedAbstraction();

  abstraction.implementor = new ConcreteImplementorA();
  abstraction.operation();

  abstraction.implementor = new ConcreteImplementorB();
  abstraction.operation();
}
