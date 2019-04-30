import { Adapter } from './dp/adapter';
import { Client } from './dp/client';
import { Target } from './dp/target';

export function run(): void {
  console.log('Adapter');
  const target: Target = new Adapter();
  const client: Client = new Client(target);
  client.makeRequest();
}
