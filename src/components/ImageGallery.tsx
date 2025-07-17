import "./ImageGallery.css";

interface ImageGalleryProps {
  doubleImgSrc?: string[];
  galleryImgSrc: string[];
  didTextDouble?: string[];
  didTextGallery?: string[];
  doubleImgClass?: string;
}

const ImageGallery = ({
  doubleImgSrc,
  galleryImgSrc,
  didTextDouble,
  didTextGallery,
  doubleImgClass = "cover-image",
}: ImageGalleryProps) => {
  return (
    <>
      {doubleImgSrc && doubleImgSrc.length === 2 && (
        <div className="double-image">
          <div className="grid1-3">
            <img
              className={doubleImgClass}
              // src="/images/exmachina/saceba.jpg"
              src={doubleImgSrc ? doubleImgSrc[0] : ""}
              alt=""
            />
            <p className="did">
              {/* Cementificio Saceba, Morbio Inferiore, Switzerland */}
              {didTextDouble ? didTextDouble[0] : ""}
            </p>
          </div>
          <div className="grid2-3">
            <img
              className={doubleImgClass}
              // src="/images/exmachina/room.jpg"
              src={doubleImgSrc ? doubleImgSrc[1] : ""}
              alt=""
            />
            <p className="did">
              {/* The enclosed room */}
              {didTextDouble ? didTextDouble[1] : ""}
            </p>
          </div>
        </div>
      )}
      <div className="gallery-container">
        <div className="gallery-el">
          <img
            className="cover-image-width"
            // src="/images/exmachina/gallery1.gif"
            src={galleryImgSrc[0]}
            alt=""
          />
          <p className="did">{didTextGallery ? didTextGallery[0] : ""}</p>
        </div>
        <div className="gallery-el">
          <img
            className="cover-image-width"
            // src="/images/exmachina/gallery2.gif"
            src={galleryImgSrc[1]}
            alt=""
          />
          <p className="did">{didTextGallery ? didTextGallery[1] : ""}</p>
        </div>
        <div className="gallery-el">
          <img
            className="cover-image-width"
            // src="/images/exmachina/gallery3.gif"
            src={galleryImgSrc[2]}
            alt=""
          />
          <p className="did">{didTextGallery ? didTextGallery[2] : ""}</p>
        </div>
        <div className="gallery-el">
          <img
            className="cover-image-width"
            // src="/images/exmachina/gallery4.gif"
            src={galleryImgSrc[3]}
            alt=""
          />
          <p className="did">{didTextGallery ? didTextGallery[3] : ""}</p>
        </div>
      </div>
    </>
  );
};

export default ImageGallery;
