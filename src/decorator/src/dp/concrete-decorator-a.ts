import { Decorator } from './decorator';

export class ConcreteDecoratorA extends Decorator {
  public operation(): void {
    super.operation();
    console.log('ConcreteDecoratorA.operation()');
  }
}
