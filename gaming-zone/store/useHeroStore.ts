import { create } from "zustand";

interface PromoGame {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

interface ListGame {
  id: number;
  title: string;
  image: string;
  price: number;
  discount?: number;
}

interface FreeGame {
  id: number;
  title: string;
  image: string;
  status: string;
  dateRange: string;
}

interface SaleGame {
  id: number;
  title: string;
  image: string;
  discount: number;
  originalPrice: number;
  salePrice: number;
}

interface HeroGame {
  id: number;
  title: string;
  description: string;
  tag: string;
  banner: string;
  thumbnail: string;
}

interface HeroState {
  activeGameId: number;
  games: HeroGame[];
  saleGames: SaleGame[];
  promoGames: PromoGame[];
  freeGames: FreeGame[];
  bestSellers: ListGame[];
  topSellers: ListGame[];
  upcomingGames: ListGame[];
  setActiveGame: (id: number) => void;
}

export const useHeroStore = create<HeroState>((set) => ({
  activeGameId: 1,
  games: [
    {
      id: 1,
      title: "God Of War 4",
      tag: "Pre-purchase Available",
      description:
        "Kratos now lives as a man in the realm of Norse Gods and monsters. It is in this harsh, unforgiving world that he must fight to survive.",
      banner: "/Reactangle 9.png",
      thumbnail: "/Rectangle 9.png",
    },
    {
      id: 2,
      title: "Far Cry 6 Golden Edition",
      tag: "Out Now",
      description:
        "Dive into the gritty world of a modern-day guerrilla revolution to liberate a nation from a dictator.",
      banner: "/farcry.png",
      thumbnail: "/farcry.png",
    },
    {
      id: 3,
      title: "GTA V",
      tag: "Available Now",
      description:
        "Experience the interweaving lives of three very different criminals as they risk everything in a series of daring heists.",
      banner: "/gta.png",
      thumbnail: "/gta.png",
    },
    {
      id: 4,
      title: "Outlast 2",
      tag: "Out Now",
      description:
        "Outlast 2 introduces you to Sullivan Knoth and his followers, who left our wicked world behind.",
      banner: "/out.png",
      thumbnail: "/out.png",
    },
  ],

  saleGames: [
    {
      id: 1,
      title: "Valorant",
      image: "/valorant.png",
      discount: 10,
      originalPrice: 900,
      salePrice: 850,
    },
    {
      id: 2,
      title: "Assassin's Creed Valhalla",
      image: "/valhalla.png",
      discount: 20,
      originalPrice: 3499,
      salePrice: 2999,
    },
    {
      id: 3,
      title: "Red Dead Redemption 2",
      image: "/rdr 2.png",
      discount: 50,
      originalPrice: 3199,
      salePrice: 1599,
    },
    {
      id: 4,
      title: "The Tomb Raider",
      image: "/tomb-raider.png",
      discount: 20,
      originalPrice: 2195,
      salePrice: 2000,
    },
    {
      id: 5,
      title: "Cyberpunk 2077",
      image: "/cyberpunk.png",
      discount: 50,
      originalPrice: 4000,
      salePrice: 2000,
    },
    {
      id: 6,
      title: "Cyberpunk 2077",
      image: "/cyberpunk.png",
      discount: 50,
      originalPrice: 4000,
      salePrice: 2000,
    },
  ],

  promoGames: [
    {
      id: 1,
      title: "NFS Unbound",
      description:
        "Pre-purchase NFS Unbound and get an exclusive Driving Effect, License Plate, $150,000 Bank, and more.",
      price: 3499,
      image: "/Frame 45.png",
    },
    {
      id: 2,
      title: "FIFA 23",
      description:
        "FIFA 23 brings The World's Game to the pitch, with HyperMotion2 Technology, men's and women's FIFA World Cup.",
      price: 3699,
      image: "/Frame 46.png",
    },
    {
      id: 3,
      title: "Uncharted 4",
      description:
        "Get the definitive Uncharted 4 experience with all Season Pass content, the Ultimate Pack, and upcoming expansion.",
      price: 2199,
      image: "/Frame 47.png",
    },
  ],
  freeGames: [
    {
      id: 1,
      title: "Darkwood",
      image: "/Rectangle 15.png",
      status: "Free Now",
      dateRange: "Jul 25",
    },
    {
      id: 2,
      title: "Assassin's Creed Black Flag",
      image: "/Rectangle 16.png",
      status: "Free Now",
      dateRange: "Jul 25",
    },
    {
      id: 3,
      title: "NFS : Shift",
      image: "/Rectangle 17.png",
      status: "Coming Soon",
      dateRange: "Jul 27 - Aug 5",
    },
    {
      id: 4,
      title: "Warface",
      image: "/Rectangle 18.png",
      status: "Coming Soon",
      dateRange: "Jul 27 - Aug 5",
    },
  ],
  topSellers: [
    {
      id: 1,
      title: "Ghostbusters: Spirits Unleashed",
      image: "/Rectangle 17 (2).png",
      price: 939,
    },
    { id: 2, title: "GTA V : Premier edition", image: "/gta.png", price: 2500 },
    {
      id: 3,
      title: "Daysgone",
      image: "/Rectangle 17 (3).png",
      price: 2500,
      // discount: 50,
    },
    {
      id: 4,
      title: "Last Of Us 2",
      image: "/Rectangle 17 (4).png",
      price: 1499,
    },
    { id: 5, title: "God Of War 4", image: "/gow.png", price: 2659 },
  ],
  bestSellers: [
    {
      id: 6,
      title: "Fortnite",
      image: "/Rectangle 17 (5).png",
      price: 0,
      // discount: 50,
    },
    { id: 7, title: "GTA V : Premier edition", image: "/gta.png", price: 2500 },
    { id: 8, title: "IGI 2", image: "/Rectangle 17 (6).png", price: 499 },
    {
      id: 9,
      title: "Tomb Raider",
      image: "/rectangle 17 (7).png",
      price: 2499,
      // discount: 50,
    },
    { id: 10, title: "Uncharted 4", image: "/Frame 47.png", price: 2999 },
  ],
  upcomingGames: [
    {
      id: 11,
      title: "Hogwarts legacy",
      image: "/Rectangle 17 (8).png",
      price: 2999,
    },
    {
      id: 12,
      title: "Uncharted Legacy of Thieves ",
      image: "/Rectangle 17 (9).png",
      price: 2199,
    },
    {
      id: 13,
      title: "Assassin's Creed Mirage",
      image: "/Rectangle 17 (10).png",
      price: 3499,
    },
    {
      id: 14,
      title: "Last of Us II",
      image: "/Rectangle 17 (11).png",
      price: 3999,
      // discount: 50,
    },
    {
      id: 15,
      title: "Dead by Daylight",
      image: "/Rectangle 17 (12).png",
      price: 0,
    },
  ],
  setActiveGame: (id) => set({ activeGameId: id }),
}));
