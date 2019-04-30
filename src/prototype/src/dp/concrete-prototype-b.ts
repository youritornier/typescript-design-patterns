import { Prototype } from './prototype';

export class ConcretePrototypeB extends Prototype {
  public clone(): Prototype {
    const clone = new ConcretePrototypeB(this.id);
    return clone;
  }
}
