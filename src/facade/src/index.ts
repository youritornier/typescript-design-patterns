import { Facade } from './dp/facade';

export function run(): void {
  console.log('Facade');
  const facade = new Facade();
  facade.methodA();
  facade.methodB();
}
