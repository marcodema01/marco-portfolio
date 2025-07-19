import "./ProjectDescriptionHorizon.css";
import ProjectSingleImage from "../components/ProjectSingleImage";
import ProjectTextWithTitle from "../components/ProjectTextWithTitle";
import ImagesGrid from "../components/ImagesGrid";
import ImagesGrid2 from "../components/ImagesGrid2";
import ImageGallery from "../components/ImageGallery";
import ProjectFooter from "../components/ProjectFooter";

const ProjectDescriptionHorizon = () => {
  const img = (path: string) => `${import.meta.env.BASE_URL}${path}`;

  return (
    <>
      <div className="prj-container">
        <ProjectTextWithTitle
          title={"Overview"}
          text="Horizon is a generative AI-powered assistant designed for small tourism
        providers, helping them craft personalized strategies and content to
        promote hidden destinations. By blending local expertise with real time trend analysis, Horizon gives small business the opportunity to stand
        out in an overcrowded market."></ProjectTextWithTitle>
        <ProjectSingleImage
          width="project-single-image-large"
          imgSrc="/images/horizon/horizonHero.gif"></ProjectSingleImage>
        <ImageGallery
          doubleImgSrc={[]}
          galleryImgSrc={[
            img("/images/horizon/proto1.gif"),
            img("/images/horizon/proto3.gif"),
            img("/images/horizon/proto2.gif"),
          ]}
          didTextGallery={[
            "The user sets his goals during the on-boarding phase, this data drives the analyses and interactions of the workspace.",
            "The user can ask Horizon to explore a specific topic or trend.",
            "Horizon, based on the user's interactions, generates ideas and strategies to leverage a trend.",
          ]}></ImageGallery>
        <ProjectTextWithTitle
          title={"The brief"}
          text={
            <>
              The main brief was asking for an AI powered solution that could
              help travel experience providers optimize their oﬀerings by
              predicting demand, personalizing tour recommendations, and
              automating logistics.
              <br />
              In particular, we were asked to focus on the B2B market.
              <br />
              <br />
              After a brief analysis of the market, we decided to focus on three
              main problems: overcrowding of popular destinasions, the
              businesses over reliance on short and intense high seasons and the
              evolving needs and expectaions of the travelers.
            </>
          }></ProjectTextWithTitle>
        <ProjectSingleImage
          width="project-single-image-small"
          imgSrc={img("/images/horizon/conceptH.png")}></ProjectSingleImage>
        <ProjectTextWithTitle
          title={"The idea"}
          text={
            <>
              Horizon is a generative AI-powered strategic assistant designed
              specifically for small and medium-sized travel experience
              providers (like tour guides and local businesses). It helps them
              navigate tourism trends, craft compelling marketing strategies,
              and reach new audiences, all without losing the authenticity and
              personal touch that defines their services.
              <br />
              <br />
              Horizon is not just a chatbot or itinerary generator, it’s a
              collaborative workspace that acts like a creative partner. It
              understands the user’s goals, business identity, and challenges,
              then uses real-time trend analysis and natural language
              interaction to co-create strategies.
              <br /> <br />
              We built a framework to organize the information that Horizon
              would use to generate the strategies, which is also the
              information Horizon would try to obtain from the user.
            </>
          }></ProjectTextWithTitle>
        <ProjectSingleImage
          width="project-single-image-large"
          imgSrc={img("/images/horizon/pillars.png")}
          did="Horizon's core pillars"></ProjectSingleImage>
        <ProjectTextWithTitle
          title="The research"
          text={
            <>
              The research phase of the project was essential and accompanied us
              throughout the entire design process. After an initial market
              analysis to better understand the brief and the core issues we
              wanted to address (overtourism, seasonality, and traveler
              expectations), we structured our research into several stages:
              <br />
              1. Desk research: We deepened our understanding of the project's
              theme, exploring emerging industry trends, shifts in traveler
              behavior, and new technologies.
              <br />
              2. Interviews: We conducted interviews with industry
              professionals, tour guides, small and medium enterprises, and
              travelers.
              <br />
              3. Synthesis and mapping: In this phase, we identified the most
              valuable insights and the opportunities they revealed.
            </>
          }></ProjectTextWithTitle>
        <ImagesGrid
          img1={img("/images/horizon/research1.png")}
          img2={img("/images/horizon/research2.png")}
          img3={img("/images/horizon/research3.jpg")}
          did1={""}
          did2={""}
          did3={""}></ImagesGrid>
        <ProjectTextWithTitle
          title="The features"
          text={
            <>
              The platform main features are:
              <br />
              1. Profile: a personalized setup where users define their business
              identity and values, strategic goals (e.g., increasing bookings,
              reaching new audiences). Horizon uses this information to tailor
              all suggestions and interactions.
              <br />
              2. Workspace: a dynamic, collaborative area where users receive
              strategy proposals, give feedback, iterate content, assign tasks,
              visualize and structure long-term strategic plans. This is the
              heart of Horizon’s creativity and planning support.
              <br />
              3. Chat: an open, AI-powered conversation interface, here the user
              can ask questions, request content suggestions, marketing ideas,
              or campaign feedback. It's a strategic co-pilot that understands
              both data and your voice.
              <br />
              4. Real-Time Trend Analysis: Horizon monitors and interprets
              emerging travel trends, platform-specific content patterns (e.g.,
              what’s trending on TikTok or Instagram) and consumer behavior
              shifts. Horizon transforms trend data into actionable strategies.
            </>
          }></ProjectTextWithTitle>
        <ProjectSingleImage
          width="project-single-image-large"
          imgSrc={img("/images/horizon/features.png")}></ProjectSingleImage>
        <ProjectTextWithTitle
          title="The agent personality"
          text={
            <>
              Horizon's personality was not an afterthought, but an important
              factor of theuser experience. Horizon’s personality is
              collaborative, curious, and supportive. It doesn’t just deliver
              answers, it asks questions, listens actively, and learns from
              every interaction.
            </>
          }></ProjectTextWithTitle>
        <ProjectSingleImage
          width="project-single-image-large"
          imgSrc={img("/images/horizon/personality.png")}></ProjectSingleImage>
        <ProjectTextWithTitle
          title="The prototype"
          text={
            <>
              The prototype was developed using Figma, where we created a
              functional mockup of the main features. The prototype allowed us
              to test the workspace and the main interactions.
              <br /> <br />
              Figma wasn't enough, it was importanto to test the agent's
              personality and effectiveness. To do so we developed a simple GPT
              agent that could simulate Horizon's features without the need of a
              UI.
            </>
          }></ProjectTextWithTitle>
        <ImagesGrid2
          img1={img("/images/horizon/gpt.png")}
          img2={img("/images/horizon/proto5.png")}
          did1={"The GPT agent."}
          did2={
            "The Figma prototype was developed using components and variants."
          }
          did3={""}></ImagesGrid2>
        <ProjectFooter></ProjectFooter>
      </div>
    </>
  );
};

export default ProjectDescriptionHorizon;
