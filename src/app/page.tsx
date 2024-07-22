import { Suspense } from "react";
import HomeClient from "./_components/HomeClient";
import Loading from "./_components/loading";

async function getAllCountries() {
  "use server";
  const url = "https://restcountries.com/v3.1/all";
  const res = await fetch(url, { cache: "force-cache" });
  const data = (await res.json()) as Country[];
  const countries = Object.values(data).map(v => {
    return {
      name: v.name.common,
      population: v.population,
      region: v.region,
      capital: v.capital,
      flag: v.flags.svg,
      altFlag: v.flags.alt,
    };
  });

  return countries;
}

export default async function Home() {
  const data = await getAllCountries();
  return (
    <Suspense fallback={<Loading />}>
      <HomeClient data={data} />
    </Suspense>
  );
}
