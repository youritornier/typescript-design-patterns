import { Component } from './component';

export class Decorator extends Component {
  private _component: Component = null;
  set component(value: Component) {
    this._component = value;
  }

  public operation(): void {
    if (this._component !== null) {
      this._component.operation();
    }
  }
}
