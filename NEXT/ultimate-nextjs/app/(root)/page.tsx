import Link from "next/link";

import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";

async function Home() {
  return (
    <>
      <section className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Button
          className="primary-gradient text-light-900! min-h-[46px] px-4 py-3"
          asChild
        >
          <Link href={ROUTES.ASK_QUESTION} className="max-sm:w-full">
            Ask a Question
          </Link>
        </Button>
      </section>
      <section className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        LocalSearch
      </section>
      HomeFilter
      <div className="mt-10 flex w-full flex-col gap-6">
        <p>Qestion Card 1</p>
        <p>Qestion Card 2</p>
        <p>Qestion Card 3</p>
        <p>Qestion Card 4</p>
      </div>
    </>
  );
}

export default Home;
