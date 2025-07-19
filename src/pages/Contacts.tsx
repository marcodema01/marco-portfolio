import Heading from "../components/Heading";
import NavBar from "../components/NavBar";
import "./About.css";

const Contacts = () => {
  return (
    <div className="app-container">
      <div className="about-bg"></div>
      <Heading
        title={
          <>
            <span>Reach</span> out
          </>
        }
        description={
          <>
            If you found my projects interesting,
            <br /> here you can find my contacts.
          </>
        }></Heading>
      <NavBar></NavBar>
      <div>
        <p className="about-info">
          My email:{" "}
          <a target="_blank" href="mailto:demartino.work@gmail.com">
            demartino.work@gmail.com
          </a>{" "}
          <br />
          <br />
          My LinkedIn:{" "}
          <a
            target="_blank"
            href="https://www.linkedin.com/in/marco-de-martino-935229224">
            Marco De Martino
          </a>{" "}
        </p>
      </div>
    </div>
  );
};

export default Contacts;
