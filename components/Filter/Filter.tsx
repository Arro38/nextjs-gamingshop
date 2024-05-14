"use client";
import { useState } from "react";
import { Slider } from "../ui/slider";
import { Input } from "../ui/input";
import MyCheckbox from "./MyCheckbox";

export default function Filter({ max }: { max: number }) {
  const [maxPrice, setMaxPrice] = useState(max);
  const [search, setSearch] = useState("");
  const [categories, setCategories] = useState<string[]>([
    "Action-Adventure",
    "RPG",
    "Sports",
    "Shooter",
    "Sandbox",
    "Autres",
  ]);
  const [plateforms, setPlateforms] = useState<string[]>([
    "PS5",
    "PS4",
    "Xbox",
    "Nintendo Switch",
    "PC",
    "Autres",
  ]);

  const handleSliderChange = (values: number[]) => {
    setMaxPrice(values[0]);
  };
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div className="border border-spacing-2 p-6 max-w-xs min-h-full space-y-4 rounded-md shadow-md">
      <h2 className="text-lg font-semibold">Filtres</h2>
      <Input type="text" placeholder="Jeux ..." onInput={handleSearchChange} />
      <div>
        <h2 className="text-lg font-semibold mb-2">Prix :</h2>
        <Slider
          defaultValue={[max]}
          max={max}
          step={1}
          onValueChange={handleSliderChange}
          className=""
        />
        <div className="flex justify-between mt-2">
          <span>0</span>
          <span>{maxPrice}</span>
        </div>
      </div>
      <h2 className="text-lg font-semibold">Catégories :</h2>
      <div className="space-y-2">
        {categories.map((category) => (
          <MyCheckbox id={category} label={category} key={category} />
        ))}
      </div>
      <h2 className="text-lg font-semibold">Plateformes :</h2>
      <div className="space-y-2">
        {plateforms.map((plateform) => (
          <MyCheckbox id={plateform} label={plateform} key={plateform} />
        ))}
      </div>
    </div>
  );
}
