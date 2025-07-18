import Hero from "@/components/Hero";
import reliabilityImg from "public/reliability.jpg";

export default function Reliability() {
  return (
    <div>
      <Hero
        imgAlt="Reliability page"
        imgData={reliabilityImg}
        title="Reliability page"
      />
    </div>
  );
}
