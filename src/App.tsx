import { useRoutes } from "react-router-dom";
import HomeLayout from "./layout/homeLayout";
import Home from "./pages/home";
import "./scss/app.scss";

function App() {
  const element = useRoutes([
    {
      path: "/",
      element: <HomeLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
      ],
    },
  ]);

  if (element) {
    return element;
  }

  return <h1>Not Found booss.</h1>;
}

export default App;
