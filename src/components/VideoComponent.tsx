import "./VideoComponent.css";

interface VideoComponentProps {
  videoSrc: string;
}

const VideoComponent = ({ videoSrc }: VideoComponentProps) => {
  return (
    <>
      <video className="main-video" controls src={videoSrc}></video>
    </>
  );
};

export default VideoComponent;
