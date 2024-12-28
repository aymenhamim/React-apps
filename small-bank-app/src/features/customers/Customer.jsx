import { useSelector } from "react-redux";

function Customer() {
  const custmer = useSelector((store) => store.customer.fullName) || "Guest";
  return <h2>👋 Welcome, {custmer}</h2>;
}

export default Customer;
