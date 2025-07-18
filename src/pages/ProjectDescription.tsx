import "./ProjectDescription.css";
import ProjectSingleImage from "../components/ProjectSingleImage";
import ProjectTextWithTitle from "../components/ProjectTextWithTitle";
import ImageRow from "../components/ImageRow";
import ImagesGrid from "../components/ImagesGrid";
import ImagesGrid2 from "../components/ImagesGrid2";
import VideoImageGrid from "../components/VideoImageGrid";
import SoundTrack from "../components/SoundTrack";
import ImageGallery from "../components/ImageGallery";
import VideoComponent from "../components/VideoComponent";
import ProjectFooter from "../components/ProjectFooter";

const ProjectDescription = () => {
  const img = (path: string) => `${import.meta.env.BASE_URL}${path}`;

  return (
    <>
      {/* <div className="herobg">
        <img
          className="cover-image-width"
          src="/images/heroExMachina.gif"
          alt="boh"
        />
      </div> */}
      <div className="prj-container">
        <ProjectTextWithTitle
          title={"Overview"}
          text={
            "Ex Machina is an interactive installation that immerses visitors in the heart of an artificially generated cult set between a past shaped by ancient rituals and a post-industrial future where artificial artifacts become icons of worship. Three objects act as a bridge between reality and the cult’s domain, their forms reverberating like a distorted echo within the archive’s images. By grasping and engaging with these objects, visitors navigate a photographic archive composed of fleeting, stolen glimpses into the cult’s existence, where gestures transform into rituals."
          }></ProjectTextWithTitle>
        <VideoComponent videoSrc="https://frabjous-malasada-dd5ef3.netlify.app/video.mp4"></VideoComponent>
        <ImagesGrid
          img1={img("/images/exmachina/grid1.jpg")}
          img2={img("/images/exmachina/grid2.jpg")}
          img3={img("/images/exmachina/grid3.jpg")}
          did1=""
          did2=""
          did3=""></ImagesGrid>
        <ProjectTextWithTitle
          title={"The concept"}
          text="The idea initially arises from the intention of placing a medium at the center of the installation—an object capable of existing simultaneously both in the reality of the viewer and in the artificially generated reality of the images. Interaction with it creates a sense of misalignment with reality, catapulting the visitor into the reality of the archive. After generating various ideas around this theme, we decided to pursue the artificial creation of a religious cult. Religious artifacts, since the dawn of time, have carried with them a legacy of superstitions and beliefs—what would happen if an artifact truly had power?"></ProjectTextWithTitle>
        <ProjectSingleImage
          width="project-single-image-small"
          imgSrc={img(
            "/images/exmachina/illustration.png"
          )}></ProjectSingleImage>
        <ProjectTextWithTitle
          title={"The idea"}
          text="Ex Machina tells the story of a religious cult set in an undefined time, balancing between a past shaped by ancient rituals and a post-industrial future where artificial artifacts become objects of worship. 
          Each photograph captures a moment in the life of the cult, each archive an aspect of the religion. From acts of intimate contemplation to the frenetic construction of metallic structures, passing through unsettling initiation rites, the cult unfolds before the eyes of those who choose to interact with it.
          Three objects exist in our reality, somewhere between archaeological relics and symbols of a possible future, serving as a bridge between reality and the cult’s archives."></ProjectTextWithTitle>
        <ProjectSingleImage
          width="project-single-image-large"
          imgSrc={img("/images/exmachina/sketch.png")}></ProjectSingleImage>
        <ProjectTextWithTitle
          title="The objects"
          text={
            <>
              The process of designing the objects was preceded by a
              schematization of possible forms and their role within the
              navigation of the archive. From there, we chose three paths. The
              first object would be linked to the concept of aggregation, the
              second to contemplation, and the third to power—three themes
              closely tied to the notion of worship.
              <br /> <br />
              Staying true to the project title Ex-Machina, we aimed to embody
              the cult of the machine in every detail. To achieve this, we
              designed three objects inspired directly by machine aesthetics. We
              generated a dataset of images representing these objects, selected
              the most fitting ones, and carefully refined them into their final
              forms.
            </>
          }></ProjectTextWithTitle>
        <ImageRow
          imgSrc1={img("/images/exmachina/generated1.jpg")}
          did1="AI generated image"
          imgSrc2={img("/images/exmachina/generatedmesh.gif")}
          did2="First 3D mesh"
          imgSrc3={img("/images/exmachina/mesh.jpg")}
          did3="Finished design"></ImageRow>
        <ImageRow
          imgSrc1={img("/images/exmachina/generated2.png")}
          did1="AI generated image"
          imgSrc2={img("/images/exmachina/generatedmesh2.gif")}
          did2="First 3D mesh"
          imgSrc3={img("/images/exmachina/mesh2.jpg")}
          did3="Finished design"></ImageRow>
        <ImageRow
          imgSrc1={img("/images/exmachina/generated3.png")}
          did1="AI generated image"
          imgSrc2={img("/images/exmachina/generatedmesh3.gif")}
          did2="First 3D mesh"
          imgSrc3={img("/images/exmachina/mesh3.jpg")}
          did3="Finished design"></ImageRow>
        <ProjectTextWithTitle
          title="The photo archive"
          text={
            <>
              Through Replicate, we had the opportunity to generate the images.
              After gathering various reference archives, we organized them into
              different folders to create distinct tokens based on specific
              needs. In the end, we developed three main tokens for the three
              objects, along with two additional ones for high-quality flash
              photography and close-up shots.
              <br /> <br />
              We generated one archive for every object, keeping in mind the
              three themes we chose before: aggregation, contemplation and
              power.
            </>
          }></ProjectTextWithTitle>
        <ProjectSingleImage
          width="project-single-image-large"
          imgSrc={img("/images/exmachina/tok.png")}></ProjectSingleImage>
        <ImagesGrid
          img1={img("/images/exmachina/agg.gif")}
          img2={img("/images/exmachina/cont.gif")}
          img3={img("/images/exmachina/power.gif")}
          did1="1. Aggregation"
          did2="2. Contemplation"
          did3="3. Power"></ImagesGrid>
        <ProjectTextWithTitle
          title="Prototyping the interaction"
          text={
            <>
              After developing every asset it was time to put them together. We
              though of a projector that would present the three different
              archives of images we generated: aggregation, contemplation, and
              power. These three ideas would be materialized through three
              different objects that visitors could pick up and move to interact
              with the image archives.
              <br /> <br />
              When a visitor picks up an object, the corresponding archive
              becomes visible on the wall, accompanied by evocative sounds.
              Picking up a second or third object splits the screen, displaying
              multiple archives simultaneously. The images appear one after the
              other at a speed determined by the object’s inclination: the more
              horizontal it is, the faster the archive progresses, and the
              higher the volume of the accompanying sounds.
            </>
          }></ProjectTextWithTitle>
        <ProjectSingleImage
          width="project-single-image-large"
          imgSrc={img("/images/exmachina/int.gif")}></ProjectSingleImage>
        <ImagesGrid2
          img1={img("/images/exmachina/proto1.jpg")}
          img2={img("/images/exmachina/proto2.jpg")}
          img3={img("/images/exmachina/proto3.jpg")}
          did1="1:5 scaled prototype (galvanized painting)"
          did2="1:5 scaled prototype (chromed painting)"
          did3="Mask Prototype"></ImagesGrid2>
        <ImageRow
          imgSrc1={img("/images/exmachina/ex1.png")}
          did1=""
          imgSrc2={img("/images/exmachina/ex2.png")}
          did2=""
          imgSrc3={img("/images/exmachina/ex3.png")}
          did3=""></ImageRow>
        <ProjectTextWithTitle
          title="Prototyping: the tech"
          text={
            <>
              While this section won’t delve into every detail, the process
              began by breaking down the technical requirements into smaller
              tasks: starting with the physical interaction, then developing the
              on-screen web interface, and finally working on the sound design.
              All these different components communicate through a Supabase
              database.
            </>
          }></ProjectTextWithTitle>
        <ProjectTextWithTitle
          title="Prototyping: the database"
          text={
            <>
              We set up a database using Supabase with a table that can be
              updated and read in real time. The table consists of three rows,
              each corresponding to one of the objects, collecting their data
              and storing it in a structured JSON format.
            </>
          }></ProjectTextWithTitle>
        <ProjectSingleImage
          imgSrc={img("/images/exmachina/data.png")}
          width={"project-single-image-large"}></ProjectSingleImage>
        <ProjectTextWithTitle
          title="Prototyping: the physical int."
          text={
            <>
              The main interactions are picking up the object and manipulating
              it, as schematized in the image above. In order to recognize that
              interaction, each object contains an Arduino Nano ESP32, a small
              rechargeable battery and an accelerometer. The setup is designed
              to be as compact as possible to keep the objects relatively small
              and easy to handle.
              <br />
              <br />
              The Arduino was programmed in C++, with the main features of the
              code being Wi-Fi connectivity, reading data from the
              accelerometer, and sending it to the Supabase database.
            </>
          }></ProjectTextWithTitle>
        <ImagesGrid2
          img1={img("/images/exmachina/physInt.png")}
          img2={img("/images/exmachina/elect2.jpg")}
          img3={img("/images/exmachina/elect.jpeg")}
          did1={""}
          did2={
            "The electronic components inside each objetc: the ESP32, the accelerometer and a battery"
          }
          did3={
            "The three bases glued with the accelerometer; this allows to keep the horizontal position still"
          }></ImagesGrid2>
        <ProjectTextWithTitle
          title="Prototyping: the on-screen int."
          text={
            <>
              From a technical standpoint, another key element is the web
              application, which is coded in JavaScript. The app retrieves data
              from the database and visualizes the photo archive accordingly.
              Specifically, based on the inclination of multiple objects, the
              screen splits, and the photos are displayed at different speeds
              depending on the angle of inclination.
            </>
          }></ProjectTextWithTitle>
        <VideoImageGrid
          img1={img("/images/exmachina/screen.gif")}
          vid2={img("/images/exmachina/oneToTwo.mp4")}
          vid3={img("/images/exmachina/twoToThree.mp4")}
          did1={"Single visualization"}
          did2={"From single to double viz"}
          did3={"From double to thirds viz"}></VideoImageGrid>
        <ProjectTextWithTitle
          title="Prototyping: the sound design"
          text={
            <>
              The final element of the interaction is sound. Each object is
              associated with a specific sound: an “Om” yoga chant for the
              contemplation object; metallic sounds for the aggregation object,
              evoking mystery; and chanting and marching sounds for the power
              object, which recall the atmosphere of a ritual.
            </>
          }></ProjectTextWithTitle>
        <SoundTrack
          src1={img("/images/exmachina/Contemplation.mp3")}
          src2={img("/images/exmachina/Aggregation.mp3")}
          src3={img("/images/exmachina/Power.mp3")}
          did1="Contemplation soundtrack"
          did2="Aggregation soundtrack"
          did3="Power soundtrack"></SoundTrack>
        <ProjectTextWithTitle
          title="The exhibit"
          text={
            <>
              We had the opportunity to present our installation as part of the
              end-of-course exhibition at the Saceba cement factory in Italian
              Switzerland. The space assigned to us was a circular reinforced
              concrete room, where we could project the archive images and
              recreate the experience.
              <br />
              <br />
              The enclosed nature of the room enhanced the project’s sense of
              unease and curiosity. Using a projector placed under the table and
              later concealed with a black cloth, we projected the images onto
              the wall, while the objects were arranged at the entrance of the
              room.
            </>
          }></ProjectTextWithTitle>
        <ImageGallery
          doubleImgSrc={[
            img("/images/exmachina/saceba.jpg"),
            img("/images/exmachina/room.jpg"),
          ]}
          didTextDouble={[
            "Cementificio Saceba, Morbio Inferiore, Switzerland",
            "The enclosed room",
          ]}
          galleryImgSrc={[
            img("/images/exmachina/gallery1.gif"),
            img("/images/exmachina/gallery2.gif"),
            img("/images/exmachina/gallery3.gif"),
            img("/images/exmachina/gallery4.gif"),
          ]}></ImageGallery>
        <ProjectFooter link="https://edu.unstated.co/project/the-god-machine"></ProjectFooter>
      </div>
    </>
  );
};

export default ProjectDescription;
