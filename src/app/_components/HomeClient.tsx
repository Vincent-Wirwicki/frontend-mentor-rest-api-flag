"use client";
import { useMemo, useState } from "react";
import { useDebounce } from "use-debounce";
import SearchClient from "./SearchClient";
import FilterRegionClient from "./FilterRegionClient";
import CountryCard from "./CountryCard";

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
      <section className="countries countries-grid countries-gap">
        {filterData.length > 0 ? (
          Object.values(filterData)
            .slice(0, 8)
            .map((v, i) => (
              <CountryCard
                key={i}
                name={v.name}
                population={v.population}
                region={v.region}
                capital={v.capital}
                altFlag={v.altFlag}
                flag={v.flag}
              />
            ))
        ) : (
          <div>{text} not found</div>
        )}
      </section>
    </>
  );
}
