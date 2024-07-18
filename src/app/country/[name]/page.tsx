import BorderCountriesLink from "@/components/nav/BorderCountriesLink";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Suspense } from "react";
import Loading from "../../_components/loading";
import { ArrowBigLeft } from "lucide-react";

async function getCountry(name: string) {
  "use server";
  try {
    const url = " https://restcountries.com/v3.1/name/";
    const res = await fetch(`${url}${name}`);
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
  function checkUpperCase(text: string) {
    const regex = /([A-Z])/;
    return text.replace(regex, " $1");
  }
  return (
    <Suspense fallback={<Loading />}>
      <main className="main main-pad">
        <Link href="/" className="flex">
          {" "}
          <Button
            variant="outline"
            className="flex justify-between w-24 bg-element"
          >
            <ArrowBigLeft className="fill-element" />{" "}
            <span className="">Back</span>
          </Button>
        </Link>
        <section
          className=" w-full py-16 px-20 lg:flex lg:flex-row lg:h-[750px] xs:h-full 
        justify-center items-center gap-10 pt-10 xs:px-2"
        >
          <div className="lg:w-1/2 xs:w-full aspect-video flex items-center  ">
            {/*<Image
              src={country?.flag}
              alt={"image of a flag"}
              width={152}
              height={230}
              className="object-cover aspect-video w-full"
            /> */}
            <img src={country?.flag} alt={country?.altFlag} />
          </div>
          <div className="lg:w-1/3 xs:w-full">
            <h3 className="font-bold text-3xl py-5">
              {country?.name || "city not foud :("}
            </h3>
            <article className="flex md:flex-row xs:flex-col lg:gap-5 xs:gap-5 h-fit">
              <div className="flex flex-col lg:gap-4 xs:gap-1">
                {country
                  ? Object.entries(country.main).map(([k, v], i) => (
                      <TextData key={i} keyVal={checkUpperCase(k)} value={v} />
                    ))
                  : "data not found"}
              </div>
              <div className="flex flex-col lg:gap-4 xs:gap-1 ">
                {country
                  ? Object.entries(country.sub).map(([k, v], i) => (
                      <TextData key={i} keyVal={checkUpperCase(k)} value={v} />
                    ))
                  : "..."}
              </div>
            </article>
            <h4 className="font-bold pb-2 pt-5 ">border countries :</h4>{" "}
            <div className="flex flex-wrap gap-2 ">
              {country
                ? country.borders.map((v, i) => (
                    <BorderCountriesLink key={i} name={v} />
                  ))
                : " data not found"}
            </div>
          </div>
        </section>
      </main>
    </Suspense>
  );
}

function TextData({
  keyVal,
  value,
}: {
  keyVal: string;
  value: string | number;
}) {
  return (
    <p className="country-card-text-key">
      {keyVal.charAt(0).toUpperCase() + keyVal.slice(1)} :
      <span className="country-card-text-value"> {value}</span>
    </p>
  );
}
// absolute top-0 left-0 w-screen h-screen flex justify-center items-center gap-10 pt-10 py-16 px-20
