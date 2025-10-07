import { useEffect } from "react";
import { getRandomImage } from "../services";
import { mappedImageData } from "../logic";
import { IMAGE_NOT_FOUND } from "../constants/constants";

export function useRandomImage(
  longestWord,
  setImageUrl,
  setImageDescription,
  setPhotographerName,
  setIsLoading
) {
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const getNewImage = async () => {
      try {
        if (!longestWord) return;
        const dataImage = await getRandomImage(longestWord, signal);
        const newMappedImage = mappedImageData(dataImage);
        if (newMappedImage) {
          setImageUrl(newMappedImage.imageUrl);
          setImageDescription(newMappedImage.imageDescription);
          setPhotographerName(newMappedImage.photographerName);
        } else {
          setImageUrl(IMAGE_NOT_FOUND);
          setImageDescription("Image not found");
        }
      } catch (error) {
        console.error("Error: " + error);
      } finally {
        setIsLoading(false);
      }
    };
    getNewImage();
    return () => {
      controller.abort();
    };
  }, [
    longestWord,
    setImageUrl,
    setImageDescription,
    setPhotographerName,
    setIsLoading,
  ]);
}
