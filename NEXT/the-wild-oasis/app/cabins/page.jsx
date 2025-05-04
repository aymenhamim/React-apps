import Counter from "../components/Counter";
import Navigation from "../components/Navigation";

async function cabins() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  console.log(data);

  return (
    <div>
      <h1>Cabins Page</h1>

      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <p>There is {data.length} users.</p>
      <Counter />
    </div>
  );
}

export default cabins;
