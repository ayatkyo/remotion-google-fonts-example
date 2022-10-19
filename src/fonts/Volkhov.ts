import { loadFonts } from './base';

export const meta = {
  family: "'Volkhov'",
  version: 'v17',
  url: 'https://fonts.googleapis.com/css2?family=Volkhov:ital,wght@0,400;0,700;1,400;1,700',
  unicodeRanges: {
    latin: 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
  },
  fonts: {
    italic: {
      '400': {
        latin: 'https://fonts.gstatic.com/s/volkhov/v17/SlGSmQieoJcKemNecTA0h1R3.woff2',
      },
      '700': {
        latin: 'https://fonts.gstatic.com/s/volkhov/v17/SlGXmQieoJcKemNecTA8PHFibxwQ.woff2',
      },
    },
    normal: {
      '400': {
        latin: 'https://fonts.gstatic.com/s/volkhov/v17/SlGQmQieoJcKemNecTUEhQ.woff2',
      },
      '700': {
        latin: 'https://fonts.gstatic.com/s/volkhov/v17/SlGVmQieoJcKemNeeY4hkHNSbQ.woff2',
      },
    },
  },
};

export const family = meta.family;

type Variants = {
  italic: {
    weights: '400' | '700';
    subsets: 'latin';
  };
  normal: {
    weights: '400' | '700';
    subsets: 'latin';
  };
};

export const loadFont = <T extends keyof Variants>(
  style: T,
  options: {
    weights: Variants[T]['weights'][];
    subsets: Variants[T]['subsets'][];
  }
) => {
  loadFonts(meta, style, options);
};