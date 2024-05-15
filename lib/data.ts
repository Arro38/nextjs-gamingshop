const categories: Category[] = [
  { id: "1", name: "RPG" },
  { id: "2", name: "Action-Adventure" },
  { id: "3", name: "Sports" },
  { id: "4", name: "Shooter" },
  { id: "5", name: "Sandbox" },
  { id: "6", name: "Platformer" },
];

const plateforms: Plateform[] = [
  { id: "1", name: "PC" },
  { id: "2", name: "PlayStation" },
  { id: "3", name: "Xbox" },
  { id: "4", name: "Nintendo Switch" },
];

const products: Product[] = [
  {
    id: 1,
    name: "Cyberpunk 2077",
    description:
      "Cyberpunk 2077 est un jeu vidéo d'action-RPG en vue à la première personne développé par CD Projekt RED, basé sur la table de jeu Cyberpunk 2020 créée par Mike Pondsmith. Il est sorti le 10 décembre 2020 sur PC, PlayStation 4, PlayStation 5, Xbox One, Xbox Series et Stadia.",
    cover: "http://videodrive.fr/jeuxpc/cyber77.jpg",
    price: 59.99,
    category: categories[0],
    plateform: plateforms[0],
  },
  {
    id: 2,
    name: "The Last of Us Part II",
    description:
      "The Last of Us Part II est un jeu vidéo d'action-aventure en vue à la troisième personne de type survival horror développé par Naughty Dog et édité par Sony Interactive Entertainment sur PlayStation 4. Il est sorti le 19 juin 2020.",
    cover: "http://videodrive.fr/jeuxps4/lou2.jpg",
    price: 49.99,
    category: categories[1],
    plateform: plateforms[1],
  },
  {
    id: 3,
    name: "Assassin's Creed Valhalla",
    description:
      "Assassin's Creed Valhalla est un jeu vidéo d'action-aventure et de rôle, développé par Ubisoft Montréal et édité par Ubisoft, sorti en 2020 sur Windows, PlayStation 4, PlayStation 5, Xbox One, Xbox Series et Stadia. Il appartient à la série Assassin's Creed.",
    cover: "http://videodrive.fr/jeuxsx/acvard.jpg",
    price: 69.99,
    category: categories[1],
    plateform: plateforms[2],
  },
  {
    id: 4,
    name: "FIFA 23",
    description:
      "FIFA 23 est un jeu vidéo de football développé par EA Canada et édité par Electronic Arts, sorti en 2022 sur Windows, PlayStation 4, PlayStation 5, Xbox One, Xbox Series et Stadia. Il appartient à la série FIFA.",
    cover: "http://videodrive.fr/jeuxps5/f23.jpg",
    price: 59.99,
    category: categories[2],
    plateform: plateforms[1],
  },
  {
    id: 5,
    name: "The Legend of Zelda: Breath of the Wild",
    description:
      "The Legend of Zelda: Breath of the Wild est un jeu vidéo d'action-aventure développé par la division Nintendo EPD, assisté par Monolith Soft, et publié par Nintendo le 3 mars 2017 sur Nintendo Switch dans le cadre du lancement de la console.",
    cover: "http://videodrive.fr/switch/zbw.jpg",
    price: 59.99,
    category: categories[6],
    plateform: plateforms[3],
  },
  {
    id: 6,
    name: "Call of Duty: Warzone",
    description:
      "Call of Duty: Warzone est un jeu vidéo de tir à la première personne gratuit développé par Infinity Ward et Raven Software et édité par Activision. Il est sorti le 10 mars 2020 sur PlayStation 4, Xbox One et Microsoft Windows.",
    cover: "http://videodrive.fr/jeuxps5/codbocw.jpg",
    price: 69.99,
    category: categories[3],
    plateform: plateforms[1],
  },
  {
    id: 7,
    name: "Minecraft",
    description:
      "Minecraft est un jeu vidéo de type « bac à sable » (construction complètement libre) développé par le Suédois Markus Persson, alias Notch, puis par le studio de développement Mojang Studios. Ce jeu vidéo plonge le joueur dans un univers généré aléatoirement et composé de voxels. Le jeu intègre un système d'artisanat axé sur l'exploitation de ressources naturelles (minéralogiques, fossiles, animales et végétales), puis leur transformation en produits artisanaux. Le jeu propose un mode multijoueur en ligne qui permet à plusieurs joueurs de partager un même monde, de s'y aventurer, de s'y affronter, de coopérer ou de construire ensemble.",
    cover: "http://videodrive.fr/jeuxps4/mine.jpg",
    price: 26.99,
    category: categories[4],
    plateform: plateforms[1],
  },
  {
    id: 8,
    name: "Grand Theft Auto V",
    description:
      "Grand Theft Auto V est un jeu vidéo d'action-aventure en monde ouvert développé par Rockstar North et édité par Rockstar Games. Il est commercialisé en septembre 2013 sur PlayStation 3 et Xbox 360, en novembre 2014 sur PlayStation 4 et Xbox One, en avril 2015 sur Microsoft Windows.",
    cover: "http://videodrive.fr/jeux360/gta5.jpg",
    price: 29.99,
    category: categories[4],
    plateform: plateforms[2],
  },
  {
    id: 9,
    name: "Red Dead Redemption 2",
    description:
      "Red Dead Redemption 2 est un jeu vidéo d'action-aventure en monde ouvert développé et édité par Rockstar Games. Il est commercialisé en octobre 2018 sur PlayStation 4 et Xbox One, et en novembre 2019 sur Microsoft Windows et Google Stadia.",
    cover: "http://videodrive.fr/jeuxps4/rdr2.jpg",
    price: 39.99,
    category: categories[1],
    plateform: plateforms[1],
  },
  {
    id: 10,
    name: "Super Mario Odyssey",
    description:
      "Super Mario Odyssey est un jeu vidéo de plates-formes développé et édité par Nintendo sorti le 27 octobre 2017 sur Nintendo Switch. Il s'agit du seizième jeu de la franchise Super Mario et du sixième jeu de plate-forme en 3D.",
    cover: "http://videodrive.fr/switch/smo.jpg",
    price: 49.99,
    category: categories[6],
    plateform: plateforms[3],
  },
];

export { categories, plateforms, products };
