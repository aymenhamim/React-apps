import { useEffect, useState } from "react";
import Header from "./Header";
import Filter from "./Filter";

function Quran() {
  const [editions, setEditions] = useState({});
  const [inputs, setInputs] = useState({ lang1: "", lang2: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [chapter, setChapter] = useState(1);
  const [surrah, setSurrah] = useState([]);

  const editionsParsed = Object.values(editions);

  function handleClick() {
    console.log("gds");
  }

  useEffect(function () {
    async function getLangs() {
      try {
        setIsLoading(true);
        const res = await fetch(
          `https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions.json`
        );

        const data = await (await res).json();
        setEditions(data);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    }
    getLangs();
  }, []);

  useEffect(
    function () {
      async function getSurrah() {
        try {
          const query = editionsParsed[+inputs.lang1].link.replace(
            ".json",
            `/${chapter}.json`
          );
          const res = await fetch(`${query}`);
          const data = await res.json();

          setSurrah({ ...data });
        } catch (err) {
          console.log(err.message);
        }
      }
      getSurrah();
    },
    [inputs]
  );

  const langs = [];
  const links = [];
  console.log(surrah);
  editionsParsed.map((d) => {
    langs.push(`${d.language} - ${d.author}`);
  });
  // console.log(links);

  return (
    <div className="max-w-full min-h-dvh">
      {isLoading ? (
        "Loading..."
      ) : (
        <>
          <Header
            inputs={inputs}
            langs={langs}
            setInputs={setInputs}
            handleClick={handleClick}
          />

          <Filter />
        </>
      )}
      {surrah && surrah?.chapter?.map((d) => d.text)}
    </div>
  );
}

export default Quran;
