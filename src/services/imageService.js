import { IMAGE_API_URL, IMAGE_API_KEY } from "../constants/constants";

export async function getRandomImage(query) {
  try {
    const response = await fetch(IMAGE_API_URL + `?per_page=1&query=${query}`, {
      headers: {
        Authorization: IMAGE_API_KEY,
      },
    });
    if (!response.ok)
      throw new Error(`HTTP error Pexels API! status: ${response.status}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching image data " + error);
    return null;
  }
}
