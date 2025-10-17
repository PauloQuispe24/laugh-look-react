import type { Dispatch, SetStateAction } from "react";
import type { MappedJoke, MappedImage } from "./index.ts";

export interface UseJokeAppLogic {
  jokeData: MappedJoke | null;
  longestWord: string | null;
  imageData: MappedImage | null;
  isWelcomeScreen: boolean;
  isLoading: boolean;
  error: Error | null;
  getNewJoke: () => void;
}

export interface UseRandomJokeProps {
  resetStates: () => void;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setJokeData: Dispatch<SetStateAction<MappedJoke | null>>;
  setIsWelcomeScreen: Dispatch<SetStateAction<boolean>>;
  setError: Dispatch<SetStateAction<Error | null>>;
}
