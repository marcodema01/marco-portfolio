import "./ProjectFooter.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollToPlugin from "gsap/src/ScrollToPlugin";
import { useRef } from "react";

gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(useGSAP);

interface ProjectFooterProps {
  link?: string;
}

const ProjectFooter = ({ link }: ProjectFooterProps) => {
  const container = useRef<HTMLDivElement>(null);
  const { contextSafe: contextSafe } = useGSAP({ scope: container });

  const scrollOnTop = contextSafe(() => {
    gsap.to(window, { duration: 2, scrollTo: 0 });
  });

  return (
    <>
      <div className="footer-container" ref={container}>
        <h4 className="footer-link" onClick={scrollOnTop}>
          Back on top
        </h4>
        {link && (
          <a className="footer-link" href={link} target="_blank">
            <h4>Know more</h4>
          </a>
        )}
      </div>
    </>
  );
};

export default ProjectFooter;
