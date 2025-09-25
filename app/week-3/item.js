


export default function Item({ name, quantity, category }) {
  return (
    <main>
      <ul>
        <li>
          <h3>{name}</h3>
          <p> Quantity: {quantity}</p>
          <p> Category: {category}</p>
        </li>
      </ul>
    </main>
  );
}
