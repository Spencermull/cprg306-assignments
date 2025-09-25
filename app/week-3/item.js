


export default function Item({ name, quantity, category }) {
  return (
    <main className="p-4 max-w-xl mx-auto">
      <ul>
        <li className = "border pt-2 rounded font-medium bg-gradient-to-br from-blue-400 to-blue-900">
          <h3>{name}</h3>
          <p> Quantity: {quantity}</p>
          <p> Category: {category}</p>
        </li>
      </ul>
    </main>
  );
}
