import type { ReactNode } from "react";

interface ProjectTextWithTitleProps {
  title: string;
  text: ReactNode;
}

const ProjectTextWithTitle = ({ title, text }: ProjectTextWithTitleProps) => {
  return (
    <>
      <div className="prj-overview">
        <h4 className="prj-h">{title}</h4>
        <p className="prj-p">{text}</p>
      </div>
    </>
  );
};

export default ProjectTextWithTitle;
