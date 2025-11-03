import s from "./Rating.module.css";
import { range } from "./lib";

type RatingProps = {
  rating: number;
};

function Rating({ rating }: RatingProps) {
  return (
    <div className={s.ratings}>
      {range(5).map((index) => (
        <span key={index}>{index < rating ? "★" : "☆"}</span>
      ))}
    </div>
  );
}

export default Rating;
