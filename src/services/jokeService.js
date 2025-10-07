import { JOKE_API_URL } from "../constants/constants";

export async function getRandomJoke() {
  try {
    const response = await fetch(JOKE_API_URL);
    if (!response.ok)
      throw new Error(`HTTP error Joke API! status: ${response.status}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching joke data " + error);
    return null;
  }
}
