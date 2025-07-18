import Hero from "@/components/Hero";
import scaleImg from "public/scale.jpg";

export default function Scale() {
  return (
    <div>
      <Hero imgAlt="Scale page" imgData={scaleImg} title="Scale page" />
    </div>
  );
}
