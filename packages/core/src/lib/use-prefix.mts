import chalk from 'chalk';
import spinners from 'cli-spinners';
import { useState } from './use-state.mjs';
import { useEffect } from './use-effect.mjs';
import { makeTheme } from './make-theme.mjs';
import type { Theme } from './theme.mjs';

const prefixTheme = {
  prefix: chalk.green('?'),
  spinner: spinners.dots,
} satisfies Partial<Theme>;

export function usePrefix({
  isLoading = false,
  theme,
}: {
  isLoading?: boolean;
  theme?: Partial<Theme>;
}): string {
  const [tick, setTick] = useState(0);
  const { prefix, spinner } = makeTheme(prefixTheme, theme);

  useEffect((): void | (() => unknown) => {
    if (isLoading) {
      const timeout = setTimeout(() => {
        setTick(tick + 1);
      }, spinner.interval);

      return () => clearTimeout(timeout);
    }
  }, [isLoading, tick]);

  if (isLoading) {
    const frame = tick % spinner.frames.length;
    return chalk.yellow(spinner.frames[frame]);
  }

  return prefix;
}
