import { Target } from './target';

export class Client {
  constructor(private target: Target) { }

  public makeRequest(): void {
    this.target.request();
  }
}
