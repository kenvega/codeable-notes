import styles from "./BadProductCard.module.css";

type BadProductCardProps = {
  product: {
    id: string;
    imageSrc: string;
    imageAlt: string;
    title: string;
    price: string;
  };
};

function BadProductCard({ product }: BadProductCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.wrapper}>
        <img
          className={styles.productPhoto}
          alt={product.imageAlt}
          src={product.imageSrc}
        />
        <h2>{product.title}</h2>
        <p className={styles.price}>${product.price}</p>
        <button>Add to cart</button>
      </div>
    </div>
  );
}

export default BadProductCard;
