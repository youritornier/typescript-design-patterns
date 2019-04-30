export abstract class Prototype {
  constructor(protected id: string) {}

  public abstract clone(): Prototype;

  public show(): void {
    console.log(`Prototype object id = ${this.id}`);
  }
}
