import { loadFonts } from './base';

export const meta = {
  family: "'Newsreader'",
  version: 'v19',
  url: 'https://fonts.googleapis.com/css2?family=Newsreader:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800',
  unicodeRanges: {
    'vietnamese': 'U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB',
    'latin-ext': 'U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF',
    'latin': 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
  },
  fonts: {
    italic: {
      '200': {
        'vietnamese': 'https://fonts.gstatic.com/s/newsreader/v19/cY9XfjOCX1hbuyalUrK439vogqC9yFZCYg7oRZaLFYkzbBZD.woff2',
        'latin-ext': 'https://fonts.gstatic.com/s/newsreader/v19/cY9XfjOCX1hbuyalUrK439vogqC9yFZCYg7oRZaLFYgzbBZD.woff2',
        'latin': 'https://fonts.gstatic.com/s/newsreader/v19/cY9XfjOCX1hbuyalUrK439vogqC9yFZCYg7oRZaLFYYzbA.woff2',
      },
      '300': {
        'vietnamese': 'https://fonts.gstatic.com/s/newsreader/v19/cY9XfjOCX1hbuyalUrK439vogqC9yFZCYg7oRZaLFYkzbBZD.woff2',
        'latin-ext': 'https://fonts.gstatic.com/s/newsreader/v19/cY9XfjOCX1hbuyalUrK439vogqC9yFZCYg7oRZaLFYgzbBZD.woff2',
        'latin': 'https://fonts.gstatic.com/s/newsreader/v19/cY9XfjOCX1hbuyalUrK439vogqC9yFZCYg7oRZaLFYYzbA.woff2',
      },
      '400': {
        'vietnamese': 'https://fonts.gstatic.com/s/newsreader/v19/cY9XfjOCX1hbuyalUrK439vogqC9yFZCYg7oRZaLFYkzbBZD.woff2',
        'latin-ext': 'https://fonts.gstatic.com/s/newsreader/v19/cY9XfjOCX1hbuyalUrK439vogqC9yFZCYg7oRZaLFYgzbBZD.woff2',
        'latin': 'https://fonts.gstatic.com/s/newsreader/v19/cY9XfjOCX1hbuyalUrK439vogqC9yFZCYg7oRZaLFYYzbA.woff2',
      },
      '500': {
        'vietnamese': 'https://fonts.gstatic.com/s/newsreader/v19/cY9XfjOCX1hbuyalUrK439vogqC9yFZCYg7oRZaLFYkzbBZD.woff2',
        'latin-ext': 'https://fonts.gstatic.com/s/newsreader/v19/cY9XfjOCX1hbuyalUrK439vogqC9yFZCYg7oRZaLFYgzbBZD.woff2',
        'latin': 'https://fonts.gstatic.com/s/newsreader/v19/cY9XfjOCX1hbuyalUrK439vogqC9yFZCYg7oRZaLFYYzbA.woff2',
      },
      '600': {
        'vietnamese': 'https://fonts.gstatic.com/s/newsreader/v19/cY9XfjOCX1hbuyalUrK439vogqC9yFZCYg7oRZaLFYkzbBZD.woff2',
        'latin-ext': 'https://fonts.gstatic.com/s/newsreader/v19/cY9XfjOCX1hbuyalUrK439vogqC9yFZCYg7oRZaLFYgzbBZD.woff2',
        'latin': 'https://fonts.gstatic.com/s/newsreader/v19/cY9XfjOCX1hbuyalUrK439vogqC9yFZCYg7oRZaLFYYzbA.woff2',
      },
      '700': {
        'vietnamese': 'https://fonts.gstatic.com/s/newsreader/v19/cY9XfjOCX1hbuyalUrK439vogqC9yFZCYg7oRZaLFYkzbBZD.woff2',
        'latin-ext': 'https://fonts.gstatic.com/s/newsreader/v19/cY9XfjOCX1hbuyalUrK439vogqC9yFZCYg7oRZaLFYgzbBZD.woff2',
        'latin': 'https://fonts.gstatic.com/s/newsreader/v19/cY9XfjOCX1hbuyalUrK439vogqC9yFZCYg7oRZaLFYYzbA.woff2',
      },
      '800': {
        'vietnamese': 'https://fonts.gstatic.com/s/newsreader/v19/cY9XfjOCX1hbuyalUrK439vogqC9yFZCYg7oRZaLFYkzbBZD.woff2',
        'latin-ext': 'https://fonts.gstatic.com/s/newsreader/v19/cY9XfjOCX1hbuyalUrK439vogqC9yFZCYg7oRZaLFYgzbBZD.woff2',
        'latin': 'https://fonts.gstatic.com/s/newsreader/v19/cY9XfjOCX1hbuyalUrK439vogqC9yFZCYg7oRZaLFYYzbA.woff2',
      },
    },
    normal: {
      '200': {
        'vietnamese': 'https://fonts.gstatic.com/s/newsreader/v19/cY9VfjOCX1hbuyalUrK49dLac06G1ZGsZBtoBAbCJYQraA.woff2',
        'latin-ext': 'https://fonts.gstatic.com/s/newsreader/v19/cY9VfjOCX1hbuyalUrK49dLac06G1ZGsZBtoBAbDJYQraA.woff2',
        'latin': 'https://fonts.gstatic.com/s/newsreader/v19/cY9VfjOCX1hbuyalUrK49dLac06G1ZGsZBtoBAbNJYQ.woff2',
      },
      '300': {
        'vietnamese': 'https://fonts.gstatic.com/s/newsreader/v19/cY9VfjOCX1hbuyalUrK49dLac06G1ZGsZBtoBAbCJYQraA.woff2',
        'latin-ext': 'https://fonts.gstatic.com/s/newsreader/v19/cY9VfjOCX1hbuyalUrK49dLac06G1ZGsZBtoBAbDJYQraA.woff2',
        'latin': 'https://fonts.gstatic.com/s/newsreader/v19/cY9VfjOCX1hbuyalUrK49dLac06G1ZGsZBtoBAbNJYQ.woff2',
      },
      '400': {
        'vietnamese': 'https://fonts.gstatic.com/s/newsreader/v19/cY9VfjOCX1hbuyalUrK49dLac06G1ZGsZBtoBAbCJYQraA.woff2',
        'latin-ext': 'https://fonts.gstatic.com/s/newsreader/v19/cY9VfjOCX1hbuyalUrK49dLac06G1ZGsZBtoBAbDJYQraA.woff2',
        'latin': 'https://fonts.gstatic.com/s/newsreader/v19/cY9VfjOCX1hbuyalUrK49dLac06G1ZGsZBtoBAbNJYQ.woff2',
      },
      '500': {
        'vietnamese': 'https://fonts.gstatic.com/s/newsreader/v19/cY9VfjOCX1hbuyalUrK49dLac06G1ZGsZBtoBAbCJYQraA.woff2',
        'latin-ext': 'https://fonts.gstatic.com/s/newsreader/v19/cY9VfjOCX1hbuyalUrK49dLac06G1ZGsZBtoBAbDJYQraA.woff2',
        'latin': 'https://fonts.gstatic.com/s/newsreader/v19/cY9VfjOCX1hbuyalUrK49dLac06G1ZGsZBtoBAbNJYQ.woff2',
      },
      '600': {
        'vietnamese': 'https://fonts.gstatic.com/s/newsreader/v19/cY9VfjOCX1hbuyalUrK49dLac06G1ZGsZBtoBAbCJYQraA.woff2',
        'latin-ext': 'https://fonts.gstatic.com/s/newsreader/v19/cY9VfjOCX1hbuyalUrK49dLac06G1ZGsZBtoBAbDJYQraA.woff2',
        'latin': 'https://fonts.gstatic.com/s/newsreader/v19/cY9VfjOCX1hbuyalUrK49dLac06G1ZGsZBtoBAbNJYQ.woff2',
      },
      '700': {
        'vietnamese': 'https://fonts.gstatic.com/s/newsreader/v19/cY9VfjOCX1hbuyalUrK49dLac06G1ZGsZBtoBAbCJYQraA.woff2',
        'latin-ext': 'https://fonts.gstatic.com/s/newsreader/v19/cY9VfjOCX1hbuyalUrK49dLac06G1ZGsZBtoBAbDJYQraA.woff2',
        'latin': 'https://fonts.gstatic.com/s/newsreader/v19/cY9VfjOCX1hbuyalUrK49dLac06G1ZGsZBtoBAbNJYQ.woff2',
      },
      '800': {
        'vietnamese': 'https://fonts.gstatic.com/s/newsreader/v19/cY9VfjOCX1hbuyalUrK49dLac06G1ZGsZBtoBAbCJYQraA.woff2',
        'latin-ext': 'https://fonts.gstatic.com/s/newsreader/v19/cY9VfjOCX1hbuyalUrK49dLac06G1ZGsZBtoBAbDJYQraA.woff2',
        'latin': 'https://fonts.gstatic.com/s/newsreader/v19/cY9VfjOCX1hbuyalUrK49dLac06G1ZGsZBtoBAbNJYQ.woff2',
      },
    },
  },
};

export const family = meta.family;

type Variants = {
  italic: {
    weights: '200' | '300' | '400' | '500' | '600' | '700' | '800';
    subsets: 'latin' | 'latin-ext' | 'vietnamese';
  };
  normal: {
    weights: '200' | '300' | '400' | '500' | '600' | '700' | '800';
    subsets: 'latin' | 'latin-ext' | 'vietnamese';
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
