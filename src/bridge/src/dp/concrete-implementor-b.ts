import { Implementor } from './implementor';

export class ConcreteImplementorB extends Implementor {
  operation(): void {
    console.log('ConcreteImplementorB operation');
  }
}
