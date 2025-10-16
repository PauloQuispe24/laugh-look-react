import { useEffect, type Dispatch, type SetStateAction } from "react";
import { calculateLongestWord } from "../logic/index.ts";
import type { MappedJoke } from "../types/index.ts";

export function useLongestWord(
  joke: MappedJoke | null,
  setLongestWord: Dispatch<SetStateAction<string | null>>
): void {
  useEffect(() => {
    if (!joke) return;
    const newLongestWord: string = calculateLongestWord(joke.jokeText);
    setLongestWord(newLongestWord);
  }, [joke, setLongestWord]);
}
