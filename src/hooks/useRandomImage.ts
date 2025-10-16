import { useEffect, type Dispatch, type SetStateAction } from "react";
import { getRandomImage } from "../services/index.ts";
import { mappedImageData } from "../logic/index.ts";
import { IMAGE_NOT_FOUND } from "../constants/index.ts";
import type {
  MappedImage,
  ImageApiSuccessResponse,
  ImageApiNoResultsResponse,
} from "../types/index.ts";

export function useRandomImage(
  longestWord: string | null,
  setImageData: Dispatch<SetStateAction<MappedImage | null>>,
  setIsLoading: Dispatch<SetStateAction<boolean>>
): void {
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const getNewImage = async () => {
      try {
        if (!longestWord) return;
        const data: ImageApiSuccessResponse | ImageApiNoResultsResponse | null =
          await getRandomImage(longestWord, signal);
        const newMappedImage: MappedImage | undefined = mappedImageData(data);
        newMappedImage
          ? setImageData({
              imageUrl: newMappedImage.imageUrl,
              imageDescription: newMappedImage.imageDescription,
              photographerName: newMappedImage.photographerName,
            })
          : setImageData({
              imageUrl: IMAGE_NOT_FOUND,
              imageDescription: "Image not found",
              photographerName: null,
            });
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
  }, [longestWord, setImageData, setIsLoading]);
}
