import type { ReactElement } from "react";
import type { RandomImageProps } from "../types/index.ts";

export function RandomImage({
  imageData,
}: RandomImageProps): ReactElement {
  return (
    <>
      {imageData && (
        <section className="image-card">
          <img
            className="image-card__img"
            src={imageData.imageUrl}
            alt={imageData.imageDescription}
            title={imageData.imageDescription}
          />
          {imageData.photographerName && (
            <section className="image-info-box">
              <p className="image-info-box__item">
                <span>Description:</span> {imageData.imageDescription}
              </p>
              <p className="image-info-box__item">
                <span>Photographer:</span> {imageData.photographerName}
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
