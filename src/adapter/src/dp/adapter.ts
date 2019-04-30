import { Adaptee } from './adaptee';
import { Target } from './target';

export class Adapter extends Target {
  private readonly adaptee: Adaptee;

  constructor() {
    super();
    this.adaptee = new Adaptee();
  }

  public request(): void {
    this.adaptee.specificRequest();
  }
}
