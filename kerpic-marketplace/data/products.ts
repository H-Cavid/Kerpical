export type Product = {
    id: string;
    image: string;
    name: {
      az: string;
      en: string;
      ru: string;
    };
  };
  
  export const products: Product[] = [
    {
      id: "red-brick",
      image: "/brick-hero.jpg",
      name: {
        az: "Qırmızı kərpic",
        en: "Red brick",
        ru: "Красный кирпич"
      }
    },
    {
      id: "white-brick",
      image: "/brick-hero_2.jpg",
      name: {
        az: "Ağ kərpic",
        en: "White brick",
        ru: "Белый кирпич"
      }
    },
    {
      id: "hollow-brick",
      image: "/brick-hero_3.jpg",
      name: {
        az: "Boşluqlu kərpic",
        en: "Hollow brick",
        ru: "Пустотелый кирпич"
      }
    },
    {
      id: "decorative-brick",
      image: "/brick-hero.jpg",
      name: {
        az: "Dekorativ kərpic",
        en: "Decorative brick",
        ru: "Декоративный кирпич"
      }
    },
    {
      id: "fire-brick",
      image: "/brick-hero_2.jpg",
      name: {
        az: "Odadavamlı kərpic",
        en: "Fire brick",
        ru: "Огнеупорный кирпич"
      }
    },
    {
      id: "cement-brick",
      image: "/brick-hero_3.jpg",
      name: {
        az: "Sement kərpic",
        en: "Cement brick",
        ru: "Цементный кирпич"
      }
    }
  ];
  