import { Easing, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { unqoute } from "../utils/text";

let textStyle: React.CSSProperties = {
  fontSize: 128,
  textAlign: 'center',
  color: 'white',
  fontWeight: '500',
  textShadow: 'rgb(0 0 0 / 25%) 0px .075em .05em',
  lineHeight: 1.1,
};

let wrapper: React.CSSProperties = {
  position: 'relative',
  display: 'flex',
  textAlign: 'center',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
};

export const FontItem = ({ family }) => {
  const { durationInFrames, fps } = useVideoConfig();
  const frame = useCurrentFrame();

  const opacity = interpolate(
    frame,
    [0, 15, 50, 60],
    [0, 1, 1, 0]
  );

  const scale = interpolate(
    frame,
    [0, 20, 50, durationInFrames - fps],
    [0.2, 1, 1, 3],
    {
      easing: Easing.in(Easing.elastic()),
    }
  );

  return (
    <div style={wrapper}>
      <div style={{
        opacity,
        transform: `scale(${scale})`,
      }}>
        <div style={{
          ...textStyle,
          fontFamily: family,
        }}>{unqoute(family)}</div>
      </div>
    </div>
  );
};