export function RandomJoke({ joke, topicJoke, isLoading, error }) {
  if (error) {
    const errorMessage = error.message || "Error...";
    return <p>{errorMessage}</p>;
  }

  return (
    <>
      {isLoading ? (
        <p>Please wait a moment...</p>
      ) : (
        joke && (
          <>
            <p>Topic: {topicJoke}</p>
            <p>Joke: {joke}</p>
          </>
        )
      )}
    </>
  );
}
