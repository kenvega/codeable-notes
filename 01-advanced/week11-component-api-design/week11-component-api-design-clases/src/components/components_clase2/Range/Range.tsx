import { useId } from "react";
import s from "./Range.module.css";

type RangeProps = {
  label: string;
  id?: string;
  min: number;
  max: number;
  value: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Range = ({ label, id, min, max, value, onChange }: RangeProps) => {
  const generatedId = useId();
  const appliedId = id || generatedId;
  return (
    <div className={s.wrapper}>
      <label htmlFor={appliedId} className={s.label}>
        {label}
      </label>
      <input
        type="range"
        id={appliedId}
        className={s.slider}
        min={min}
        max={max}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Range;
