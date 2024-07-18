"use client";
import { Input } from "@/components/ui/input";
import { ChangeEvent, Dispatch, SetStateAction } from "react";

type Props = {
  input: string;
  setFilter: Dispatch<SetStateAction<string>>;
};

export default function SearchClient({ input, setFilter }: Props) {
  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    setFilter(e.target.value);

  return (
    <Input
      className="bg-element w-40"
      placeholder="search a country..."
      value={input}
      onChange={onChange}
    />
  );
}
