import { loadFonts } from './base';

export const meta = {
  family: "'Baloo Thambi 2'",
  version: 'v14',
  url: 'https://fonts.googleapis.com/css2?family=Baloo+Thambi+2:ital,wght@0,400;0,500;0,600;0,700;0,800',
  unicodeRanges: {
    'tamil': 'U+0964-0965, U+0B82-0BFA, U+200C-200D, U+20B9, U+25CC',
    'vietnamese': 'U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB',
    'latin-ext': 'U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF',
    'latin': 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
  },
  fonts: {
    normal: {
      '400': {
        'tamil': 'https://fonts.gstatic.com/s/baloothambi2/v14/cY9cfjeOW0NHpmOQXranrbDyu7hWDpKBZQ.woff2',
        'vietnamese': 'https://fonts.gstatic.com/s/baloothambi2/v14/cY9cfjeOW0NHpmOQXranrbDyu7hPDpKBZQ.woff2',
        'latin-ext': 'https://fonts.gstatic.com/s/baloothambi2/v14/cY9cfjeOW0NHpmOQXranrbDyu7hODpKBZQ.woff2',
        'latin': 'https://fonts.gstatic.com/s/baloothambi2/v14/cY9cfjeOW0NHpmOQXranrbDyu7hADpI.woff2',
      },
      '500': {
        'tamil': 'https://fonts.gstatic.com/s/baloothambi2/v14/cY9cfjeOW0NHpmOQXranrbDyu7hWDpKBZQ.woff2',
        'vietnamese': 'https://fonts.gstatic.com/s/baloothambi2/v14/cY9cfjeOW0NHpmOQXranrbDyu7hPDpKBZQ.woff2',
        'latin-ext': 'https://fonts.gstatic.com/s/baloothambi2/v14/cY9cfjeOW0NHpmOQXranrbDyu7hODpKBZQ.woff2',
        'latin': 'https://fonts.gstatic.com/s/baloothambi2/v14/cY9cfjeOW0NHpmOQXranrbDyu7hADpI.woff2',
      },
      '600': {
        'tamil': 'https://fonts.gstatic.com/s/baloothambi2/v14/cY9cfjeOW0NHpmOQXranrbDyu7hWDpKBZQ.woff2',
        'vietnamese': 'https://fonts.gstatic.com/s/baloothambi2/v14/cY9cfjeOW0NHpmOQXranrbDyu7hPDpKBZQ.woff2',
        'latin-ext': 'https://fonts.gstatic.com/s/baloothambi2/v14/cY9cfjeOW0NHpmOQXranrbDyu7hODpKBZQ.woff2',
        'latin': 'https://fonts.gstatic.com/s/baloothambi2/v14/cY9cfjeOW0NHpmOQXranrbDyu7hADpI.woff2',
      },
      '700': {
        'tamil': 'https://fonts.gstatic.com/s/baloothambi2/v14/cY9cfjeOW0NHpmOQXranrbDyu7hWDpKBZQ.woff2',
        'vietnamese': 'https://fonts.gstatic.com/s/baloothambi2/v14/cY9cfjeOW0NHpmOQXranrbDyu7hPDpKBZQ.woff2',
        'latin-ext': 'https://fonts.gstatic.com/s/baloothambi2/v14/cY9cfjeOW0NHpmOQXranrbDyu7hODpKBZQ.woff2',
        'latin': 'https://fonts.gstatic.com/s/baloothambi2/v14/cY9cfjeOW0NHpmOQXranrbDyu7hADpI.woff2',
      },
      '800': {
        'tamil': 'https://fonts.gstatic.com/s/baloothambi2/v14/cY9cfjeOW0NHpmOQXranrbDyu7hWDpKBZQ.woff2',
        'vietnamese': 'https://fonts.gstatic.com/s/baloothambi2/v14/cY9cfjeOW0NHpmOQXranrbDyu7hPDpKBZQ.woff2',
        'latin-ext': 'https://fonts.gstatic.com/s/baloothambi2/v14/cY9cfjeOW0NHpmOQXranrbDyu7hODpKBZQ.woff2',
        'latin': 'https://fonts.gstatic.com/s/baloothambi2/v14/cY9cfjeOW0NHpmOQXranrbDyu7hADpI.woff2',
      },
    },
  },
};

export const family = meta.family;

type Variants = {
  normal: {
    weights: '400' | '500' | '600' | '700' | '800';
    subsets: 'latin' | 'latin-ext' | 'tamil' | 'vietnamese';
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
