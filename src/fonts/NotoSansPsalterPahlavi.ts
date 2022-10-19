import { loadFonts } from './base';

export const meta = {
  family: "'Noto Sans Psalter Pahlavi'",
  version: 'v15',
  url: 'https://fonts.googleapis.com/css2?family=Noto+Sans+Psalter+Pahlavi:ital,wght@0,400',
  unicodeRanges: {
    'psalter-pahlavi':
      'U+0640, U+200C-200D, U+25CC, U+10B80-10BAF, U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
  },
  fonts: {
    normal: {
      '400': {
        'psalter-pahlavi': 'https://fonts.gstatic.com/s/notosanspsalterpahlavi/v15/rP2Vp3K65FkAtHfwd-eISGznYihzggmsicPfud3w5BrAsA.woff2',
      },
    },
  },
};

export const family = meta.family;

type Variants = {
  normal: {
    weights: '400';
    subsets: 'psalter-pahlavi';
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