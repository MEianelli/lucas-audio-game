export type Tables = "media" | "users" | "cards";

export type CardState = "ok" | "nok" | "neutral";

export type TBuckets = "audio" | "images";

export type TScreen = "login" | "content" | "";

export type LoginState = "login" | "register" | "logged" | "registered";

export type TStatus = "unavailable" | "unexistant" | "wrongPass" | "empty" | "logged" | "registered" | "error" | "";

interface ResponseError {
  res: Exclude<TStatus, "logged" | "registered">;
}

interface ResponseData {
  res: "logged" | "registered";
  user: User;
}

export type Response = ResponseError | ResponseData;

export type User = {
  id: number;
  name: string;
  pass: string;
  lifes: number;
  score: number;
  hitids: number[];
  missids: number[];
  currentstreak: number;
  maxstreak: number;
  winrate: number;
};

export type Base = {
  id: number;
  created_at: string;
};

export type Categories = "movie" | "music";
export interface Media extends Base {
  title: string;
  tags: string[];
  wrongs: string[];
  categorie: Categories;
}

export interface Card {
  media_id: number;
  title: string;
  card_id: number;
  options: string[];
  image_src: string;
  audio_src: string;
}

export interface UploadCard {
  media_id: number;
  image_src: string;
  audio_src: string;
}

export interface CardDTO {
  media_id: number;
  title: string;
  card_id: number;
  wrongs: string[];
  image_src: string;
  audio_src: string;
}

export interface RankData {
  top5streak: { name: string; score: number; maxstreak: number }[];
  top5score: { name: string; score: number; maxstreak: number }[];
  userWinRatePos: number;
  userScorePos: number;
  userStreakPos: number;
}

type PlayModes = "always" | "hover" | "click" | "manual";
export interface PowerGlitchOptions {
  optimizeSeo: boolean;
  html?: string;
  createContainers: boolean;
  playMode: PlayModes;
  hideOverflow: boolean;
  timing: {
    duration: number; //time in ms 1 to inf
    iterations: number; //repeat 1 to 60
    easing?: string; //like css "ease-out"
  };
  glitchTimeSpan:
    | false
    | {
        start: number; //0 to 100%
        end: number; //0 to 100%
      };
  shake:
    | false
    | {
        velocity: number; // 1 to 60
        amplitudeX: number; //0 to 200%
        amplitudeY: number; //0 to 200%
      };
  slice: {
    count: number; // 1 to 60
    velocity: number; // 1 to 60
    minHeight: number; //1 to 100%
    maxHeight: number; //1 to 100%
    hueRotate: boolean;
  };
  pulse:
    | false
    | {
        scale: number; // 1 to 6
      };
}
