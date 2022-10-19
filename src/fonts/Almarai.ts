import { loadFonts } from './base';

export const meta = {
  family: 'Almarai',
  version: 'v12',
  url: 'https://fonts.googleapis.com/css2?family=Almarai:ital,wght@0,300;0,400;0,700;0,800',
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
