import {
  createBrowserRouter,
} from "react-router-dom";
import AboutView from "../views/AboutView";
import PortfolioView from "../views/PortfolioView";
import RootComponent from "../WrapperComponents/UserWrapperComponent";
import ErrorNotFoundedComponent from "../components/ErrorNotFoundedComponent/ErrorNotFoundedComponent";
import ContactMeView from "../views/ContactMeView";
import SkillsView from "../views/SkillsView";

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
      },
      {
        path: "/contact-me",
        Component: ContactMeView
      },
      {
        path: "/skills",
        Component: SkillsView
      },
      {
        path: "*",
        Component: ErrorNotFoundedComponent
      }
    ]
  }
]);

export default router;