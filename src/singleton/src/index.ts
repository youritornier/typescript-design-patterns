import { Singleton } from './dp/singleton';

export function run(): void {
  console.log('Singleton pattern');
  const singleton1: Singleton = Singleton.getInstance();
  singleton1.show();
  const singleton2: Singleton = Singleton.getInstance();
  console.log(`singleton1 === singleton2 ? ${singleton1 === singleton2}`);
}
