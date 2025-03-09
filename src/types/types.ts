export type Tables = "audios" | "images" | "movies" | "users" | "guesses";

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

export type TGuess = {
  audio_src: string | null;
  correct_answers: string | null;
  image_src: string | null;
  difficulty: TDifficulty;
} & Base;

export type TMoviesDTO = {
  correct: string;
  wrongs: string[];
  tags: string[];
};

export type TMovies = {
  difficulty: number;
} & TMoviesDTO &
  Base;

export type TAudiosDTO = {
  movie_id: number;
  src: string;
};

export type TAudios = { difficulty: number } & Base & TAudiosDTO;

export type TImagesDTO = {
  movie_id: number;
  src: string;
};

export type TImages = Base & TImagesDTO;

export type User = {
  id: number;
  name: string;
  pass: string;
  hitids?: number[];
  missids?: number[];
  ignoreids?: number[];
  lifes?: number;
  score?: number;
  lastheartgain?: number;
};

export type Base = {
  id: number;
  created_at: string;
};

export interface RndMovie {
  movie_id: number;
  movie_data: MovieData;
  audio_data: AudioData;
  image_data: ImageData;
}

export interface MovieData {
  id: number;
  tags: string[];
  wrongs: string[];
  correct: string;
  created_at: string;
  difficulty: number;
}

export interface AudioData {
  id: number;
  src: string;
  movie_id: number;
  created_at: string;
  difficulty: TDifficulty;
}

export interface ImageData {
  id: number;
  src: string;
  movie_id: number;
  created_at: string;
}
