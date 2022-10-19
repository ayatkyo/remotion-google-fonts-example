import { continueRender, delayRender } from 'remotion';

export const loadFonts = (meta: any, style: string, options: {
  weights: string[],
  subsets: string[],
}) => {
  for (const weight of options.weights) {
    for (const subset of options.subsets) {
      let font = meta.fonts[style]?.[weight]?.[subset];

      //  Check is valid
      if (!font) {
        throw new Error(`weight: ${weight} subset: ${subset} is not available for '${meta.family}'`);
      }

      const handle = delayRender(`Fetching ${meta.family} font ${JSON.stringify({
        style,
        weight,
        subset,
      })}`)

      const fontFace = new FontFace(meta.family.replace(/^['"]/g, '').replace(/['"]$/g, ''), `url(${font}) format('woff2')`, {
        weight: weight,
        style: style,
        unicodeRange: meta.unicodeRanges[subset],
      });

      fontFace.load()
        .then(() => {
          document.fonts.add(fontFace);
          continueRender(handle);
        })
        .catch((err) => {
          throw err;
        });
    }
  }
}