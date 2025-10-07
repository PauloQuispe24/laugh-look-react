export function mappedImageData(apiData) {
  if (!apiData?.photos[0]?.src.original) return;
  const firstPhoto = apiData.photos[0];
  const mappedImage = {
    imageUrl: firstPhoto.src.original,
    imageDescription: firstPhoto.alt,
    photographerName: firstPhoto.photographer,
  };
  return mappedImage;
}
