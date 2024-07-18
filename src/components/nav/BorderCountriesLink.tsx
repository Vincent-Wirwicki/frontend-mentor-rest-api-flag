
import Link from "next/link";

type Props = { name: string };

export default function BorderCountriesLink({ name }: Props) {
  return (
    <Link
      href={`/country/${name}`}
      className="border p-2 w-16 text-center bg-element "
    >
      {name}
    </Link>
  );
}
// `/country/${value}`
