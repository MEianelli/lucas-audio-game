/// <reference types="react-scripts" />
declare module "*.mp3" {
  const src: string;
  export default src;
}
declare module "*.wav"; // '*.wav' if you're using wav format
