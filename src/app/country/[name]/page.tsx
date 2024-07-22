import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Suspense } from "react";
import Loading from "../../_components/loading";
import { ArrowBigLeft } from "lucide-react";
import TextData from "@/components/ui/TextData";

async function getCountry(name: string) {
  "use server";
  try {
    const url = "https://restcountries.com/v3.1/name/";
    const res = await fetch(`${url}${name}`, { cache: "force-cache", });
    const data = (await res.json()) as Country[];
    //some typescript fix to have only strings
    //probably better way to do this
    const curr = data[0].currencies;
    const currKey = Object.keys(curr)[0];
    const currVal = curr[currKey].name;

    const nat = data[0].name.nativeName;
    const natKey = Object.keys(nat)[0];
    const natVal = nat[natKey].common;

    const lang = data[0].languages;
    const langKey = Object.keys(lang)[0];
    const langVal = lang[langKey];

    const country = {
      name: data[0].name.common,
      borders: data[0].borders,
      flag: data[0].flags.svg,
      altFlag: data[0].flags.alt,
      main: {
        nativeName: natVal,
        population: data[0].population,
        region: data[0].region,
        subRegion: data[0].subregion,
        capital: data[0].capital[0],
      },
      sub: {
        domain: data[0].tld[0],
        currency: currVal,
        languages: langVal,
      },
    };

    return country;
  } catch (error) {
    console.log(error);
  }
}

export default async function page({ params }: { params: { name: string } }) {
  const country = await getCountry(params.name);

  return (
    <Suspense fallback={<Loading />}>
      <BackButton />
      <section
        className=" w-full py-16 px-20 lg:flex lg:flex-row lg:h-[750px] xs:h-full 
        justify-center items-center gap-10 pt-10 xs:px-2"
      >
        <div className="lg:w-1/2 xs:w-full aspect-video flex items-center">
          <img
            src={country?.flag}
            alt={country?.altFlag}
            className="object-fill"
          />
        </div>
        <div className="lg:w-1/3 xs:w-full">
          <h3 className="font-bold text-3xl py-5">
            {country?.name || "city not foud :("}
          </h3>
          <article className="flex md:flex-row xs:flex-col lg:gap-5 xs:gap-5 h-fit">
            {country ? <CountryData data={country.main} /> : "not found"}
            {country ? <CountryData data={country.sub} /> : "not found"}
          </article>
          <h4 className="font-bold pb-2 pt-5 ">border countries :</h4>{" "}
          <div className="flex flex-wrap gap-2 ">
            {country ? (
              <CountryLink links={country.borders} />
            ) : (
              " data not found"
            )}
          </div>
        </div>
      </section>
    </Suspense>
  );
}

function CountryData({ data }: { data: { [key: string]: number | string } }) {
  function checkUpperCase(text: string) {
    const regex = /([A-Z])/;
    return text.replace(regex, " $1");
  }
  return (
    <div className="flex flex-col lg:gap-4 xs:gap-1 ">
      {Object.entries(data).map(([k, v], i) => (
        <TextData
          key={i + Math.random()}
          keyVal={checkUpperCase(k)}
          value={v}
        />
      ))}
    </div>
  );
}

function CountryLink({ links }: { links: string[] }) {
  return links.map((link, i) => (
    <Link
      key={i + Math.random()}
      href={`/country/${link}`}
      className="border p-2 w-16 text-center bg-element "
    >
      {link}
    </Link>
  ));
}

function BackButton() {
  return (
    <Link href="/" className="flex">
      {" "}
      <Button
        variant="outline"
        className="flex justify-between w-24 bg-element"
      >
        <ArrowBigLeft className="fill-element" /> <span className="">Back</span>
      </Button>
    </Link>
  );
}
