import { Component } from './component';

export class ConcreteComponent extends Component {
  public operation(): void {
    console.log('ConcreteComponent.operation()');
  }
}
