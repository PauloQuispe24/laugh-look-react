import type {
  ImageApiSuccessResponse,
  ImageApiNoResultsResponse,
  MappedImage,
  PexelsPhoto,
} from "../types/index.ts";

export function mappedImageData(
  apiData: ImageApiSuccessResponse | ImageApiNoResultsResponse | null
): MappedImage | undefined {
  const firstPhoto: PexelsPhoto | undefined = apiData?.photos[0];
  if (!firstPhoto?.src?.original) return;
  const mappedImage: MappedImage = {
    imageUrl: firstPhoto.src.original,
    imageDescription: firstPhoto.alt || "No description",
    photographerName: firstPhoto.photographer || "No photographer",
  };
  return mappedImage;
}
