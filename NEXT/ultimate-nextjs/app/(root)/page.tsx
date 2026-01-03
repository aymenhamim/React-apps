import { auth } from "@/auth";

const Home = async () => {
  const session = await auth();
  console.log(session);
  return <div className="w-dvw h-dvh flex justify-center"></div>;
};

export default Home;
