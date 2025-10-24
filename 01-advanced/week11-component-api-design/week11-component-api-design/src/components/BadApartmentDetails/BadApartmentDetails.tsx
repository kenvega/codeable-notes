import * as React from "react";
import s from "./BadApartmentDetails.module.css";
import clsx from "clsx";
import { range } from "./lib";

type BadApartmentDetailsProps = {
  apartment: {
    id: string;
    title: string;
    description: string;
    photos: string[];
    rating: number;
  };
};

function BadApartmentDetails({ apartment }: BadApartmentDetailsProps) {
  const [currentPhotoIndex, setCurrentPhotoIndex] = React.useState(0);

  return (
    <div className={s.wrapper}>
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
      <h2 className={s.title}>{apartment.title}</h2>
      <div className={s.ratings}>
        {range(5).map((index) => (
          <span key={index}>{index < apartment.rating ? "★" : "☆"}</span>
        ))}
      </div>
      <p className={s.description}>{apartment.description}</p>
    </div>
  );
}

export default BadApartmentDetails;
