export function mappedJokeData(apiData) {
  if (!apiData?.joke) return;
  const mappedJoke = {
    jokeText: apiData.joke,
    topicJoke: apiData.category,
  };
  return mappedJoke;
}
