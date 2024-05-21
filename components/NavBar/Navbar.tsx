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
import logo from "/public/logo.png";
import Image from "next/image";
import { SlBasket } from "react-icons/sl";
import Badge from "@mui/material/Badge";
// import AccountDropDown from "./AccountDropdown";
import { useStore } from "zustand";
import { useOrderStore } from "@/store/orderStore";
import GameListMenu from "./GameListMenu";
import PlatformListMenu from "./PlatformListMenu";
import { ModeToggle } from "./ModeToggle";

export function Navbar() {
  const { products } = useStore(useOrderStore, (state) => state);
  const [prevScrollPos, setPrevScrollPos] = React.useState(0);
  const [visible, setVisible] = React.useState(true);
  const [quantity, setQuantity] = React.useState(0);

  React.useEffect(() => {
    products.map((product) => {
      setQuantity((prev) => prev + product.quantity);
    });
  }, [products]);

  React.useEffect(() => {
    const updateQuantity = () => {
      let totalQuantity = 0;
      products.forEach((product) => {
        totalQuantity += product.quantity;
      });
      setQuantity(totalQuantity);
    };

    updateQuantity();

    const unsubscribe = useOrderStore.subscribe((newState) => {
      updateQuantity();
    });

    return () => {
      unsubscribe();
    };
  }, [products]);

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
        "fixed top-0 z-50 flex w-screen items-center justify-between rounded-b-md border bg-primary p-4 shadow-md transition-all duration-300 ease-in-out",
        !visible && "-top-40",
      )}
    >
      <Link href="/" passHref>
        <Image src={logo} alt="Videodrive" width={65} />
      </Link>

      <NavigationMenu className="hidden md:block">
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
              <GameListMenu />
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>Consoles</NavigationMenuTrigger>
            <NavigationMenuContent>
              <PlatformListMenu />
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/a-propos" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                A propos
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="flex items-center gap-4">
        <Link href="/panier" passHref>
          <Badge
            badgeContent={quantity}
            color="primary"
            className="cursor-pointer"
          >
            <SlBasket size={24} />
          </Badge>
        </Link>
        {/* <AccountDropDown /> */}
        <ModeToggle />
      </div>
    </nav>
  );
}
