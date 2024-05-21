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
    <div className="mb-4 flex min-h-full border-spacing-2 flex-wrap space-x-4 rounded-md border p-6 shadow-md lg:mb-0 lg:max-w-xs lg:flex-col lg:space-x-0 lg:space-y-4">
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
          <div className="flex min-w-full flex-wrap">
            <div>
              {selectedCategories.map((c) => (
                <Badge key={c.id}>{c.name}</Badge>
              ))}
            </div>
            <div>
              {selectedPlatforms.map((p) => (
                <Badge key={p.id}>{p.name}</Badge>
              ))}
            </div>
          </div>
        )}
        <div>
          <h2 className="mb-2 text-lg font-semibold">Prix</h2>
          <Slider
            defaultValue={[selectedMaxPrice]}
            max={1000}
            step={1}
            onValueChange={handleSliderChange}
          />
          <div className="mt-2 flex justify-between">
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
              defaultValue={
                selectedPlatforms.find((p) => p.id === plateform.id)
                  ? true
                  : false
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}
