import { Proxy } from './dp/proxy';

export function run(): void {
  console.log('Proxy');
  const proxy = new Proxy();
  proxy.request();
}
