// timers_examples_safe.js
const fs = require('fs');
const ws = fs.createWriteStream('myData.txt', { encoding: 'utf8' });

const lines = [
  '1) setTimeout example: executes after delay',
  '2) setInterval example: executes repeatedly until cleared',
  '3) setImmediate example: executes on next iteration of event loop',
  '4) clearInterval example: stops a repeating interval',
  '5) clearTimeout/clearImmediate: cancel scheduled one-time tasks'
];

lines.forEach(line => ws.write(line + '\n'));

// --- SAFE timers usage: schedule then cancel BEFORE they run ---

// setTimeout example: create but cancel before it fires
const timeoutId = setTimeout(() => {
  // this will NOT run because we clear the timeout below
  ws.write('-> setTimeout fired (should NOT appear)\n');
}, 1000);
clearTimeout(timeoutId);
ws.write('-> clearTimeout called (setTimeout canceled)\n');

// setImmediate example: create but cancel before it runs
const immediateId = setImmediate(() => {
  // this will NOT run because we clear the immediate below
  ws.write('-> setImmediate fired (should NOT appear)\n');
});
clearImmediate(immediateId);
ws.write('-> clearImmediate called (setImmediate canceled)\n');

// setInterval example: run a few ticks then clear
let intervalCount = 0;
const intervalId = setInterval(() => {
  intervalCount += 1;
  ws.write(`-> setInterval tick ${intervalCount}\n`);
  if (intervalCount >= 3) {
    clearInterval(intervalId);
    ws.write('-> clearInterval called (interval stopped)\n');
  }
}, 300);

