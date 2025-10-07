import { useState, useCallback } from "react";
import { useRandomJoke, useLongestWord, useRandomImage } from "./";

export function useJokeAppLogic() {
  const [joke, setJoke] = useState(null);
  const [topicJoke, setTopicJoke] = useState(null);
  const [longestWord, setLongestWord] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [imageDescription, setImageDescription] = useState(null);
  const [photographerName, setPhotographerName] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const resetStates = useCallback(() => {
    setJoke(null);
    setTopicJoke(null);
    setLongestWord(null);
    setImageUrl(null);
    setImageDescription(null);
    setPhotographerName(null);
    setError(null);
  }, []);

  const [getNewJoke] = useRandomJoke(
    resetStates,
    setIsLoading,
    setJoke,
    setTopicJoke,
    setError
  );
  useLongestWord(joke, setLongestWord);
  useRandomImage(
    longestWord,
    setImageUrl,
    setImageDescription,
    setPhotographerName,
    setIsLoading
  );

  return {
    joke,
    topicJoke,
    imageUrl,
    imageDescription,
    photographerName,
    isLoading,
    error,
    getNewJoke,
  };
}
