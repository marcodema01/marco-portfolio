import ProjectCard from "./ProjectCard";
import "./ProjectCarousel.css";

const ProjectCarousel = () => {
  const img = (path: string) => `${import.meta.env.BASE_URL}${path}`;

  return (
    <div className="carousel">
      <ProjectCard
        typeItalic={"Interactive"}
        typeReg={"Exhibitions"}
        images={[img("/images/angelucci.jpg")]}
        route={["projects/exmachina"]}></ProjectCard>

      <ProjectCard
        typeItalic={"Physical"}
        typeReg={"Interactions"}
        images={[img("/images/nebulo.jpg"), img("images/rino.jpg")]}
        route={["projects/nebulo", "projects/rino"]}></ProjectCard>

      <ProjectCard
        typeItalic={"Digital"}
        typeReg={"Products"}
        images={[img("/images/horizon.png"), img("/images/designdose.png")]}
        route={["projects/horizon", "/projects/designdose"]}></ProjectCard>
    </div>
  );
};

export default ProjectCarousel;
