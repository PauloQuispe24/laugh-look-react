import { useCallback } from "react";
import { getRandomJoke } from "../services/index.ts";
import { mappedJokeData } from "../logic/index.ts";
import type {
  JokeApiSuccessResponse,
  MappedJoke,
  UseRandomJokeProps,
} from "../types/index.ts";

export function useRandomJoke({
  resetStates,
  setIsLoading,
  setJokeData,
  setIsWelcomeScreen,
  setError,
}: UseRandomJokeProps): [() => void] {
  const getNewJoke = useCallback(async () => {
    setIsWelcomeScreen(false);
    resetStates();
    try {
      const data: JokeApiSuccessResponse | null = await getRandomJoke();
      const newMappedJoke: MappedJoke | undefined = mappedJokeData(data);
      if (!newMappedJoke)
        throw new Error(
          `Sorry, we couldn’t fetch a joke at the moment. Please try again later.`
        );
      setJokeData(newMappedJoke);
    } catch (error) {
      console.error(error);
      const errorToSet: Error =
        error instanceof Error
          ? error
          : new Error("An unknown error occurred while fetching the joke.");
      setError(errorToSet);
      setIsLoading(false);
    }
  }, [resetStates, setIsLoading, setJokeData, setIsWelcomeScreen, setError]);
  return [getNewJoke];
}
