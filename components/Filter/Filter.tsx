"use client";
import { Slider } from "../ui/slider";
import { Input } from "../ui/input";
import MyCheckbox from "./MyCheckbox";
import { Category, Plateform } from "@prisma/client";
import { useStore } from "zustand";
import { useFilterStore } from "@/store/filterStore";
import { Badge } from "@/components/ui/badge";

export default function Filter({
  categories,
  plateforms,
}: {
  categories: Category[];
  plateforms: Plateform[];
}) {
  const { filter, setCategories, setPlatforms, setMaxPrice, setSearch } =
    useStore(useFilterStore, (state) => state);
  const {
    search,
    maxPrice: selectedMaxPrice,
    categories: selectedCategories,
    platforms: selectedPlatforms,
  } = filter;
  const handleSliderChange = (values: number[]) => {
    setMaxPrice(values[0]);
  };
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleCategoryChange = (id: string) => {
    const category = categories.find((category) => category.id === id);
    if (!category) return;
    const newCategories = selectedCategories.find((c) => c.id === category.id)
      ? selectedCategories.filter((c) => c.id !== id)
      : [...selectedCategories, category];
    setCategories(newCategories);
  };

  const handlePlatformChange = (id: string) => {
    const platform = plateforms.find((platform) => platform.id === id);
    if (!platform) return;
    const newPlatforms = selectedPlatforms.find((p) => p.id === id)
      ? selectedPlatforms.filter((p) => p.id !== id)
      : [...selectedPlatforms, platform];
    setPlatforms(newPlatforms);
  };

  return (
    <div className="border border-spacing-2 p-6 lg:max-w-xs min-h-full lg:space-y-4 rounded-md shadow-md flex mb-4 lg:mb-0 space-x-4 lg:flex-col lg:space-x-0">
      <div className="space-y-2">
        <h2 className="text-lg font-semibold">Filtres</h2>

        <Input
          type="text"
          placeholder="Jeux ..."
          defaultValue={search}
          onInput={handleSearchChange}
        />
        {selectedPlatforms.length === 0 && selectedCategories.length === 0 ? (
          <p className="text-center text-sm text-gray-500">
            Aucun filtre actif
          </p>
        ) : (
          // filtres actifs
          <div className="flex flex-wrap min-w-full">
            <p>
              {selectedCategories.map((c) => (
                <Badge key={c.id}>{c.name}</Badge>
              ))}
            </p>
            <p>
              {selectedPlatforms.map((p) => (
                <Badge key={p.id}>{p.name}</Badge>
              ))}
            </p>
          </div>
        )}
        <div>
          <h2 className="text-lg font-semibold mb-2">Prix</h2>
          <Slider
            defaultValue={[selectedMaxPrice]}
            max={1000}
            step={1}
            onValueChange={handleSliderChange}
          />
          <div className="flex justify-between mt-2">
            <span>0</span>
            <span>{selectedMaxPrice}</span>
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
              onValueChange={handleCategoryChange}
              defaultValue={
                selectedCategories.find((c) => c.id === category.id)
                  ? true
                  : false
              }
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
              onValueChange={handlePlatformChange}
              defaultValue={selectedPlatforms.includes(plateform)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
