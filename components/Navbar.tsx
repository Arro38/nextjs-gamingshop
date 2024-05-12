import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import Image from "next/image";
import logo from "/public/logov.png";

export default function Navbar() {
  return (
    <Menubar>
      <MenubarContent>
        {/* Logo */}
        <MenubarItem>
          <Image src={logo} alt="Logo" />
        </MenubarItem>

        {/* Links */}
        <MenubarItem>
          <a href="/">Accueil</a>
        </MenubarItem>
        <MenubarItem>
          <a href="/about">A propos</a>
        </MenubarItem>

        {/* Cart and User */}
        <MenubarSeparator />
        <MenubarItem>
          <MenubarTrigger>
            <span>Panier</span>
            <span className="badge">0</span>
          </MenubarTrigger>
        </MenubarItem>
        <MenubarItem>
          <MenubarTrigger>
            <span>Compte</span>
            <Image
              src="/avatar.png"
              alt="Avatar"
              width={24}
              height={24}
            />
          </MenubarTrigger>
        </MenubarItem>
      </MenubarContent>
    </Menubar>
  );
}
