import styles from "./PokemonCard.module.css";

export type Pokemon = {
  id: number;
  image_url: string
  name: string
  types: string[]
}

// Omit es un construct type
// puedes usarlo para crear otros types a partir del que ya tienes
type PokemonCardProps = Omit<Pokemon, 'id' | 'image_url'> & {
  imageUrl: Pokemon['image_url']
}

function PokemonCard({ imageUrl, name, types }: PokemonCardProps) {
  return (
    <div className={styles.card}>
      <img src={imageUrl} alt={name} className={styles.image} />
      <p className={styles.name}>{name}</p>
      <p className={styles.type}>({types.join(", ")})</p>
    </div>
  );
}

export default PokemonCard;
