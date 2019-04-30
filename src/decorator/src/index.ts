import { Component } from './dp/component';
import { ConcreteComponent } from './dp/concrete-component';
import { ConcreteDecoratorA } from './dp/concrete-decorator-a';
import { ConcreteDecoratorB } from './dp/concrete-decorator-b';
import { Decorator } from './dp/decorator';

export function run(): void {
  console.log('Decorator');
  const component: Component = new ConcreteComponent();
  const decoratorA: Decorator = new ConcreteDecoratorA();
  const decoratorB: Decorator = new ConcreteDecoratorB();

  decoratorA.component = component;
  decoratorB.component = decoratorA;

  decoratorB.operation();
}
