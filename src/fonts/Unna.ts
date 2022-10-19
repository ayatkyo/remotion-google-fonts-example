import { loadFonts } from './base';

export const meta = {
  family: 'Unna',
  version: 'v21',
  url: 'https://fonts.googleapis.com/css2?family=Unna:ital,wght@0,400;0,700;1,400;1,700',
  unicodeRanges: {},
  fonts: {},
};

export const family = meta.family;

type Variants = {};

export const loadFont = <T extends keyof Variants>(
  style: T,
  options: {
    weights: Variants[T]['weights'][];
    subsets: Variants[T]['subsets'][];
  }
) => {
  loadFonts(meta, style, options);
};
