import { Prototype } from './prototype';

export class ConcretePrototypeA extends Prototype {
  public clone(): Prototype {
    const clone = new ConcretePrototypeA(this.id);
    return clone;
  }
}
