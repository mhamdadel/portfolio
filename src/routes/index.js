import {
  createBrowserRouter,
} from "react-router-dom";
import AboutView from "../views/AboutView";
import PortfolioView from "../views/PortfolioView";
import RootComponent from "../WrapperComponents/UserWrapperComponent";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootComponent,
    children: [
      {
        path: "/",
        Component: AboutView
      },
      {
        path: "/about",
        Component: AboutView
      },
      {
        path: "/portfolio",
        Component: PortfolioView
      }
    ]
  }
]);

export default router;