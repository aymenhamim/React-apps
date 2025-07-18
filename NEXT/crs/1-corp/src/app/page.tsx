import Hero from "@/components/Hero";
import homeImg from "public/home.jpg";

export default function Home() {
  return (
    <div>
      <Hero imgAlt="Home page" imgData={homeImg} title="Home Page" />
    </div>
  );
}
