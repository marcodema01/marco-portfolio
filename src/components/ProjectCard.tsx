import "./ProjectCard.css";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  typeItalic: string;
  typeReg: string;
  images: string[];
  route: string[];
}

const ProjectCard = ({
  typeItalic,
  typeReg,
  images,
  route,
}: ProjectCardProps) => {
  return (
    <>
      <div className="card-container">
        <div className="card-text">
          <h3>
            <span className="italic">{typeItalic}</span>
            <br /> {typeReg}
          </h3>
          <h4>
            {images.length} PROJECT{images.length > 1 ? "S" : ""}
          </h4>
        </div>
        <div className="card-image-container">
          {images.map((imgSrc, index) => (
            <Link to={route[index]} key={index}>
              <img
                key={index}
                className="cover-image card-image-element"
                src={imgSrc}
                alt={`Project ${index + 1}`}
              />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
