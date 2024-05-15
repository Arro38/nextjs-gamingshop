"use client";
import { useState } from "react";
import { Slider } from "../ui/slider";
import { Input } from "../ui/input";
import MyCheckbox from "./MyCheckbox";
import { plateforms as p, categories as c } from "@/lib/data";

export default function Filter({ max }: { max: number }) {
  const [maxPrice, setMaxPrice] = useState(max);
  const [search, setSearch] = useState("");
  const [categories, setCategories] = useState<Category[]>(c);
  const [plateforms, setPlateforms] = useState<Plateform[]>(p);

  const handleSliderChange = (values: number[]) => {
    setMaxPrice(values[0]);
  };
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div className="border border-spacing-2 p-6 lg:max-w-xs min-h-full lg:space-y-4 rounded-md shadow-md flex mb-4 lg:mb-0 space-x-4 lg:flex-col lg:space-x-0">
      <div className="space-y-2">
        <h2 className="text-lg font-semibold">Filtres</h2>
        <Input
          type="text"
          placeholder="Jeux ..."
          onInput={handleSearchChange}
        />
        <div>
          <h2 className="text-lg font-semibold mb-2">Prix</h2>
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
      </div>
      <div>
        <h2 className="text-lg font-semibold">Catégories</h2>
        <div className="space-y-2">
          {categories.map((category) => (
            <MyCheckbox
              id={category.id}
              label={category.name}
              key={category.id}
            />
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-lg font-semibold">Plateformes</h2>
        <div className="space-y-2">
          {plateforms.map((plateform) => (
            <MyCheckbox
              id={plateform.id}
              label={plateform.name}
              key={plateform.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
