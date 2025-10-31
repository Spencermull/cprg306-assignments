export default function Item({ name, quantity, category, onSelect }) {
  return (
    <main className="p-4 max-w-md ml-0">
      <ul>
        <li className="text-left border pt-2 rounded font-medium bg-gradient-to-br from-blue-400 to-blue-900" onClick={onSelect}>
          <h3>{name}</h3>
          <p> Quantity: {quantity}</p>
          <p> Category: {category}</p>
        </li>
      </ul>
    </main>
  );
}
