import styles from "./ProductCard.module.css";
import Card from "../Card";

type ProductCardProps = {
  product: {
    id: string;
    imageSrc: string;
    imageAlt: string;
    title: string;
    price: string;
  };
};

function ProductCard({ product }: ProductCardProps) {
  return (
    <Card elevation={3}>
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
    </Card>
  );
}

export default ProductCard;
