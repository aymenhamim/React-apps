import { auth, signOut } from "@/auth";
import MobileNavigation from "@/components/navigation/navbar/MobileNavigation";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";

const Home = async () => {
  const session = await auth();
  console.log(session);
  return <div className="w-dvw h-dvh flex justify-center"></div>;
};

export default Home;
