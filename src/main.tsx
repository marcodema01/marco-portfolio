import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import About from "./pages/About.tsx";
import {
  createBrowserRouter,
  createHashRouter,
  HashRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./App.tsx";
import ProjectCarousel from "./components/ProjectCarousel.tsx";
import ProjectDescription from "./pages/ProjectDescription.tsx";
import ProjectDescriptionHorizon from "./pages/ProjectDescriptionHorizon.tsx";
import ProjectDescriptionNebulo from "./pages/ProjectDescriptionNebulo.tsx";
import ProjectDescriptionRino from "./pages/ProjectDescriptionRino.tsx";
import ProjectDescriptionDdose from "./pages/ProjectDescriptionDdose.tsx";
import PlaygroundGrid from "./pages/PlaygroundGrid.tsx";
import Contacts from "./pages/Contacts.tsx";

const router = createHashRouter([
  {
    // path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <ProjectCarousel></ProjectCarousel>,
      },
      {
        path: "projects/exmachina",
        element: <ProjectDescription />,
      },
      {
        path: "projects/horizon",
        element: <ProjectDescriptionHorizon />,
      },
      {
        path: "projects/nebulo",
        element: <ProjectDescriptionNebulo />,
      },
      {
        path: "projects/rino",
        element: <ProjectDescriptionRino />,
      },
      {
        path: "projects/designdose",
        element: <ProjectDescriptionDdose />,
      },
      {
        path: "playground",
        element: <PlaygroundGrid />,
      },
    ],
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "contacts",
    element: <Contacts />,
  },
  {
    basename: "/marco-portfolio/",
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
