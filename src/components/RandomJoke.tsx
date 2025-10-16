import type { ReactElement } from "react";
import { Loader } from "./index.ts";
import type { RandomJokeProps } from "../types/index.ts";

export function RandomJoke({
  jokeData,
  longestWord,
  isWelcomeScreen,
  isLoading,
  error,
}: RandomJokeProps): ReactElement {
  if (isWelcomeScreen) {
    return (
      <p className="welcome-message">
        Ready to laugh? Hit the button and get a random joke!
      </p>
    );
  }

  if (isLoading) {
    return (
      <>
        <Loader />
        <p className="waiting-message">Please wait a moment...</p>
      </>
    );
  }

  if (error) {
    const errorMessage = error.message || "Error...";
    return <p className="error-message">{errorMessage}</p>;
  }

  return (
    <>
      {jokeData && (
        <section className="joke-card">
          <p className="joke-card__item">
            <span>Topic:</span> {jokeData.topicJoke}
          </p>
          <p className="joke-card__item">
            <span>Joke:</span> {jokeData.jokeText}
          </p>
          <p className="joke-card__item">
            <span>Longest Word:</span> {longestWord}
          </p>
        </section>
      )}
    </>
  );
}
