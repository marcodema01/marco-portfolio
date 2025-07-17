import "./Heading.css";
import type { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import {
  routeData,
  isValidRoute,
  // getRouteInfo,
} from "../assets/config/RouteData";

interface HeadingProps {
  title: ReactNode;
  description: ReactNode;
}

const Heading = ({ title, description }: HeadingProps) => {
  const { pathname } = useLocation();

  const current = isValidRoute(pathname) ? routeData[pathname] : routeData["/"];

  return (
    <div className="heading-container">
      <div className="herobg">
        <img className="cover-image-hero" src={current.image} alt="" />
      </div>
      <div className="top-heading ">
        <p className={current.whiteText}>
          Industrial and Interaction <br /> Designer
        </p>
        <h2 className={current.invertText}>MARCO</h2>
        <p className={"right-justif " + current.whiteText}>Portfolio</p>
      </div>
      <div className="main-heading">
        <h1 className={current.invertText}>{title}</h1>
        <p className={current.descriptionTextClass + " " + current.invertText}>
          {description}
        </p>
      </div>
    </div>
  );
};

export default Heading;
