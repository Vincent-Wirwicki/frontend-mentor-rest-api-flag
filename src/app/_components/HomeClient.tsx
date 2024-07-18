"use client";

import { useMemo, useState } from "react";
import { useDebounce } from "use-debounce";
import SearchClient from "./SearchClient";
import FilterRegionClient from "./FilterRegionClient";
import TextData from "@/components/ui/TextData";
import Link from "next/link";

type data = {
  name: string;
  population: number;
  region: string;
  capital: string[];
  flag: string;
  altFlag: string;
};

type Props = {
  data: data[];
};

export default function HomeClient({ data }: Props) {
  const [input, setInput] = useState("");
  const [region, setRegion] = useState("none");
  // use a debounce for performance come from a npm use-debounce
  const [text] = useDebounce(input, 500);

  const filterData = useMemo(() => {
    let filteredData = data;

    if (region !== "none") {
      filteredData = filteredData.filter(obj => obj.region === region);
    }

    if (text) {
      filteredData = filteredData.filter(obj => obj.name.startsWith(text));
    }

    return filteredData;
  }, [data, region, text]);

  return (
    <>
      <div className="h-fit flex gap-5 lg:w-5/6 md:w-full md:flex-row xs:flex-col md:p-5 xs:p-2">
        <SearchClient setFilter={setInput} input={input} />
        <FilterRegionClient region={region} setRegion={setRegion} />
      </div>
      <section
        className="lg:w-5/6 h-full grid p-5 
      xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1
      md:gap-10 xs:gap-8"
      >
        {filterData.length > 0 ? (
          Object.values(filterData)
            .slice(0, 8)
            .map((data, i) => (
              <CountryCard key={i + Math.random()} display={data} />
            ))
        ) : (
          <div>{text} not found</div>
        )}
      </section>
    </>
  );
}

function CountryCard({ display }: { display: data }) {
  const { name, population, region, capital, flag, altFlag } = display;
  return (
    <article className="bg-element w-full h-full flex flex-col gap-2 overflow-hidden">
      <div className="w-full overflow-hidden">
        <img
          src={flag}
          alt={altFlag}
          className="object-cover aspect-video w-full"
        />
      </div>
      <div className="w-full h-1/2 px-5">
        <Link href={`/country/${name}`}>
          <h3 className="font-extrabold text-2xl pt-1">{name}</h3>
        </Link>
        <div className="pt-2">
          <TextData keyVal="Population" value={population} />
          <TextData keyVal="Region" value={region} />
          {capital.map((value, i) => (
            <TextData key={i} keyVal="Capital" value={value || "null"} />
          ))}
        </div>
      </div>
    </article>
  );
}
