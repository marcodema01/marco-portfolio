import Heading from "../components/Heading";
import NavBar from "../components/NavBar";
import "./About.css";

const About = () => {
  return (
    <div className="app-container">
      <div className="about-bg"></div>
      <Heading
        title={
          <>
            <span>I am</span> Marco
          </>
        }
        description={
          <>
            An industrial and interaction design student based in Italy. <br />{" "}
            Driven by curiosity and always wanting to learn new stuff.
          </>
        }></Heading>
      <NavBar></NavBar>
      <div>
        <p className="about-info">
          I studied industrial design at{" "}
          <a target="_blank" href="https://www.design.polimi.it/">
            Milan Politecnico
          </a>{" "}
          and am currently studying interaction design at the{" "}
          <a
            target="_blank"
            href="https://maind.supsi.ch/master-interaction-design/en">
            University of Applied Sciences of Southern Switzerland.
          </a>{" "}
          <br /> <br />{" "}
          <p className="bigger about-info-text-only">
            Reach out to me: demartino.work@gmail.com
          </p>
        </p>
      </div>
    </div>
  );
};

export default About;
