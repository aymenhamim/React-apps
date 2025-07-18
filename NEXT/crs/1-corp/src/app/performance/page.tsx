import Hero from "@/components/Hero";
import performanceImg from "public/performance.jpg";

export default function Performance() {
  return (
    <div>
      <Hero
        imgAlt="Performance page"
        imgData={performanceImg}
        title="Performance page"
      />
    </div>
  );
}
