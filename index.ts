/**
 * Created by leojpod on 3/6/16.
 */
import {fork} from 'child_process';
import {ChildProcess} from 'child_process';

export function fibo(n: number, cb: {(fibOfN: number): void}): void {
  'use strict';
  let fiboComputer: ChildProcess = fork(__dirname + '/fibonacci');
  fiboComputer.on('message', function (msg: string): void {
    console.log('fibo of %s is %s', n, msg);
    cb(Number.parseInt(msg));
  });
  fiboComputer.send(n);
}
