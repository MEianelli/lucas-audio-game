// stitches.config.ts
import { createStitches } from "@stitches/react";

export const {
  styled,
  css,
  theme,
  createTheme,
  globalCss,
  keyframes,
  getCssText,
  config,
} = createStitches({
  theme: {
    colors: {
      primary: "#0070f3",
      secondary: "#1A1A1A",
      background: "#F5F5F5",
      text: "#333333",
      muted: "#999999",
      white: "#FFFFFF",
      black: "#000",
      green: "#0BAE6B",
      red: "#EC364C",
      darkRed: "#bC364C",
      grey: "#333",
      lightGrey: "#aaa",
      pink: "#B82ABE",
    },
    fonts: {
      sans: "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
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
    },
    radii: {
      0: "0px",
      4: "4px",
      8: "8px",
      16: "16px",
      full: "9999px",
    },
    shadows: {
      sm: "0px 2px 5px rgba(0, 0, 0, 0.1)",
      md: "0px 4px 10px rgba(0, 0, 0, 0.15)",
      lg: "0px 10px 20px rgba(0, 0, 0, 0.2)",
    },
    zIndices: {
      dropdown: 1000,
      modal: 1100,
      toast: 1200,
    },
  },
  media: {
    xs: "(max-width: 480px)",
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
    size: (value: string | number) => ({
      width: value,
      height: value,
    }),
  },
});

export const globalStyles = globalCss({
  "html, body": {
    margin: 0,
    padding: 0,
    fontFamily: "$sans",
    backgroundColor: "$white",
    boxSizing: "border-box",
  },
  "*": {
    boxSizing: "inherit",
  },
});
