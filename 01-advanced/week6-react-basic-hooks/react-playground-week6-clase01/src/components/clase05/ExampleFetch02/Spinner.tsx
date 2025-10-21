import { Loader, type IconProps } from "react-feather";

import styles from "./Spinner.module.css";

type SpinnerProps = {
  color?: IconProps['color'],
  size?: IconProps['size']
}

const Spinner = ({ color, size }: SpinnerProps) => {
  return (
    <div className={styles.wrapper}>
      <Loader color={color} size={size} />
    </div>
  );
};

export default Spinner;