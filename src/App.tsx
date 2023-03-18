import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useRoutes } from "react-router-dom";
import Sidebar from "./Components/header/Sidebar";
import ProductMoreDetails from "./Components/product/porduct-more-details";
import ProductPreview from "./Components/product/product-preview";
import ProductSuggestion from "./Components/product/product-suggestion";
import HomeLayout from "./layout/homeLayout";
import Cart from "./pages/cart";
import Home from "./pages/home";
import ShopList from "./pages/shop-list";
import "./scss/app.scss";

function App() {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState<boolean>(false);

  const handleClick = (event: any) => {
    if (!sidebarRef.current) return;
    if (
      !event.target.className?.includes("nav-toggler-icon") &&
      !sidebarRef.current.contains(event.target)
    ) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", (event) => handleClick(event));
    return () => {
      document.removeEventListener("click", (event) => handleClick(event));
    };
  }, []);

  const element = useRoutes([
    {
      path: "/",
      element: <HomeLayout setOpen={setOpen} />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/shop/cart",
          element: <Cart />,
        },
        {
          path: "shop/list",
          element: <ShopList />,
        },
        {
          path: "product/:name",
          element: (
            <ProductPreview>
              <ProductMoreDetails />
              <ProductSuggestion />
            </ProductPreview>
          ),
        },
      ],
    },
  ]);

  if (element) {
    return (
      <div className="page-wrapper">
        <div ref={sidebarRef}>
          <AnimatePresence>
            {open && (
              <motion.div
                variants={{
                  open: { width: "auto" },
                  closed: { width: 0, overflow: "hidden" },
                }}
                initial="closed"
                animate="open"
                exit="closed"
                transition={{ type: "spring", bounce: 0, duration: 0.3 }}
                className="sidebar-container"
              >
                <Sidebar setOpen={setOpen} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div>
          {element}
          <div className="modal"></div>
        </div>
      </div>
    );
  }

  return <h1>Not Found booss.</h1>;
}

export default App;
