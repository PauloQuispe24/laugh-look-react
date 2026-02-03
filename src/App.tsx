import type { ReactElement } from "react";
import { RandomJoke, RandomImage } from "./components/index.ts";
import { useJokeAppLogic } from "./hooks/index.ts";
import type { UseJokeAppLogic } from "./types/index.ts";

export function App(): ReactElement {
  const {
    jokeData,
    longestWord,
    imageData,
    isWelcomeScreen,
    isLoading,
    error,
    getNewJoke,
  }: UseJokeAppLogic = useJokeAppLogic();

  return (
    <main className="app-container">
      <header>
        <h1 className="app-title">Random Jokes App</h1>
      </header>
      <button
        className="btn-joke"
        onClick={getNewJoke}
        disabled={isLoading}
        aria-live="polite"
        aria-busy={isLoading}
      >
        {isLoading
          ? "Loading..."
          : isWelcomeScreen
            ? "Get Joke"
            : "Get Another Joke"}
      </button>
      <RandomJoke
        jokeData={jokeData}
        longestWord={longestWord}
        isWelcomeScreen={isWelcomeScreen}
        isLoading={isLoading}
        error={error}
      />
      <RandomImage imageData={imageData} />
    </main>
  );
}
