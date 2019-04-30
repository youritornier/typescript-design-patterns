import { ConcretePrototypeA } from './dp/concrete-prototype-a';
import { ConcretePrototypeB } from './dp/concrete-prototype-b';
import { Prototype } from './dp/prototype';

export function run(): void {
  console.log('Prototype pattern');
  const prototypeA: Prototype = new ConcretePrototypeA('prototypeA');
  const cloneA: Prototype = prototypeA.clone();
  cloneA.show();

  const prototypeB: Prototype = new ConcretePrototypeB('prototypeB');
  const cloneB: Prototype = prototypeB.clone();
  cloneB.show();
}
