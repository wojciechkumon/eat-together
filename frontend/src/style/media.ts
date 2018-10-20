type Breakpoint = 'xs' | 'sm' | 'md' | 'lg';

export const gt = (breakpoint: Breakpoint): string => minWidthQuery(breakpoints[breakpoint] + 1);
const minWidthQuery = (size: number): string => `(min-width: ${size}px)`;

export const lte = (breakpoint: Breakpoint): string => maxWidthQuery(breakpoints[breakpoint]);
const maxWidthQuery = (size: number): string => `(max-width: ${size}px)`;

const breakpoints = {
  xs: 575,
  sm: 767,
  md: 991,
  lg: 1199
};
