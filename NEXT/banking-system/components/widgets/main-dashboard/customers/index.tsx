import CustomersList from "./customers-list";

const users = [
  {
    id: 1,
    name: "soufiane hamim",
    email: "soufianehamim@gmail.com",
    email_verified_at: null,
    created_at: new Date("2025-10-10T11:18:44.000000Z"),
    updated_at: new Date("2025-10-10T11:18:44.000000Z"),
    totalSpent: 0.0,
    image: "images/users/soufiane.jpg",
  },
  {
    id: 2,
    name: "aymen hamim",
    email: "aymenhamim@gmail.com",
    email_verified_at: null,
    // created_at: "2025-10-10T11:18:44.000000Z",
    // updated_at: "2025-10-10T19:53:12.000000Z",
    created_at: new Date("2025-10-10T11:18:44.000000Z"),
    updated_at: new Date("2025-10-10T11:18:44.000000Z"),
    totalSpent: 250.0,
    image: "images/users/aymen.jpg",
  },
  {
    id: 3,
    name: "khadija hamim",
    email: "khadijahamim@gmail.com",
    email_verified_at: null,
    // created_at: "2025-10-10T11:18:45.000000Z",
    // updated_at: "2025-10-10T11:18:45.000000Z",
    created_at: new Date("2025-10-10T11:18:44.000000Z"),
    updated_at: new Date("2025-10-10T11:18:44.000000Z"),
    totalSpent: 0.0,
    image: "images/users/khadija.jpg",
  },
  {
    id: 4,
    name: "abdessamad hamim",
    email: "abdessamadhamim@gmail.com",
    email_verified_at: null,
    // created_at: "2025-10-10T11:18:45.000000Z",
    // updated_at: "2025-10-10T11:18:45.000000Z",
    created_at: new Date("2025-10-10T11:18:44.000000Z"),
    updated_at: new Date("2025-10-10T11:18:44.000000Z"),
    totalSpent: 0.0,
    image: "images/users/abdessamad.jpg",
  },
];

function Customers() {
  return (
    <div>
      <p className="font-bold">Customers</p>
      {/* <CustomersList users={users} /> */}
      <CustomersList />
    </div>
  );
}

export default Customers;
