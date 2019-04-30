import { RealSubject } from './real-subject';
import { Subject } from './subject';

export class Proxy extends Subject {
  private  realSubject: RealSubject = null;

  public request(): void {
    if (this.realSubject === null) {
      this.realSubject = new RealSubject();
    }
    this.realSubject.request();
  }
}
