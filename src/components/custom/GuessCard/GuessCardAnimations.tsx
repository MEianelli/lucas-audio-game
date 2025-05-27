import { keyframes } from "@/styles/stitches.config";

export const pulseBrilho = keyframes({
  "0%, 10%, 20%, 30%, 40%, 50%, 60%, 70%, 80%, 90%, 100%": {
    opacity: "50%",
  },
  "25%, 35%, 45%, 75%": {
    opacity: "55%",
  },
  "15%, 65%, 85%": {
    opacity: "52%",
  },
  "5%, 55%, 95%": {
    opacity: "60%",
  },
});

export const shadowSpread = keyframes({
  "0%": {
    boxShadow: "0px 0px 10px 0px #120226 inset, 0px 0px 10px 5px #120226",
  },
  "100%": {
    boxShadow: "0px 0px 10px 150px #120226 inset, 0px 0px 10px 5px #120226",
  },
});

export const startShadow = keyframes({
  "0%": {
    boxShadow: "0px 0px 10px 150px #120226 inset, 0px 0px 10px 5px #120226",
  },
  "100%": {
    boxShadow: "0px 0px 10px 0px #120226 inset, 0px 0px 10px 0px #120226",
  },
});
