import { useEffect } from "react";
import { calculateLongestWord } from "../logic";

export function useLongestWord(joke, setLongestWord) {
  useEffect(() => {
    if (!joke) return;
    const newLongestWord = calculateLongestWord(joke);
    setLongestWord(newLongestWord);
  }, [joke, setLongestWord]);
}
