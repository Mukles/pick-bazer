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
    link: "/shop/list",
  },

  {
    id: 3,
    text: "Blogs",
    link: "/blogs",
  },
];
