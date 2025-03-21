export type Tables = "media" | "users" | "cards";

export type CardState = "ok" | "nok" | "neutral";

export type TBuckets = "audio" | "images";

export type TScreen = "login" | "content" | "";

export type LoginState = "login" | "register" | "logged" | "registered";

export type TDifficulty = 0 | 1 | 2 | 3 | 4;

export type TStatus =
  | "unavailable"
  | "unexistant"
  | "wrongPass"
  | "empty"
  | "logged"
  | "registered"
  | "error"
  | "";

export interface ResponseError {
  res: Exclude<TStatus, "logged" | "registered">;
}

export interface ResponseData {
  res: "logged" | "registered";
  user: User;
}

export type Response = ResponseError | ResponseData;

export type User = {
  id: number;
  name: string;
  pass: string;
  hitids: number[];
  missids: string[];
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

export interface Card extends Base {
  media_id: number;
  media: { title: string };
  audio_src: string;
  image_src: string;
  options: string[];
}

export interface CardDTO {
  media_id: number;
  audio_src: string;
  image_src: string;
  options: string[];
}

export interface RankData {
  top5winrate: { name: string; winrate: number }[];
  top5streak: { name: string; maxstreak: number }[];
  userWinRatePos: number;
  userStreakPos: number;
}
