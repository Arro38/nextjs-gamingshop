"use client";
import React from "react";
import ListItem from "./ListItem";
import { getLastProducts } from "@/prisma/product";
import useSWR from "swr";
import { fetcher } from "@/lib/utils";
import { Product } from "@prisma/client";

function GameListMenu() {
  const gameList = useSWR("/api/games/latest", fetcher).data as Product[];
  return (
    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
      {gameList &&
        gameList.map((game) => (
          <ListItem key={game.id} title={game.name} href={game.cover}>
            {game.description}
          </ListItem>
        ))}
    </ul>
  );
}

export default GameListMenu;
