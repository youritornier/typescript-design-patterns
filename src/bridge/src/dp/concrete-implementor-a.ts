import { Implementor } from './implementor';

export class ConcreteImplementorA extends Implementor {
  operation(): void {
    console.log('ConcreteImplementorA operation');
  }
}
