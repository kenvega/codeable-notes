type ContactProps = {
  name: string;
  isOnline: boolean;
}

export default function Contact({ name, isOnline }: ContactProps) {
  let prefix; // inicia con valor 'undefined'
 
  if (isOnline) {
    prefix = <div className="green-dot" />; // le damos valor si se cumple la condición
  }
 
  return (
    <li className="contact">
      {prefix}
      {name}
    </li>
  );
}