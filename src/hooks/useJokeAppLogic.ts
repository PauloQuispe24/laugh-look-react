import { useState, useCallback } from "react";
import { useRandomJoke, useLongestWord, useRandomImage } from "./index.ts";
import type {
  MappedJoke,
  MappedImage,
  UseJokeAppLogic,
} from "../types/index.ts";

export function useJokeAppLogic(): UseJokeAppLogic {
  const [jokeData, setJokeData] = useState<MappedJoke | null>(null);
  const [longestWord, setLongestWord] = useState<string | null>(null);
  const [imageData, setImageData] = useState<MappedImage | null>(null);
  const [isWelcomeScreen, setIsWelcomeScreen] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const resetStates = useCallback(() => {
    setJokeData(null);
    setLongestWord(null);
    setImageData(null);
    setError(null);
    setIsLoading(true);
  }, []);

  const [getNewJoke] = useRandomJoke({
    resetStates,
    setIsLoading,
    setJokeData,
    setIsWelcomeScreen,
    setError,
  });
  useLongestWord(jokeData, setLongestWord);
  useRandomImage(longestWord, setImageData, setIsLoading);

  return {
    jokeData,
    longestWord,
    imageData,
    isWelcomeScreen,
    isLoading,
    error,
    getNewJoke,
  };
}
