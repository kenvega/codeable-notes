import { useState } from "react";
import s from "./Gallery.module.css";
import clsx from "clsx";

type GalleryProps = {
  apartment: {
    id: string;
    title: string;
    description: string;
    photos: string[];
    rating: number;
  };
};

function Gallery({ apartment }: GalleryProps) {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  return (
    <div className={s["photos-wrapper"]}>
      <div className={s["primary-photo"]}>
        <img src={apartment.photos[currentPhotoIndex]} alt="" />
      </div>
      <div className={s.thumbnails}>
        {apartment.photos.map((photoSrc, index) => (
          <button
            key={photoSrc}
            onClick={() => setCurrentPhotoIndex(index)}
            className={clsx(
              s.thumbnail,
              index === currentPhotoIndex && s.active
            )}
          >
            <img src={photoSrc} alt="" />
          </button>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
