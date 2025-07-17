import Heading from "../components/Heading.tsx";
import NavBar from "../components/NavBar.tsx";
import ProjectCarousel from "../components/ProjectCarousel.tsx";

const title = "<span>My</span> Projects";
const description =
  " A selection of projects spanning through these last years. <br /> If you want to see more don't forget to check out the playground section!";

const MyProjects = () => {
  return (
    <div className="app-container">
      <Heading title={<>{title}</>} description={<>{description}</>}></Heading>
      <NavBar></NavBar>
      <ProjectCarousel></ProjectCarousel>
    </div>
  );
};

export default MyProjects;
