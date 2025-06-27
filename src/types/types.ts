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
  scoreweek: number;
  hitids: number[];
  missids: number[];
  currentstreak: number;
  maxstreak: number;
  maxstreakweek: number;
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
  card_id: number;
  options: string[];
  image_src: string;
  audio_src: string;
  archive: string;
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

export interface RankDataWrapper {
  all: RankData;
  week: RankData;
}
export interface RankData {
  top5streak: { name: string; score: number; maxstreak: number }[];
  top5score: { name: string; score: number; maxstreak: number }[];
  userScorePos: number;
  userStreakPos: number;
}
