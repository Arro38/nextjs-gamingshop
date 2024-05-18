"use client";
import React from "react";
import ListItem from "./ListItem";
import useSWR from "swr";
import { fetcher } from "@/lib/utils";
import { Plateform } from "@prisma/client";

export default function PlatformListMenu() {
  const platformList = useSWR("/api/platforms", fetcher).data as Plateform[];
  return (
    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
      {platformList &&
        platformList.map((platform) => (
          <ListItem
            key={platform.id}
            title={platform.name}
            href={platform.cover}
          >
            {platform.description}
          </ListItem>
        ))}
    </ul>
  );
}
