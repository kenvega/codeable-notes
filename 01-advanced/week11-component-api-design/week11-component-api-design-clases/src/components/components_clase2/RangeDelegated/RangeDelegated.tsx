import { useId } from "react";
import s from "./RangeDelegated.module.css";

type RangeDelegatedProps = {
  label: string;
  id?: string;
  min: number;
  max: number;
  value: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  delegated?: React.InputHTMLAttributes<HTMLInputElement>;
};

const RangeDelegated = ({
  label,
  id,
  min,
  max,
  value,
  onChange,
  ...delegated
}: RangeDelegatedProps) => {
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
        {...delegated}
      />
    </div>
  );
};

export default RangeDelegated;
