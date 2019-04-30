import { Builder } from './builder';

export class Director {
  public construct(builder: Builder): void {
    builder.buildPartA();
    builder.buildPartB();
  }
}
