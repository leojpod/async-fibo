/**
 * Created by leojpod on 3/6/16.
 */

/**
 * A very naive and bad implementation of the fibonacci serie
 * @param {int} n
 * @return {int}
 */
function fibo(n: number): number {
  'use strict';

  if (n < 1) {
    throw 'huston we have a problem';
  }
  if (n === 1) {
    return 0;
  }
  if (n === 2) {
    return 1;
  }
  return fibo(n - 1) + fibo(n - 2);
}

process.on('message', function (n: number): void {
  console.log('computing fibo(%s)', n);
  let f: number = fibo(n);
  process.send(f);
});
