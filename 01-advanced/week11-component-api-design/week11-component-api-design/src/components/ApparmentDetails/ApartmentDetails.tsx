import s from "./ApartmentDetails.module.css";
import Gallery from "../Gallery";
import Rating from "../Rating";

type ApartmentDetailsProps = {
  apartment: {
    id: string;
    title: string;
    description: string;
    photos: string[];
    rating: number;
  };
};

function ApartmentDetails({ apartment }: ApartmentDetailsProps) {
  return (
    <div className={s.wrapper}>
      <Gallery apartment={apartment} />
      <h2 className={s.title}>{apartment.title}</h2>
      <Rating rating={apartment.rating} />
      <p className={s.description}>{apartment.description}</p>
    </div>
  );
}

export default ApartmentDetails;
