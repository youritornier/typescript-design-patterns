export class Singleton {
  private static instance: Singleton = null;

  private constructor() { }

  public static getInstance(): Singleton {
    if (Singleton.instance === null) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }

  public show(): void {
    console.log('Singleton instance');
  }
}
