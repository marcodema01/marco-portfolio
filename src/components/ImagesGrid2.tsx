import "./ImageGrid2.css";

interface imagesGrid2Props {
  img1: string;
  img2: string;
  img3?: string;
  did1: string;
  did2: string;
  did3: string;
}

const ImagesGrid2 = ({
  img1,
  img2,
  img3,
  did1,
  did2,
  did3,
}: imagesGrid2Props) => {
  return (
    <div className={img3 ? "prj-images-2" : "prj-images-2-other"}>
      <div className="grid1-2">
        <img className="cover-image" src={img1} alt="" />
        <p className="did">{did1}</p>
      </div>
      <div className="grid2-2">
        <img className="cover-image" src={img2} alt="" />
        <p className="did">{did2}</p>
      </div>
      {img3 && (
        <div className="grid3-2">
          <img className="cover-image-width" src={img3} alt="" />
          <p className="did">{did3}</p>
        </div>
      )}
    </div>
  );
};

export default ImagesGrid2;
