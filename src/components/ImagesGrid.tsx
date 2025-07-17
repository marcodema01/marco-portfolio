import "./ImageGrid.css";

interface imagesGridProps {
  img1: string;
  img2: string;
  img3: string;
  did1: string;
  did2: string;
  did3: string;
  extraClass?: string;
}

const ImagesGrid = ({
  img1,
  img2,
  img3,
  did1,
  did2,
  did3,
  extraClass,
}: imagesGridProps) => {
  return (
    <div className="prj-images">
      <div className="grid1">
        <img className={"cover-image " + extraClass} src={img1} alt="" />
        <p className="did">{did1}</p>
      </div>
      <div className="grid2">
        <img className="cover-image" src={img2} alt="" />
        <p className="did">{did2}</p>
      </div>
      <div className="grid3">
        <img className="cover-image" src={img3} alt="" />
        <p className="did">{did3}</p>
      </div>
    </div>
  );
};

export default ImagesGrid;
