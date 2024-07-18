import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Dispatch, SetStateAction } from "react";

type Props = {
  region: string;
  setRegion: Dispatch<SetStateAction<string>>;
};

export default function FilterRegionClient({ region, setRegion }: Props) {
  const regions = ["none", "Africa", "Americas", "Asia", "Europe", "Oceania"];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="bg-element w-40">
          {region === "none" ? "region" : region}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-element">
        <DropdownMenuLabel>Pick a region</DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-background" />
        <DropdownMenuRadioGroup value={region} onValueChange={setRegion}>
          {regions.map((region, i) => (
            <DropdownMenuRadioItem key={i} value={region}>
              {region}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
