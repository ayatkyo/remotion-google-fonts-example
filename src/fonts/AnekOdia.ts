import { loadFonts } from './base';

export const meta = {
  family: "'Anek Odia'",
  version: 'v4',
  url: 'https://fonts.googleapis.com/css2?family=Anek+Odia:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800',
  unicodeRanges: {
    'oriya': 'U+0964-0965, U+0B01-0B77, U+200C-200D, U+20B9, U+25CC',
    'latin-ext': 'U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF',
    'latin': 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
  },
  fonts: {
    normal: {
      '100': {
        'oriya': 'https://fonts.gstatic.com/s/anekodia/v4/TK3yWkoJARApz5UCd345tuevwwQX0CwsoYkAcBCwixiG.woff2',
        'latin-ext': 'https://fonts.gstatic.com/s/anekodia/v4/TK3yWkoJARApz5UCd345tuevwwQX0CwsoYkAcAewixiG.woff2',
        'latin': 'https://fonts.gstatic.com/s/anekodia/v4/TK3yWkoJARApz5UCd345tuevwwQX0CwsoYkAcAmwiw.woff2',
      },
      '200': {
        'oriya': 'https://fonts.gstatic.com/s/anekodia/v4/TK3yWkoJARApz5UCd345tuevwwQX0CwsoYkAcBCwixiG.woff2',
        'latin-ext': 'https://fonts.gstatic.com/s/anekodia/v4/TK3yWkoJARApz5UCd345tuevwwQX0CwsoYkAcAewixiG.woff2',
        'latin': 'https://fonts.gstatic.com/s/anekodia/v4/TK3yWkoJARApz5UCd345tuevwwQX0CwsoYkAcAmwiw.woff2',
      },
      '300': {
        'oriya': 'https://fonts.gstatic.com/s/anekodia/v4/TK3yWkoJARApz5UCd345tuevwwQX0CwsoYkAcBCwixiG.woff2',
        'latin-ext': 'https://fonts.gstatic.com/s/anekodia/v4/TK3yWkoJARApz5UCd345tuevwwQX0CwsoYkAcAewixiG.woff2',
        'latin': 'https://fonts.gstatic.com/s/anekodia/v4/TK3yWkoJARApz5UCd345tuevwwQX0CwsoYkAcAmwiw.woff2',
      },
      '400': {
        'oriya': 'https://fonts.gstatic.com/s/anekodia/v4/TK3yWkoJARApz5UCd345tuevwwQX0CwsoYkAcBCwixiG.woff2',
        'latin-ext': 'https://fonts.gstatic.com/s/anekodia/v4/TK3yWkoJARApz5UCd345tuevwwQX0CwsoYkAcAewixiG.woff2',
        'latin': 'https://fonts.gstatic.com/s/anekodia/v4/TK3yWkoJARApz5UCd345tuevwwQX0CwsoYkAcAmwiw.woff2',
      },
      '500': {
        'oriya': 'https://fonts.gstatic.com/s/anekodia/v4/TK3yWkoJARApz5UCd345tuevwwQX0CwsoYkAcBCwixiG.woff2',
        'latin-ext': 'https://fonts.gstatic.com/s/anekodia/v4/TK3yWkoJARApz5UCd345tuevwwQX0CwsoYkAcAewixiG.woff2',
        'latin': 'https://fonts.gstatic.com/s/anekodia/v4/TK3yWkoJARApz5UCd345tuevwwQX0CwsoYkAcAmwiw.woff2',
      },
      '600': {
        'oriya': 'https://fonts.gstatic.com/s/anekodia/v4/TK3yWkoJARApz5UCd345tuevwwQX0CwsoYkAcBCwixiG.woff2',
        'latin-ext': 'https://fonts.gstatic.com/s/anekodia/v4/TK3yWkoJARApz5UCd345tuevwwQX0CwsoYkAcAewixiG.woff2',
        'latin': 'https://fonts.gstatic.com/s/anekodia/v4/TK3yWkoJARApz5UCd345tuevwwQX0CwsoYkAcAmwiw.woff2',
      },
      '700': {
        'oriya': 'https://fonts.gstatic.com/s/anekodia/v4/TK3yWkoJARApz5UCd345tuevwwQX0CwsoYkAcBCwixiG.woff2',
        'latin-ext': 'https://fonts.gstatic.com/s/anekodia/v4/TK3yWkoJARApz5UCd345tuevwwQX0CwsoYkAcAewixiG.woff2',
        'latin': 'https://fonts.gstatic.com/s/anekodia/v4/TK3yWkoJARApz5UCd345tuevwwQX0CwsoYkAcAmwiw.woff2',
      },
      '800': {
        'oriya': 'https://fonts.gstatic.com/s/anekodia/v4/TK3yWkoJARApz5UCd345tuevwwQX0CwsoYkAcBCwixiG.woff2',
        'latin-ext': 'https://fonts.gstatic.com/s/anekodia/v4/TK3yWkoJARApz5UCd345tuevwwQX0CwsoYkAcAewixiG.woff2',
        'latin': 'https://fonts.gstatic.com/s/anekodia/v4/TK3yWkoJARApz5UCd345tuevwwQX0CwsoYkAcAmwiw.woff2',
      },
    },
  },
};

export const family = meta.family;

type Variants = {
  normal: {
    weights: '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800';
    subsets: 'latin' | 'latin-ext' | 'oriya';
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