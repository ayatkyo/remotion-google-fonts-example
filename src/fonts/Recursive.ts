import { loadFonts } from './base';

export const meta = {
  family: "'Recursive'",
  version: 'v35',
  url: 'https://fonts.googleapis.com/css2?family=Recursive:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900',
  unicodeRanges: {
    'cyrillic-ext': 'U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F',
    'vietnamese': 'U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB',
    'latin-ext': 'U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF',
    'latin': 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
  },
  fonts: {
    normal: {
      '300': {
        'cyrillic-ext': 'https://fonts.gstatic.com/s/recursive/v35/8vI-7wMr0mhh-RQChyHEH06TlXhq_gukbYrFMk1QuAIcyEwG_X-dpEfaE5YaERmK-CImKsvxvU-MXGX2fSqasNfUlTyZnJ97.woff2',
        'vietnamese': 'https://fonts.gstatic.com/s/recursive/v35/8vI-7wMr0mhh-RQChyHEH06TlXhq_gukbYrFMk1QuAIcyEwG_X-dpEfaE5YaERmK-CImKsvxvU-MXGX2fSqasNfUlT6ZnJ97.woff2',
        'latin-ext': 'https://fonts.gstatic.com/s/recursive/v35/8vI-7wMr0mhh-RQChyHEH06TlXhq_gukbYrFMk1QuAIcyEwG_X-dpEfaE5YaERmK-CImKsvxvU-MXGX2fSqasNfUlT-ZnJ97.woff2',
        'latin': 'https://fonts.gstatic.com/s/recursive/v35/8vI-7wMr0mhh-RQChyHEH06TlXhq_gukbYrFMk1QuAIcyEwG_X-dpEfaE5YaERmK-CImKsvxvU-MXGX2fSqasNfUlTGZnA.woff2',
      },
      '400': {
        'cyrillic-ext': 'https://fonts.gstatic.com/s/recursive/v35/8vI-7wMr0mhh-RQChyHEH06TlXhq_gukbYrFMk1QuAIcyEwG_X-dpEfaE5YaERmK-CImKsvxvU-MXGX2fSqasNfUlTyZnJ97.woff2',
        'vietnamese': 'https://fonts.gstatic.com/s/recursive/v35/8vI-7wMr0mhh-RQChyHEH06TlXhq_gukbYrFMk1QuAIcyEwG_X-dpEfaE5YaERmK-CImKsvxvU-MXGX2fSqasNfUlT6ZnJ97.woff2',
        'latin-ext': 'https://fonts.gstatic.com/s/recursive/v35/8vI-7wMr0mhh-RQChyHEH06TlXhq_gukbYrFMk1QuAIcyEwG_X-dpEfaE5YaERmK-CImKsvxvU-MXGX2fSqasNfUlT-ZnJ97.woff2',
        'latin': 'https://fonts.gstatic.com/s/recursive/v35/8vI-7wMr0mhh-RQChyHEH06TlXhq_gukbYrFMk1QuAIcyEwG_X-dpEfaE5YaERmK-CImKsvxvU-MXGX2fSqasNfUlTGZnA.woff2',
      },
      '500': {
        'cyrillic-ext': 'https://fonts.gstatic.com/s/recursive/v35/8vI-7wMr0mhh-RQChyHEH06TlXhq_gukbYrFMk1QuAIcyEwG_X-dpEfaE5YaERmK-CImKsvxvU-MXGX2fSqasNfUlTyZnJ97.woff2',
        'vietnamese': 'https://fonts.gstatic.com/s/recursive/v35/8vI-7wMr0mhh-RQChyHEH06TlXhq_gukbYrFMk1QuAIcyEwG_X-dpEfaE5YaERmK-CImKsvxvU-MXGX2fSqasNfUlT6ZnJ97.woff2',
        'latin-ext': 'https://fonts.gstatic.com/s/recursive/v35/8vI-7wMr0mhh-RQChyHEH06TlXhq_gukbYrFMk1QuAIcyEwG_X-dpEfaE5YaERmK-CImKsvxvU-MXGX2fSqasNfUlT-ZnJ97.woff2',
        'latin': 'https://fonts.gstatic.com/s/recursive/v35/8vI-7wMr0mhh-RQChyHEH06TlXhq_gukbYrFMk1QuAIcyEwG_X-dpEfaE5YaERmK-CImKsvxvU-MXGX2fSqasNfUlTGZnA.woff2',
      },
      '600': {
        'cyrillic-ext': 'https://fonts.gstatic.com/s/recursive/v35/8vI-7wMr0mhh-RQChyHEH06TlXhq_gukbYrFMk1QuAIcyEwG_X-dpEfaE5YaERmK-CImKsvxvU-MXGX2fSqasNfUlTyZnJ97.woff2',
        'vietnamese': 'https://fonts.gstatic.com/s/recursive/v35/8vI-7wMr0mhh-RQChyHEH06TlXhq_gukbYrFMk1QuAIcyEwG_X-dpEfaE5YaERmK-CImKsvxvU-MXGX2fSqasNfUlT6ZnJ97.woff2',
        'latin-ext': 'https://fonts.gstatic.com/s/recursive/v35/8vI-7wMr0mhh-RQChyHEH06TlXhq_gukbYrFMk1QuAIcyEwG_X-dpEfaE5YaERmK-CImKsvxvU-MXGX2fSqasNfUlT-ZnJ97.woff2',
        'latin': 'https://fonts.gstatic.com/s/recursive/v35/8vI-7wMr0mhh-RQChyHEH06TlXhq_gukbYrFMk1QuAIcyEwG_X-dpEfaE5YaERmK-CImKsvxvU-MXGX2fSqasNfUlTGZnA.woff2',
      },
      '700': {
        'cyrillic-ext': 'https://fonts.gstatic.com/s/recursive/v35/8vI-7wMr0mhh-RQChyHEH06TlXhq_gukbYrFMk1QuAIcyEwG_X-dpEfaE5YaERmK-CImKsvxvU-MXGX2fSqasNfUlTyZnJ97.woff2',
        'vietnamese': 'https://fonts.gstatic.com/s/recursive/v35/8vI-7wMr0mhh-RQChyHEH06TlXhq_gukbYrFMk1QuAIcyEwG_X-dpEfaE5YaERmK-CImKsvxvU-MXGX2fSqasNfUlT6ZnJ97.woff2',
        'latin-ext': 'https://fonts.gstatic.com/s/recursive/v35/8vI-7wMr0mhh-RQChyHEH06TlXhq_gukbYrFMk1QuAIcyEwG_X-dpEfaE5YaERmK-CImKsvxvU-MXGX2fSqasNfUlT-ZnJ97.woff2',
        'latin': 'https://fonts.gstatic.com/s/recursive/v35/8vI-7wMr0mhh-RQChyHEH06TlXhq_gukbYrFMk1QuAIcyEwG_X-dpEfaE5YaERmK-CImKsvxvU-MXGX2fSqasNfUlTGZnA.woff2',
      },
      '800': {
        'cyrillic-ext': 'https://fonts.gstatic.com/s/recursive/v35/8vI-7wMr0mhh-RQChyHEH06TlXhq_gukbYrFMk1QuAIcyEwG_X-dpEfaE5YaERmK-CImKsvxvU-MXGX2fSqasNfUlTyZnJ97.woff2',
        'vietnamese': 'https://fonts.gstatic.com/s/recursive/v35/8vI-7wMr0mhh-RQChyHEH06TlXhq_gukbYrFMk1QuAIcyEwG_X-dpEfaE5YaERmK-CImKsvxvU-MXGX2fSqasNfUlT6ZnJ97.woff2',
        'latin-ext': 'https://fonts.gstatic.com/s/recursive/v35/8vI-7wMr0mhh-RQChyHEH06TlXhq_gukbYrFMk1QuAIcyEwG_X-dpEfaE5YaERmK-CImKsvxvU-MXGX2fSqasNfUlT-ZnJ97.woff2',
        'latin': 'https://fonts.gstatic.com/s/recursive/v35/8vI-7wMr0mhh-RQChyHEH06TlXhq_gukbYrFMk1QuAIcyEwG_X-dpEfaE5YaERmK-CImKsvxvU-MXGX2fSqasNfUlTGZnA.woff2',
      },
      '900': {
        'cyrillic-ext': 'https://fonts.gstatic.com/s/recursive/v35/8vI-7wMr0mhh-RQChyHEH06TlXhq_gukbYrFMk1QuAIcyEwG_X-dpEfaE5YaERmK-CImKsvxvU-MXGX2fSqasNfUlTyZnJ97.woff2',
        'vietnamese': 'https://fonts.gstatic.com/s/recursive/v35/8vI-7wMr0mhh-RQChyHEH06TlXhq_gukbYrFMk1QuAIcyEwG_X-dpEfaE5YaERmK-CImKsvxvU-MXGX2fSqasNfUlT6ZnJ97.woff2',
        'latin-ext': 'https://fonts.gstatic.com/s/recursive/v35/8vI-7wMr0mhh-RQChyHEH06TlXhq_gukbYrFMk1QuAIcyEwG_X-dpEfaE5YaERmK-CImKsvxvU-MXGX2fSqasNfUlT-ZnJ97.woff2',
        'latin': 'https://fonts.gstatic.com/s/recursive/v35/8vI-7wMr0mhh-RQChyHEH06TlXhq_gukbYrFMk1QuAIcyEwG_X-dpEfaE5YaERmK-CImKsvxvU-MXGX2fSqasNfUlTGZnA.woff2',
      },
    },
  },
};

export const family = meta.family;

type Variants = {
  normal: {
    weights: '300' | '400' | '500' | '600' | '700' | '800' | '900';
    subsets: 'cyrillic-ext' | 'latin' | 'latin-ext' | 'vietnamese';
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