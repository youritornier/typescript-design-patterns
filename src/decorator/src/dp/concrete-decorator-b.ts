import { Decorator } from './decorator';

export class ConcreteDecoratorB extends Decorator {
  public operation(): void {
    super.operation();
    console.log('ConcreteDecoratorB.operation()');
  }
}
