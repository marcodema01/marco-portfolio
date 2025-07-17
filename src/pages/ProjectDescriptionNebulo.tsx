import "./ProjectDescriptionHorizon.css";
import ProjectSingleImage from "../components/ProjectSingleImage";
import ProjectTextWithTitle from "../components/ProjectTextWithTitle";
import ImagesGrid from "../components/ImagesGrid";
import ImagesGrid2 from "../components/ImagesGrid2";
import ImageGallery from "../components/ImageGallery";
import ProjectFooter from "../components/ProjectFooter";
import VideoComponent from "../components/VideoComponent";
import ImageRow from "../components/ImageRow";
import SoundTrack from "../components/SoundTrack";

const ProjectDescriptionNebulo = () => {
  return (
    <>
      <div className="prj-container">
        <ProjectTextWithTitle
          title={"Overview"}
          text={
            <>
              Nebulo is a portable object that reimagines asthma care through
              playing, storytelling and environment analysis technology. It
              envisions a near-future where children become active agents in
              their own health journeys, not through medicalized routines, but
              through the lens of exploration and adventure. At its core, the
              project introduces a smart companion system designed for asthmatic
              children aged 6-10, combining a portable “exploration module” with
              an intelligent conversational agent and a home “spaceship dock”.
            </>
          }></ProjectTextWithTitle>
        <VideoComponent
          videoSrc={
            "https://frabjous-malasada-dd5ef3.netlify.app/videoNebulo.mp4"
          }></VideoComponent>
        <ImageGallery
          doubleImgSrc={[
            "/images/nebulo/ngallery1.jpg",
            "/images/nebulo/ngallery2.jpg",
          ]}
          didTextDouble={[
            "White functional prototype",
            "Red non-functional prototype",
          ]}
          galleryImgSrc={[
            "/images/nebulo/ngallery3.gif",
            "/images/nebulo/ngallery4.jpg",
            "/images/nebulo/ngallery5.jpg",
            "/images/nebulo/ngallery6.gif",
          ]}></ImageGallery>
        <ImagesGrid2
          img1={"/images/nebulo/id1.jpg"}
          img2={"/images/nebulo/id2.gif"}
          did1={""}
          did2={""}
          did3={""}></ImagesGrid2>
        <ProjectSingleImage
          imgSrc={"/images/nebulo/web.png"}
          width={"project-single-image-large"}></ProjectSingleImage>
        <ProjectTextWithTitle
          title={"The idea"}
          text={
            <>
              Despite growing awareness of pediatric asthma, children still
              struggle to independently manage their condition, while caregivers
              often lack the tools and education to support them effectively.
              Asthma, particularly in its early stages, can be a confusing and
              intimidating experience for both children and parents, raising
              critical questions: How can we support self-management without
              over medicalizing childhood? How can data become empowering,
              rather than anxiety-inducing?
            </>
          }></ProjectTextWithTitle>
        <ProjectSingleImage
          width="project-single-image-small"
          imgSrc="/images/nebulo/idea.png"></ProjectSingleImage>
        <ProjectTextWithTitle
          title={"The solution"}
          text={
            <>
              The system supports daily routines in a playful way. Children
              begin the day by blowing on the module to activate it in the
              exploration mode. As the day progresses, the device monitors
              environmental factors such as air quality, encouraging awareness
              and literacy around asthma triggers. Data is collected passively,
              while interactive moments, like pressing a button to “refuel the
              spaceship”, engage the child in checking the environment without
              overwhelming them with medical jargon. At night, Nebulo summarizes
              the day’s discoveries through the narration of a story, creating a
              sense of closure and routine. Caregivers receive a parallel stream
              of data via an app, helping them collaborate with doctors during
              checkups.
              <br />
              <br />
              The tone of interaction is light, supportive and imaginative,
              framing health monitoring as a shared mission between the child
              and their alien friend. By gamifying and de-dramatizing health
              routines, the project asks: Can care technologies educate without
              inducing anxiety? Can play become a therapeutic infrastructure for
              children with chronic conditions?
            </>
          }></ProjectTextWithTitle>
        <ImageGallery
          doubleImgSrc={[
            "/images/nebulo/double1.png",
            "/images/nebulo/double2.png",
          ]}
          doubleImgClass="cover-image-width-only"
          galleryImgSrc={[
            "/images/nebulo/sketch1.png",
            "/images/nebulo/sketch2.png",
            "/images/nebulo/sketch3.png",
            "/images/nebulo/sketch4.png",
          ]}></ImageGallery>
        <ProjectTextWithTitle
          title="The prototype"
          text={
            <>
              The prototype uses an Arduino Nano ESP32 in combination with a
              GC9A01 round LCD TFT screen. Ideally, both the audio recordings
              and animations would be generated by AI based on the context of
              the conversation and user input. However, due to time constraints,
              we developed a prototype that demonstrates the experience, agent
              personality, and interaction through a scripted conversation.
              <br /> <br />
              To ensure smooth interaction during the demonstration, we
              developed a web app that controls the flow of the conversation by
              sending data through a database. In short, the frontend
              communicates via buttons that update specific values in the
              database. The Arduino monitors these changes and responds by
              displaying the corresponding animation on the screen. Since the
              Arduino's memory could not accommodate both animations and audio
              tracks, each button on the frontend (accessible also on mobile
              devices) also triggers the appropriate audio track to play on a
              Bluetooth speaker.
              <br />
              <br />
              More informationabout the prototype can be found {""}
              <a
                href="https://master-interaction-design.notion.site/Nebulo-21a89104ecf9802789bfddef81f5e693#22189104ecf980a38214c00205af35f7"
                target="_blank">
                here
              </a>
            </>
          }></ProjectTextWithTitle>
        <ImagesGrid
          img1={"/images/nebulo/proto3.jpg"}
          img2={"/images/nebulo/proto2.png"}
          img3={"/images/nebulo/proto1.jpg"}
          did1={"Exploded view of the coomponents "}
          did2={"Section view"}
          did3={"Detail of the prototype, the Arduino is visible"}></ImagesGrid>
        <ProjectSingleImage
          imgSrc={"/images/nebulo/proto4.gif"}
          width={"project-single-image-large"}></ProjectSingleImage>
        <ProjectSingleImage
          imgSrc={"/images/nebulo/proto5.gif"}
          width={"project-single-image-large"}></ProjectSingleImage>
        <ProjectTextWithTitle
          title="Nebulo's identity"
          text={
            <>
              To design Nebulo’s identity, we began by exploring how an
              intelligent companion could support children with asthma through
              conversation, motivation, and emotional reassurance. This process
              involved capability testing to assess how current voice
              technologies could deliver playful, contextual, and
              age-appropriate interactions. It also helped define the type of
              input-output patterns, tone of voice, and narrative continuity
              required for Nebulo to feel like a consistent and supportive
              presence.
            </>
          }></ProjectTextWithTitle>

        <ImageRow
          imgSrc1={"/images/nebulo/row1.gif"}
          imgSrc2={"/images/nebulo/row2.gif"}
          imgSrc3={"/images/nebulo/row3.gif"}
          did1={"Turning on"}
          did2={"Listening - blinking"}
          did3={"Storytelling - GIF dispay"}></ImageRow>
        <ProjectTextWithTitle
          title="Nebulo's identity: voice"
          text={
            <>
              We used VoiceMaker for text-to-speech generation, selecting a
              voice that was clear and expressive enough for children to relate
              to. To make the voice feel more child-like and emotionally
              engaging, we adjusted the pitch and speed parameters, lowering the
              tone slightly to evoke a sense of warmth and playfulness. This
              helped us create a vocal presence for Nebulo that feels friendly
              and approachable, encouraging children to interact with the agent
              comfortably during their daily routines.
            </>
          }></ProjectTextWithTitle>
        <SoundTrack
          src1="/images/nebulo/voice.mp3"
          did1="A sample of Nebulo's voice"></SoundTrack>
        <ProjectTextWithTitle
          title="Nebulo's identity: visuals"
          text={
            <>
              We designed Nebulo as a small explorer with a curious and friendly
              personality and a visually distinctive identity. The character was
              developed to resonate with children's imaginations, combining
              soft, rounded shapes and expressive animations to inspire trust
              and empathy.
              <br /> <br />
              The story of Nebulo, a space traveler who accompanies the child to
              explore “new planets” (real-world environments), creates a
              narrative framework that transforms daily health monitoring into a
              collaborative mission. This design choice not only makes the
              experience more playful and emotionally engaging, but also helps
              reduce the anxiety often associated with medical routines,
              reframing them as moments of discovery and care.
            </>
          }></ProjectTextWithTitle>
        <ProjectSingleImage
          width="project-single-image-large"
          imgSrc="/images/nebulo/visuals.gif"
          did="Nebulo's visual feedbacks during the day"></ProjectSingleImage>
        <ProjectSingleImage
          width="project-single-image-large"
          imgSrc="/images/nebulo/story.gif"
          did="Nebulo's visual feedbacks when talking about the explorations of the day"></ProjectSingleImage>
        <ProjectFooter link="https://master-interaction-design.notion.site/Nebulo-21a89104ecf9802789bfddef81f5e693#21a89104ecf98158b4a7f6583b925664"></ProjectFooter>
      </div>
    </>
  );
};

export default ProjectDescriptionNebulo;
