import "./ProjectDescription.css";
import ProjectSingleImage from "../components/ProjectSingleImage";
import ProjectTextWithTitle from "../components/ProjectTextWithTitle";
import ImagesGrid from "../components/ImagesGrid";
import ImageGallery from "../components/ImageGallery";
import VideoComponent from "../components/VideoComponent";
import ProjectFooter from "../components/ProjectFooter";

const ProjectDescriptionRino = () => {
  return (
    <>
      <div className="prj-container">
        <ProjectTextWithTitle
          title={"Overview"}
          text={
            <>
              Rino is a motion detector that uses machine learning to turn
              mealtime into an interactive experience. It communicates with
              guests through its balance, playfully drawing attention to the
              social moment and encouraging meaningful interaction around the
              table.
            </>
          }></ProjectTextWithTitle>
        <VideoComponent videoSrc="/images/rino/rino.mp4"></VideoComponent>
        <ImagesGrid
          img1="/images/rino/poster.png"
          img2="/images/rino/rgrid2.jpg"
          img3="/images/rino/rGrid.jpg"
          did1=""
          did2=""
          did3=""></ImagesGrid>
        <ProjectTextWithTitle
          title="The concept"
          text={
            <>
              The main challenge was to design an object capable of thought. To
              guide us, we began imagining situations where an everyday object
              could communicate with people. After exploring several scenarios,
              we were drawn to the idea of conviviality: shared meals and the
              act of being together.
              <br /> <br />
              We decided to approach the challenge with a playful mindset, both
              in what Rino would communicate and how it would do so. We were
              intrigued by the idea that the object could fall, symbolically
              "die" along with the conversation. Much like canaries in coal
              mines, Rino tips over when a guest at the table gets distracted
              and pulls out their phone.
            </>
          }></ProjectTextWithTitle>
        <ProjectSingleImage
          width="project-single-image-large"
          imgSrc="/images/rino/sketch.png"></ProjectSingleImage>
        <ProjectTextWithTitle
          title="The prototype: making it fall"
          text={
            <>
              The first step was to design a mechanism that would allow Rino to
              fall. Our initial idea was to use a servo motor to shift a weight
              placed at the top of the object, causing it to lose balance and
              tip over.
              <br /> <br />
              Through multiple iterations, we found the right angle and weight
              needed to make our 3D-printed prototype fall as intended. The
              entire mechanism was controlled using an Arduino Nano ESP32, which
              operated the servo motor.
            </>
          }></ProjectTextWithTitle>

        <ProjectSingleImage
          width="project-single-image-large"
          imgSrc="/images/rino/interno.gif"
          did="A render of how the inside of Rino looks like"></ProjectSingleImage>
        <ProjectTextWithTitle
          title="The prototype: coding"
          text={
            <>
              To bring Rino to life, we used the ChatGPT API, connected it to a
              web interface, and programmed the Arduino to communicate with the
              web app via the computer's serial port.
              <br /> <br />
              The web app is built with JavaScript and uses the ChatGPT API to
              detect which person is using their phone. It then sends this
              information to the Arduino, triggering Rino’s response.
            </>
          }></ProjectTextWithTitle>
        <ProjectSingleImage
          width="project-single-image-large"
          imgSrc="/images/rino/code1.png"
          did="During the Arduino setup we initialize the serial, attach the servo and the LEDs"></ProjectSingleImage>
        <ProjectSingleImage
          width="project-single-image-large"
          imgSrc="/images/rino/code2.png"
          did="During the loop we look for data coming through the serial port and move the servo motor accordingly"></ProjectSingleImage>
        <ProjectSingleImage
          width="project-single-image-large"
          imgSrc="/images/rino/code3.png"
          did="ChatGPT was prompted to respond with a JSON object stating right or left accordingly"></ProjectSingleImage>
        <ImageGallery
          doubleImgSrc={["/images/rino/v1.gif", "/images/rino/v2.gif"]}
          galleryImgSrc={[]}></ImageGallery>
        <ProjectFooter></ProjectFooter>
      </div>
    </>
  );
};

export default ProjectDescriptionRino;
