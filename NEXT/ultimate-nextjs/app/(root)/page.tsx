import { auth } from "@/auth";

const Home = async () => {
  const session = await auth();
  console.log(session);
  return (
    <div>
      <h2 className="text-xl font-bold">Welcome to the world of Next.js</h2>
    </div>
  );
};

export default Home;
