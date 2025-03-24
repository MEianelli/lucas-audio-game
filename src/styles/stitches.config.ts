// stitches.config.ts
import { createStitches } from "@stitches/react";

export const cardDimentions = {
  width: 140,
  height: 125,
  widthPadding: 0,
  padding: 8,
};

cardDimentions.widthPadding = cardDimentions.width - cardDimentions.padding * 2;

const colors = {
  primary: "#0070f3",
  secondary: "#1A1A1A",
  background: "#F5F5F5",
  text: "#333333",
  muted: "#999999",
  white: "#FFFFFF",
  dirtWhite: "#F6F2F0",

  black: "#000",
  lightblack: "#111",

  green: "#00FF55",
  green2: "#08B73E",
  darkGreen: "#257D46",
  darkGreen2: "#09520F",
  brightGreen: "#00dd6e",

  red: "#EC364C",
  darkRed: "#bC364C",
  darkerRed: "#4D2A25",

  lightGrey: "#aaa",
  grey: "#333333",
  mediumGrey: "#D1D1D1",
  darkgrey: "#1A1A1A",

  pink: "#ED5987",
  brightPink: "#BD27B8",

  lightBlue: "#1A90CA",
  darkBlue: "#1A7DA4",

  yellow: "#FCFF6C",

  purple: "#37167F",
  darkPurple: "#0E0030",
};

export const { styled, css, theme, createTheme, globalCss, keyframes, getCssText, config } = createStitches({
  theme: {
    colors,
    fonts: {
      sans: "Bellota, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
      mono: 'Menlo, Monaco, Consolas, "Courier New", monospace',
    },
    space: {
      2: "2px",
      4: "4px",
      8: "8px",
      12: "12px",
      16: "16px",
      24: "24px",
      32: "32px",
    },
    sizes: {
      max: "1200px",
      container: "960px",
      cell: "640px",
      button: "40px",
      cardWidth: `${cardDimentions.width}px`,
      cardWidthPadding: `${cardDimentions.widthPadding}px`,
      cardHeight: `${cardDimentions.height}px`,
    },
    shadows: {
      ...colors,
    },
  },
  media: {
    xs: "(max-width: 480px)",
    s: "(max-width: 640px)",
    sm: "(max-width: 768px)",
    md: "(max-width: 1024px)",
    lg: "(max-width: 1200px)",
    xl: "(max-width: 1440px)",
  },
  utils: {
    marginX: (value: string | number) => ({
      marginLeft: value,
      marginRight: value,
    }),
    marginY: (value: string | number) => ({
      marginTop: value,
      marginBottom: value,
    }),
    paddingX: (value: string | number) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    paddingY: (value: string | number) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
  },
});

export const globalStyles = globalCss({
  "html, body": {
    margin: 0,
    padding: 0,
    fontFamily: "Parkinsans",
    backgroundColor: "$white",
    boxSizing: "border-box",
  },
  "*": {
    boxSizing: "border-box",
  },
});
