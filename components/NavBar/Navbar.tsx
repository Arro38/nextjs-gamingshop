"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import logo from "/public/logov.png";
import Image from "next/image";
import { SlBasket } from "react-icons/sl";
import Badge from "@mui/material/Badge";
import AccountDropDown from "./AccountDropdown";

export function Navbar() {
  // onscroll event hide navbar on scroll down and show on scroll up or at the top
  const [prevScrollPos, setPrevScrollPos] = React.useState(0);
  const [visible, setVisible] = React.useState(true);

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible]);
  return (
    <nav
      className={cn(
        "flex justify-between p-4 border rounded-md shadow-md fixed z-50 bg-secondary w-screen transition-all duration-300 ease-in-out top-0",
        !visible && "-top-40"
      )}
    >
      {/* <nav className="flex justify-between p-4  border rounded-md  shadow-md fixed z-50 bg-secondary w-screen"> */}
      <Link href="/" passHref>
        <Image src={logo} alt="Videodrive" width={56} />
      </Link>

      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink
              className={navigationMenuTriggerStyle()}
              href="/"
            >
              Accueil
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Nouveautés</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {gameList.map((game) => (
                  <ListItem
                    key={game.title}
                    title={game.title}
                    href={game.href}
                  >
                    {game.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>Consoles</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {consoleList.map((console) => (
                  <ListItem
                    key={console.title}
                    title={console.title}
                    href={console.href}
                  >
                    {console.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/a-propos" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Videodrive
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="flex items-center gap-4">
        <Link href="/panier" passHref>
          <Badge badgeContent={4} color="primary" className="cursor-pointer">
            <SlBasket size={24} />
          </Badge>
        </Link>
        <AccountDropDown />
      </div>
    </nav>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </div>
        </a>
      </NavigationMenuLink>
    </li>
  );
});

ListItem.displayName = "ListItem";

const gameList: { title: string; href: string; description: string }[] = [
  {
    title: "Cyberpunk 2077",
    href: "/jeux/2",
    description: "Un jeu de rôle futuriste",
  },
  {
    title: "The Witcher 3",
    href: "/jeux/3",
    description: "Un jeu de rôle médiéval",
  },
  {
    title: "Assassin's Creed Valhalla",
    href: "/jeux/4",
    description: "Un jeu d'aventure viking",
  },
  {
    title: "Call of Duty Warzone",
    href: "/jeux/5",
    description: "Un jeu de tir à la première personne",
  },
];

const consoleList: { title: string; href: string; description: string }[] = [
  {
    title: "Playstation 5",
    href: "/consoles/1",
    description: "La dernière console de Sony",
  },
  {
    title: "Xbox Series X",
    href: "/consoles/2",
    description: "La dernière console de Microsoft",
  },
  {
    title: "Nintendo Switch",
    href: "/consoles/3",
    description: "La console hybride de Nintendo",
  },
];
