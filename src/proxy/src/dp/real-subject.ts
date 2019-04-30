import { Subject } from './subject';

export class RealSubject extends Subject {
  public request(): void {
    console.log('Called RealSubject.request()');
  }
}
