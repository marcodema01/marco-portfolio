import Heading from "./components/Heading";
import NavBar from "./components/NavBar";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import {
  routeData,
  isValidRoute,
  // getRouteInfo,
} from "./assets/config/RouteData";
// import type { RouteKey } from "./assets/config/RouteData";

const App = () => {
  const { pathname } = useLocation();

  const current = isValidRoute(pathname) ? routeData[pathname] : routeData["/"];

  return (
    <div className={current.appContainerClass}>
      <Heading
        title={current.title}
        description={current.description}></Heading>
      <NavBar></NavBar>
      <Outlet></Outlet>
    </div>
  );
};

export default App;
