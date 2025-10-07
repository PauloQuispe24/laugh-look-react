import { useCallback } from "react";
import { getRandomJoke } from "../services";
import { mappedJokeData } from "../logic/jokeMapper";

export function useRandomJoke(
  resetStates,
  setIsLoading,
  setJoke,
  setTopicJoke,
  setError
) {
  const getNewJoke = useCallback(async () => {
    resetStates();
    setIsLoading(true);
    try {
      const dataJoke = await getRandomJoke();
      const newMappedJoke = mappedJokeData(dataJoke);
      if (!newMappedJoke)
        throw new Error(
          `Sorry, we couldn’t fetch a joke at the moment. Please try again later.`
        );
      setJoke(newMappedJoke.jokeText);
      setTopicJoke(newMappedJoke.topicJoke);
    } catch (error) {
      console.error(error);
      setError(error);
      setIsLoading(false);
    }
  }, [resetStates, setIsLoading, setJoke, setTopicJoke, setError]);
  return [getNewJoke];
}
