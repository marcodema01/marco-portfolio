import type { ReactNode } from "react";
import "./ImageRow.css";

interface imageRowProps {
  imgSrc1: string;
  imgSrc2: string;
  imgSrc3: string;
  did1: ReactNode;
  did2: ReactNode;
  did3: ReactNode;
}

const imageRow = ({
  imgSrc1,
  imgSrc2,
  imgSrc3,
  did1,
  did2,
  did3,
}: imageRowProps) => {
  return (
    <div className="image-row-container">
      <div className="img-did">
        <img className="row-image cover-image" src={imgSrc1} alt="" />
        <p className="did">{did1}</p>
      </div>
      <div className="img-did">
        <img className="row-image cover-image" src={imgSrc2} alt="" />
        <p className="did">{did2}</p>
      </div>
      <div className="img-did">
        <img className="row-image cover-image" src={imgSrc3} alt="" />
        <p className="did">{did3}</p>
      </div>
    </div>
  );
};

export default imageRow;
