import s from "./ProductCard.module.css";

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
    <div className={s.card}>
      <div className={s.wrapper}>
        <img
          className={s.productPhoto}
          alt={product.imageAlt}
          src={product.imageSrc}
        />
        <h2>{product.title}</h2>
        <p className={s.price}>${product.price}</p>
        <button>Add to cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
