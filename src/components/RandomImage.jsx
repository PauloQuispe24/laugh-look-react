export function RandomImage({
  imageUrl,
  imageDescription,
  photographerName,
}) {
  return (
    <>
      {imageUrl && (
        <>
          <img src={imageUrl} alt={imageDescription} title={imageDescription} />
          {photographerName && (
            <>
              <p>Photographer: {photographerName}</p>
              <a href="https://www.pexels.com" target="_blank">
                Photos provided by Pexels
              </a>
              <p>----- PEXELS -----</p>
            </>
          )}
        </>
      )}
    </>
  );
}
