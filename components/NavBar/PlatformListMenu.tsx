"use client";
import React from "react";
import ListItem from "./ListItem";
import useSWR from "swr";
import { fetcher } from "@/lib/utils";
import { Plateform } from "@prisma/client";
import { useFilterStore } from "@/store/filterStore";
import { useStore } from "zustand";

export default function PlatformListMenu() {
  const platformList = useSWR("/api/platforms", fetcher).data as Plateform[];
  const { setPlatforms } = useStore(useFilterStore, (state) => state);
  const handleClick = (plateform: Plateform) => {
    setPlatforms([plateform]);
  };

  return (
    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
      {platformList &&
        platformList.map((platform) => (
          <span
            key={platform.id}
            onClick={() => {
              handleClick(platform);
            }}
          >
            <ListItem title={platform.name} href={"/"}>
              {platform.description}
            </ListItem>
          </span>
        ))}
    </ul>
  );
}
