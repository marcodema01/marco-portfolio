interface ProjectSingleImageProps {
  imgSrc: string;
  width: string;
  did?: string;
}

const ProjectSingleImage = ({
  imgSrc,
  width,
  did,
}: ProjectSingleImageProps) => {
  return (
    <>
      <div className={width}>
        <img className="cover-image-width" src={imgSrc} alt="" />
        <p className="did">{did}</p>
      </div>
    </>
  );
};

export default ProjectSingleImage;
