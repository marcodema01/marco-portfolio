import ProjectCard from "./ProjectCard";
import "./ProjectCarousel.css";

const ProjectCarousel = () => {
  return (
    <div className="carousel">
      <ProjectCard
        typeItalic={"Interactive"}
        typeReg={"Exhibitions"}
        images={["/images/angelucci.jpg"]}
        route={["projects/exmachina"]}></ProjectCard>

      <ProjectCard
        typeItalic={"Physical"}
        typeReg={"Interactions"}
        images={["/images/nebulo.jpg", "images/rino.jpg"]}
        route={["projects/nebulo", "projects/rino"]}></ProjectCard>

      <ProjectCard
        typeItalic={"Digital"}
        typeReg={"Products"}
        images={["/images/horizon.png", "/images/designdose.png"]}
        route={["projects/horizon", "/projects/designdose"]}></ProjectCard>
    </div>
  );
};

export default ProjectCarousel;
