import "./ProjectDescription.css";
import ProjectSingleImage from "../components/ProjectSingleImage";
import ProjectTextWithTitle from "../components/ProjectTextWithTitle";
import ImageGallery from "../components/ImageGallery";
import ProjectFooter from "../components/ProjectFooter";
import ImagesGrid2 from "../components/ImagesGrid2";

const ProjectDescriptionDdose = () => {
  const img = (path: string) => `${import.meta.env.BASE_URL}${path}`;

  return (
    <>
      <div className="prj-container">
        <ProjectTextWithTitle
          title={"Overview"}
          text={
            <>
              DesignDose is a low-code website built entirely with Webflow. The
              project is a playful and ironic exploration of creative
              communication. It’s an interactive experience that invites users
              to explore the underlying concept without taking things too
              seriously.
            </>
          }></ProjectTextWithTitle>
        <ProjectSingleImage
          imgSrc={img("/images/ddose/intro.gif")}
          width={"project-single-image-large"}
          did='The website opens with an ironic question: "Are you a desperate designer?"'></ProjectSingleImage>
        <ImagesGrid2
          img1={img("/images/ddose/critiscon.gif")}
          img2={img("/images/ddose/banner.gif")}
          img3={img("/images/ddose/filters.gif")}
          did1=""
          did2=""
          did3=""></ImagesGrid2>
        <ProjectTextWithTitle
          title="Brand identity"
          text={
            <>
              The brand identity was carefully crafted, drawing heavy
              inspiration from pharmacy logos and aesthetics, blended with
              techno graphic design. We began with the logo and primary colors,
              then moved on to selecting fonts and secondary colors that
              reflected the techno theme — finally arriving at the design of the
              products themselves.
              <br /> <br />
            </>
          }></ProjectTextWithTitle>
        <ImageGallery
          doubleImgSrc={[
            img("/images/ddose/lnero.png"),
            img("/images/ddose/lchiaro.png"),
          ]}
          didTextDouble={[
            "Brand identity: dark logo",
            "Brand identity: light logo",
          ]}
          didTextGallery={[
            '"The underground pharmacy for desperate designers"',
            "Fonts and primary colors",
            "Secondary colors, products and their categories: liquid, solid and creamy",
          ]}
          galleryImgSrc={[
            img("/images/ddose/1.png"),
            img("/images/ddose/fonts.png"),
            img("/images/ddose/fin.png"),
          ]}></ImageGallery>
        <ProjectTextWithTitle
          title="The products"
          text={
            <>
              The products were designed in Blender, which we also used for
              rendering and animation. Their shapes are minimalistic, with a
              touch of brutalism.
              <br /> <br />
              The animations were refined in After Effects, exported using
              Bodymovin, and converted into Lottie files.
            </>
          }></ProjectTextWithTitle>
        <ProjectSingleImage
          width="project-single-image-large"
          imgSrc={img("/images/ddose/blender.png")}></ProjectSingleImage>
        <ProjectTextWithTitle
          title="The information architecture"
          text={
            <>
              The site’s content is structured so that, starting from the
              homepage, users can access the landing pages for each product.
              These pages are interconnected to ensure a seamless and cyclical
              browsing experience.
              <br /> <br />
              At any point, users can access a “Products” page, which offers a
              simpler and clearer grid overview of all items. There’s also an
              “About” page that provides additional context on the project.
            </>
          }></ProjectTextWithTitle>
        <ProjectSingleImage
          width="project-single-image-large"
          imgSrc={img("/images/ddose/architettura.png")}
          did="The scheme of the whole website"></ProjectSingleImage>
        <ProjectSingleImage
          width="project-single-image-large"
          imgSrc={img("/images/ddose/contenuti.png")}
          did="The architecture of the landing pages of every product."></ProjectSingleImage>
        <ProjectFooter link="https://designdose-srl.webflow.io/"></ProjectFooter>
      </div>
    </>
  );
};

export default ProjectDescriptionDdose;
