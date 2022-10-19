import React from "react";
import { AbsoluteFill, interpolate, Sequence, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { FontItem } from "./GoogleFonts/FontItem";

//  Single font
import { family, loadFont } from './fonts/Baloo2';

//  Multiple fonts
import * as TitanOne from './fonts/TitanOne';
import * as Pacifico from './fonts/Pacifico';
import * as OleoScript from './fonts/OleoScript';
import * as CaesarDressing from './fonts/CaesarDressing';
import * as FasterOne from './fonts/FasterOne';

// Load font for text
loadFont('normal', {
  weights: ['400', '600', '700', '800'],
  subsets: ['latin'],
});

//  Load multiple fonts
TitanOne.loadFont('normal', {
  weights: ['400'],
  subsets: ['latin'],
});
Pacifico.loadFont('normal', {
  weights: ['400'],
  subsets: ['latin'],
});
OleoScript.loadFont('normal', {
  weights: ['700'],
  subsets: ['latin'],
});
CaesarDressing.loadFont('normal', {
  weights: ['400'],
  subsets: ['latin'],
});
FasterOne.loadFont('normal', {
  weights: ['400'],
  subsets: ['latin'],
});

//  Fonts to display
const fontTestList = [
  TitanOne.family,
  Pacifico.family,
  OleoScript.family,
  CaesarDressing.family,
  FasterOne.family,
];

//  STYLE
const bg: React.CSSProperties = {
  backgroundImage: 'linear-gradient(0deg, rgb(170, 63, 216) 0%, rgb(219, 51, 161) 100%)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};
const content: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};
let textStyle: React.CSSProperties = {
  fontFamily: family,
  fontSize: '3em',
  fontWeight: '600',
  textAlign: 'center',
  color: 'rgb(254, 213, 48)',
  textShadow: 'rgb(0 0 0 / 25%) 0px .075em .05em',
  marginBottom: '0.05em',
  transform: 'translateY(-3rem)'
};

export const GoogleFontsDemo = () => {
  const { fps, durationInFrames } = useVideoConfig();
  const frame = useCurrentFrame();

  const preTitleScale = spring({
    fps: fps,
    frame: frame,
    config: {
      damping: 200,
    },
  });

  const preTitleOpacity = interpolate(
    frame,
    [0, fps, durationInFrames - (fps * 2.5), durationInFrames - (fps * 1.5)],
    [0, 1, 1, 0],
  );

  const postTitleOpacity = interpolate(
    frame,
    [fps * 2, fps * 2.5, durationInFrames - (fps * 2.5), durationInFrames - (fps * 1.5)],
    [0, 1, 1, 0],
  );

  return (
    <AbsoluteFill style={bg}>
      <AbsoluteFill style={content}>
        {/* Top Text */}
        <div style={{ transform: `translateY(-4.5em)` }}>
          <div style={{
            ...textStyle,
            opacity: preTitleOpacity,
            transform: `scale(${preTitleScale})`,
          }}>This is</div>
        </div>

        {/* Font List */}
        {fontTestList.map((item, index) => (
          <Sequence
            durationInFrames={fps * 4}
            from={fps + (index * 50)}
          >
            <FontItem family={item} />
          </Sequence>
        ))}

        {/* Bottom Text */}
        <div style={{ transform: `translateY(9em)` }}>
          <div style={{
            ...textStyle,
            opacity: postTitleOpacity,
          }}>
            <span>From </span>
            <span style={{
              fontWeight: '800',
              color: 'white',
            }}>Google Fonts</span>
          </div>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};