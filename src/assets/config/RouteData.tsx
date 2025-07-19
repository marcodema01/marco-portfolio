import React from "react";

// Definisci il tipo per i dati della route
export interface RouteInfo {
  title: string | React.ReactNode;
  description: string | React.ReactNode;
  image: () => string | undefined;
  invertText: string;
  whiteText: string;
  descriptionTextClass: string;
  appContainerClass: string;
}

// Definisci il tipo per le chiavi delle route
export type RouteKey =
  | "/"
  | "/projects/exmachina"
  | "/projects/horizon"
  | "/projects/nebulo"
  | "/projects/rino"
  | "/projects/designdose"
  | "/playground";

// Definisci routeData con il tipo appropriato
export const routeData: Record<RouteKey, RouteInfo> = {
  "/": {
    title: (
      <>
        <span>My</span> Projects
      </>
    ),
    description: (
      <>
        A selection of projects spanning through these last years. <br /> If you
        want to see more don't forget to check out the playground section!
      </>
    ),
    image: () => `${import.meta.env.BASE_URL}images/heroWhite.png`,
    invertText: "",
    whiteText: "",
    descriptionTextClass: "description",
    appContainerClass: "app-container",
  },
  "/projects/exmachina": {
    title: (
      <>
        <span>Ex</span> Machina
      </>
    ),
    description: (
      <>
        Ex Machina is an interactive installation that immerses visitors in the
        heart of an artificially generated cult set between a past shaped by
        ancient rituals and a post-industrial future where artificial artifacts
        become icons of worship.
      </>
    ),
    image: () => `${import.meta.env.BASE_URL}images/heroExMachina.webp`,
    invertText: "invert-text",
    whiteText: "white-text",
    descriptionTextClass: "bolder-description",
    appContainerClass: "auto-app-container",
  },
  "/projects/horizon": {
    title: (
      <>
        <span>Horizon</span>
      </>
    ),
    description: (
      <>
        Horizon is a generative AI-powered assistant designed for small tourism
        providers, helping them craft personalized strategies and content to
        promote hidden destinations.
      </>
    ),
    image: () => `${import.meta.env.BASE_URL}images/heroHorizon.webp`,
    invertText: "invert-text",
    whiteText: "white-text",
    descriptionTextClass: "bolder-description",
    appContainerClass: "auto-app-container",
  },
  "/projects/nebulo": {
    title: (
      <>
        <span>Nebulo</span>
      </>
    ),
    description: (
      <>
        Nebulo is the only asthma self-management system that combines playful
        storytelling, environmental awareness and respiratory tracking to
        empower children and reassure caregivers in the everyday management of
        pediatric asthma.
      </>
    ),
    image: () => `${import.meta.env.BASE_URL}images/nebuloHero.webp`,
    invertText: "invert-text",
    whiteText: "white-text",
    descriptionTextClass: "bolder-description",
    appContainerClass: "auto-app-container",
  },
  "/projects/rino": {
    title: (
      <>
        <span>Rino</span>
      </>
    ),
    description: (
      <>
        Rino was born as a creative exercise to explore the potential of machine
        learning, transforming a simple everyday object like a centerpiece into
        a thinking object capable of interacting with dinner guests.
      </>
    ),
    image: () => `${import.meta.env.BASE_URL}images/heroRino.webp`,
    invertText: "invert-text",
    whiteText: "white-text",
    descriptionTextClass: "bolder-description",
    appContainerClass: "auto-app-container",
  },
  "/projects/designdose": {
    title: (
      <>
        <span>Design</span>Dose
      </>
    ),
    description: (
      <>
        DesignDose was born as a creative exercise in web design and
        development. The result is a slightly unconventional website: a pharmacy
        for desperate designers in search of remedies to save them.
      </>
    ),
    image: () => `${import.meta.env.BASE_URL}images/heroddose.webp`,
    invertText: "invert-text",
    whiteText: "white-text",
    descriptionTextClass: "bolder-description",
    appContainerClass: "auto-app-container",
  },
  "/playground": {
    title: (
      <>
        <span>My</span>Playground
      </>
    ),
    description: (
      <>
        Here is a selection of passion projects that didn't yet make it to the
        front page. <br /> The projects span from 3D models to creative
        applications of tech, <br /> from websites to industrial designs, from
        videogames to digital fabrication prototypes.
      </>
    ),
    image: () => `${import.meta.env.BASE_URL}images/heroWhite.png`,
    invertText: "",
    whiteText: "",
    descriptionTextClass: "description",
    appContainerClass: "auto-app-container",
  },
};

// Funzione helper per verificare se una stringa è una chiave valida
export const isValidRoute = (path: string): path is RouteKey => {
  return (path as RouteKey) in routeData;
};

// Funzione helper alternativa più esplicita
export const getRouteInfo = (path: string): RouteInfo => {
  if (isValidRoute(path)) {
    return routeData[path];
  }
  return routeData["/"];
};
