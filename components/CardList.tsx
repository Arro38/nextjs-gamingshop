import MyCard from "./MyCard";
import { MyPagination } from "./MyPagination";

export default function CardList() {
  return (
    <div>
      <div className="grid grid-cols-4 gap-4">
        {products.map((product) => (
          <MyCard
            key={product.id}
            product={product}
            aspectRatio="portrait"
            width={200}
            height={300}
          />
        ))}
      </div>
      <MyPagination />
    </div>
  );
}

const products: Product[] = [
  {
    id: 1,
    name: "Cyberpunk 2077",
    cover: "http://videodrive.fr/jeuxpc/cyber77.jpg",
    price: 59.99,
    category: { id: 1, name: "RPG" },
    plateform: { id: 1, name: "PC" },
  },
  {
    id: 2,
    name: "The Last of Us Part II",
    cover: "http://videodrive.fr/jeuxps4/lou2.jpg",
    price: 49.99,
    category: { id: 2, name: "Action-Adventure" },
    plateform: { id: 2, name: "PlayStation" },
  },
  {
    id: 3,
    name: "Assassin's Creed Valhalla",
    cover: "http://videodrive.fr/jeuxsx/acvard.jpg",
    price: 69.99,
    category: { id: 3, name: "Action-Adventure" },
    plateform: { id: 1, name: "PC" },
  },
  {
    id: 4,
    name: "FIFA 23",
    cover: "http://videodrive.fr/jeuxps5/f23.jpg",
    price: 59.99,
    category: { id: 4, name: "Sports" },
    plateform: { id: 3, name: "Xbox" },
  },
  {
    id: 5,
    name: "The Legend of Zelda: Breath of the Wild",
    cover: "http://videodrive.fr/switch/zbw.jpg",
    price: 59.99,
    category: { id: 2, name: "Action-Adventure" },
    plateform: { id: 4, name: "Nintendo Switch" },
  },
  {
    id: 6,
    name: "Call of Duty: Warzone",
    cover: "http://videodrive.fr/jeuxps5/codbocw.jpg",
    price: 0,
    category: { id: 5, name: "Shooter" },
    plateform: { id: 2, name: "PlayStation" },
  },
  {
    id: 7,
    name: "Minecraft",
    cover: "http://videodrive.fr/jeuxps4/mine.jpg",
    price: 26.99,
    category: { id: 6, name: "Sandbox" },
    plateform: { id: 4, name: "Nintendo Switch" },
  },
  {
    id: 8,
    name: "Grand Theft Auto V",
    cover: "http://videodrive.fr/jeux360/gta5.jpg",
    price: 29.99,
    category: { id: 5, name: "Shooter" },
    plateform: { id: 3, name: "Xbox" },
  },
  {
    id: 9,
    name: "Red Dead Redemption 2",
    cover: "http://videodrive.fr/jeuxps4/rdr2.jpg",
    price: 39.99,
    category: { id: 2, name: "Action-Adventure" },
    plateform: { id: 1, name: "PC" },
  },
  {
    id: 10,
    name: "Super Mario Odyssey",
    cover: "http://videodrive.fr/switch/smo.jpg",
    price: 49.99,
    category: { id: 7, name: "Platformer" },
    plateform: { id: 4, name: "Nintendo Switch" },
  },
];
