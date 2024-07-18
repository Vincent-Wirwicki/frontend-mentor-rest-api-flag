import Link from "next/link";

type Props = {
  name: string;
  population: number;
  region: string;
  capital: string[];
  flag: string;
  altFlag: string;
};

export default function CountryCard({
  name,
  population,
  region,
  capital,
  flag,
  altFlag,
}: Props) {
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

function TextData({
  keyVal,
  value,
}: {
  keyVal: string;
  value: string | number;
}) {
  return (
    <p className="font-semibold py-1">
      {keyVal} :<span className="font-light"> {value}</span>
    </p>
  );
}
