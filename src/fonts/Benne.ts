import { loadFonts } from './base';

export const meta = {
  family: "'Benne'",
  version: 'v22',
  url: 'https://fonts.googleapis.com/css2?family=Benne:ital,wght@0,400',
  unicodeRanges: {
    'kannada': 'U+0964-0965, U+0C82-0CF2, U+200C-200D, U+20B9, U+25CC',
    'latin-ext': 'U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF',
    'latin': 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
  },
  fonts: {
    normal: {
      '400': {
        'kannada': 'https://fonts.gstatic.com/s/benne/v22/L0xzDFAhn18E6WjsnN-aTA.woff2',
        'latin-ext': 'https://fonts.gstatic.com/s/benne/v22/L0xzDFAhn18E6Wj4nN-aTA.woff2',
        'latin': 'https://fonts.gstatic.com/s/benne/v22/L0xzDFAhn18E6Wj2nN8.woff2',
      },
    },
  },
};

export const family = meta.family;

type Variants = {
  normal: {
    weights: '400';
    subsets: 'kannada' | 'latin' | 'latin-ext';
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
