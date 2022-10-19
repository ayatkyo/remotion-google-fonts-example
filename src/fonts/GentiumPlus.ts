import { loadFonts } from './base';

export const meta = {
  family: "'Gentium Plus'",
  version: 'v1',
  url: 'https://fonts.googleapis.com/css2?family=Gentium+Plus:ital,wght@0,400;0,700;1,400;1,700',
  unicodeRanges: {
    'cyrillic-ext': 'U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F',
    'cyrillic': 'U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116',
    'greek-ext': 'U+1F00-1FFF',
    'greek': 'U+0370-03FF',
    'vietnamese': 'U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB',
    'latin-ext': 'U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF',
    'latin': 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
  },
  fonts: {
    italic: {
      '400': {
        'cyrillic-ext': 'https://fonts.gstatic.com/s/gentiumplus/v1/IurD6Ytw-oSPaZ00r2bNe8VZjqFCwGkN9w.woff2',
        'cyrillic': 'https://fonts.gstatic.com/s/gentiumplus/v1/IurD6Ytw-oSPaZ00r2bNe8VZjqFLwGkN9w.woff2',
        'greek-ext': 'https://fonts.gstatic.com/s/gentiumplus/v1/IurD6Ytw-oSPaZ00r2bNe8VZjqFDwGkN9w.woff2',
        'greek': 'https://fonts.gstatic.com/s/gentiumplus/v1/IurD6Ytw-oSPaZ00r2bNe8VZjqFMwGkN9w.woff2',
        'vietnamese': 'https://fonts.gstatic.com/s/gentiumplus/v1/IurD6Ytw-oSPaZ00r2bNe8VZjqFAwGkN9w.woff2',
        'latin-ext': 'https://fonts.gstatic.com/s/gentiumplus/v1/IurD6Ytw-oSPaZ00r2bNe8VZjqFBwGkN9w.woff2',
        'latin': 'https://fonts.gstatic.com/s/gentiumplus/v1/IurD6Ytw-oSPaZ00r2bNe8VZjqFPwGk.woff2',
      },
      '700': {
        'cyrillic-ext': 'https://fonts.gstatic.com/s/gentiumplus/v1/IurA6Ytw-oSPaZ00r2bNe8VZjqn05Xw_1oPnsw.woff2',
        'cyrillic': 'https://fonts.gstatic.com/s/gentiumplus/v1/IurA6Ytw-oSPaZ00r2bNe8VZjqn05Xw21oPnsw.woff2',
        'greek-ext': 'https://fonts.gstatic.com/s/gentiumplus/v1/IurA6Ytw-oSPaZ00r2bNe8VZjqn05Xw-1oPnsw.woff2',
        'greek': 'https://fonts.gstatic.com/s/gentiumplus/v1/IurA6Ytw-oSPaZ00r2bNe8VZjqn05Xwx1oPnsw.woff2',
        'vietnamese': 'https://fonts.gstatic.com/s/gentiumplus/v1/IurA6Ytw-oSPaZ00r2bNe8VZjqn05Xw91oPnsw.woff2',
        'latin-ext': 'https://fonts.gstatic.com/s/gentiumplus/v1/IurA6Ytw-oSPaZ00r2bNe8VZjqn05Xw81oPnsw.woff2',
        'latin': 'https://fonts.gstatic.com/s/gentiumplus/v1/IurA6Ytw-oSPaZ00r2bNe8VZjqn05Xwy1oM.woff2',
      },
    },
    normal: {
      '400': {
        'cyrillic-ext': 'https://fonts.gstatic.com/s/gentiumplus/v1/Iurd6Ytw-oSPaZ00r2bNe8VZhpFN2G0.woff2',
        'cyrillic': 'https://fonts.gstatic.com/s/gentiumplus/v1/Iurd6Ytw-oSPaZ00r2bNe8VZj5FN2G0.woff2',
        'greek-ext': 'https://fonts.gstatic.com/s/gentiumplus/v1/Iurd6Ytw-oSPaZ00r2bNe8VZh5FN2G0.woff2',
        'greek': 'https://fonts.gstatic.com/s/gentiumplus/v1/Iurd6Ytw-oSPaZ00r2bNe8VZiJFN2G0.woff2',
        'vietnamese': 'https://fonts.gstatic.com/s/gentiumplus/v1/Iurd6Ytw-oSPaZ00r2bNe8VZhJFN2G0.woff2',
        'latin-ext': 'https://fonts.gstatic.com/s/gentiumplus/v1/Iurd6Ytw-oSPaZ00r2bNe8VZhZFN2G0.woff2',
        'latin': 'https://fonts.gstatic.com/s/gentiumplus/v1/Iurd6Ytw-oSPaZ00r2bNe8VZi5FN.woff2',
      },
      '700': {
        'cyrillic-ext': 'https://fonts.gstatic.com/s/gentiumplus/v1/IurC6Ytw-oSPaZ00r2bNe8VRMLRY6kwwzoc.woff2',
        'cyrillic': 'https://fonts.gstatic.com/s/gentiumplus/v1/IurC6Ytw-oSPaZ00r2bNe8VRMLRY40wwzoc.woff2',
        'greek-ext': 'https://fonts.gstatic.com/s/gentiumplus/v1/IurC6Ytw-oSPaZ00r2bNe8VRMLRY60wwzoc.woff2',
        'greek': 'https://fonts.gstatic.com/s/gentiumplus/v1/IurC6Ytw-oSPaZ00r2bNe8VRMLRY5Ewwzoc.woff2',
        'vietnamese': 'https://fonts.gstatic.com/s/gentiumplus/v1/IurC6Ytw-oSPaZ00r2bNe8VRMLRY6Ewwzoc.woff2',
        'latin-ext': 'https://fonts.gstatic.com/s/gentiumplus/v1/IurC6Ytw-oSPaZ00r2bNe8VRMLRY6Uwwzoc.woff2',
        'latin': 'https://fonts.gstatic.com/s/gentiumplus/v1/IurC6Ytw-oSPaZ00r2bNe8VRMLRY50ww.woff2',
      },
    },
  },
};

export const family = meta.family;

type Variants = {
  italic: {
    weights: '400' | '700';
    subsets: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext' | 'vietnamese';
  };
  normal: {
    weights: '400' | '700';
    subsets: 'cyrillic' | 'cyrillic-ext' | 'greek' | 'greek-ext' | 'latin' | 'latin-ext' | 'vietnamese';
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