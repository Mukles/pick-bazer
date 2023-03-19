interface navTypes {
  id: number;
  text: string;
  link: string;
  nested?: [];
}

export const navs: navTypes[] = [
  {
    id: 1,
    text: "Home",
    link: "/",
  },
  {
    id: 2,
    text: "Shop",
    link: "/shop",
  },
  {
    id: 3,
    text: "Product",
    link: "/product",
  },
  {
    id: 4,
    text: "Blogs",
    link: "/blogs",
  },
];
