import { SubSystem1 } from './sub-system-1';
import { SubSystem2 } from './sub-system-2';
import { SubSystem3 } from './sub-system-3';

export class Facade {
  private readonly subSystem1: SubSystem1;
  private readonly subSystem2: SubSystem2;
  private readonly subSystem3: SubSystem3;

  constructor() {
    this.subSystem1 = new SubSystem1();
    this.subSystem2 = new SubSystem2();
    this.subSystem3 = new SubSystem3();
  }

  public methodA(): void {
    console.log('methodA:');
    this.subSystem1.method1();
    this.subSystem2.method2();
  }

  public methodB(): void {
    console.log('methodB:');
    this.subSystem1.method1();
    this.subSystem2.method2();
    this.subSystem3.method3();
  }
}
