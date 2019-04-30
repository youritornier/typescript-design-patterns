export class Product {
  public partA: string;
  public partB: string;

  public show(): void {
    console.log(`PartA = ${this.partA}; PartB = ${this.partB}`);
  }
}
