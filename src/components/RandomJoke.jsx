import { Loader } from "./";

export function RandomJoke({
  joke,
  topicJoke,
  longestWord,
  isWelcomeScreen,
  isLoading,
  error,
}) {
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
    const errorMessage = error?.message || "Error...";
    return <p className="error-message">{errorMessage}</p>;
  }

  return (
    <>
      {joke && (
        <section className="joke-card">
          <p className="joke-card__item">
            <span>Topic:</span> {topicJoke}
          </p>
          <p className="joke-card__item">
            <span>Joke:</span> {joke}
          </p>
          <p className="joke-card__item">
            <span>Longest Word:</span> {longestWord}
          </p>
        </section>
      )}
    </>
  );
}
