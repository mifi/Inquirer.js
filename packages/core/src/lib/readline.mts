import ansiEscapes from '#ansi-escapes';
import type { InquirerReadline } from '../index.mjs';

/**
 * Move cursor left by `x`
 * @param  {Readline} rl - Readline instance
 * @param  {Number}   x  - How far to go left (default to 1)
 */
export function left(rl: InquirerReadline, x: number) {
  if (x > 0) {
    rl.output.write(ansiEscapes.cursorBackward(x));
  }
}

/**
 * Move cursor right by `x`
 * @param  {Readline} rl - Readline instance
 * @param  {Number}   x  - How far to go left (default to 1)
 */
export function right(rl: InquirerReadline, x: number) {
  if (x > 0) {
    rl.output.write(ansiEscapes.cursorForward(x));
  }
}

/**
 * Move cursor up by `x`
 * @param  {Readline} rl - Readline instance
 * @param  {Number}   x  - How far to go up (default to 1)
 */
export function up(rl: InquirerReadline, x: number) {
  if (x > 0) {
    rl.output.write(ansiEscapes.cursorUp(x));
  }
}

/**
 * Move cursor down by `x`
 * @param  {Readline} rl - Readline instance
 * @param  {Number}   x  - How far to go down (default to 1)
 */
export function down(rl: InquirerReadline, x: number) {
  if (x > 0) {
    rl.output.write(ansiEscapes.cursorDown(x));
  }
}

/**
 * Clear current line
 * @param  {Readline} rl  - Readline instance
 * @param  {Number}   len - number of line to delete
 */
export function clearLine(rl: InquirerReadline, len: number) {
  rl.output.write(ansiEscapes.eraseLines(len));
}
