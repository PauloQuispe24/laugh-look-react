export function RandomImage({ imageUrl, imageDescription, photographerName }) {
  return (
    <>
      {imageUrl && (
        <section className="image-card">
          <img
            className="image-card__img"
            src={imageUrl}
            alt={imageDescription}
            title={imageDescription}
          />
          {photographerName && (
            <section className="image-info-box">
              <p className="image-info-box__item">
                <span>Description:</span> {imageDescription}
              </p>
              <p className="image-info-box__item">
                <span>Photographer:</span> {photographerName}
              </p>
              <a
                className="image-info-box__item image-info-box__item--link"
                href="https://www.pexels.com"
                target="_blank"
              >
                Photos provided by PEXELS
              </a>
            </section>
          )}
        </section>
      )}
    </>
  );
}
