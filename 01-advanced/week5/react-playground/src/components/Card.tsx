type CardProps = {
  name: string;
  position: string;
}

export default function Card(props: CardProps) {
  return (
    <li>
      <h2>{props.name}</h2>
      <p>{props.position}</p>
    </li>
  )
}