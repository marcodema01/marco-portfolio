import "./VideoImageGrid.css";

interface VideoImageGridProps {
  img1: string;
  vid2: string;
  vid3: string;
  did1: string;
  did2: string;
  did3: string;
}

const VideoImageGrid = ({
  img1,
  vid2,
  vid3,
  did1,
  did2,
  did3,
}: VideoImageGridProps) => {
  return (
    <div className="prj-images-2">
      <div className="grid1-2">
        <img className="cover-image" src={img1} alt="" />
        <p className="did">{did1}</p>
      </div>
      <div className="grid2-2">
        <video autoPlay muted loop className="cover-image" src={vid2}></video>
        <p className="did">{did2}</p>
      </div>
      <div className="grid3-2">
        <video
          autoPlay
          muted
          loop
          className="cover-image-width"
          src={vid3}></video>
        <p className="did">{did3}</p>
      </div>
    </div>
  );
};

export default VideoImageGrid;
