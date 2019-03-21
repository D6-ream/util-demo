import * as debug from 'debug';

const log = debug('util:demo');

export function add(a: number, b: number): number {
  log('add a: %o, b: %o', a, b);
  return a + b;
}
