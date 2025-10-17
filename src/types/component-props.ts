import type { MappedJoke, MappedImage } from "./index.ts";

export interface RandomJokeProps {
  jokeData: MappedJoke | null;
  longestWord: string | null;
  isWelcomeScreen: boolean;
  isLoading: boolean;
  error: Error | null;
}

export interface RandomImageProps {
  imageData: MappedImage | null;
}
