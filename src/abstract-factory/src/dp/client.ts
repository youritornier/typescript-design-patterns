import { AbstractFactory } from './abstract-factory';
import { AbstractProductA } from './abstract-product-a';
import { AbstractProductB } from './abstract-product-b';

export class Client {
  private abstractProductA: AbstractProductA;
  private abstractProductB: AbstractProductB;

  constructor(factory: AbstractFactory) {
    this.abstractProductA = factory.CreateProductA();
    this.abstractProductB = factory.CreateProductB();
  }

  public Run(): void {
    this.abstractProductA.methodA();
    this.abstractProductB.methodB();
  }
}
