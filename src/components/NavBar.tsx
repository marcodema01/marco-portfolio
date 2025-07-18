import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "./NavBar.css";
import { SplitText } from "gsap/SplitText";
import { useRef } from "react";
import { Link } from "react-router-dom";

gsap.registerPlugin(useGSAP);

const NavBar = () => {
  const container = useRef<HTMLDivElement>(null);
  const textContainer = useRef<HTMLParagraphElement>(null);
  const textRefs = [
    useRef<HTMLParagraphElement>(null),
    useRef<HTMLParagraphElement>(null),
    useRef<HTMLParagraphElement>(null),
    useRef<HTMLParagraphElement>(null),
  ];

  const splitInstances = useRef<(SplitText | null)[]>([null, null, null, null]);

  const { contextSafe: contextSafeNav } = useGSAP({ scope: container });
  const { contextSafe: contextSafeText } = useGSAP({ scope: textContainer });

  useGSAP(() => {
    textRefs.forEach((ref, index) => {
      if (ref.current) {
        splitInstances.current[index] = new SplitText(ref.current, {
          type: "chars",
        });
      }
    });

    return () => {
      splitInstances.current.forEach((split) => {
        split?.revert();
      });
    };
  }, [textRefs]);

  const onMouseTextAnim = contextSafeText((index: number) => {
    const split = splitInstances.current[index];
    if (!split) return;

    gsap.killTweensOf(split.chars);

    gsap.set(split.chars, { y: 0, opacity: 1 });

    gsap.from(split.chars, {
      y: 150,
      opacity: 0,
      duration: 0.7,
      ease: "power4",
      stagger: 0.04,
    });
  });

  const onMouseEnterAnimation = contextSafeNav(() => {
    gsap.to(".navbar-animation", {
      scaleY: "1",
      duration: 0.7,
      transformOrigin: "center",
    });

    gsap.to(".nav-text", {
      filter: "invert(1)",
      duration: 0.4,
    });
  });

  const onMouseLeaveAnimation = contextSafeNav(() => {
    gsap.to(".navbar-animation", {
      scaleY: "0",
      duration: 0.7,
      transformOrigin: "center",
    });

    gsap.to(".nav-text", {
      filter: "invert(0)",
      duration: 0.4,
    });
  });

  return (
    <div
      onMouseEnter={onMouseEnterAnimation}
      onMouseLeave={onMouseLeaveAnimation}
      className="container"
      ref={container}>
      <div className="navbar-animation"></div>
      <div className="nav-text-container" ref={textContainer}>
        <div className="nav-text" onMouseEnter={() => onMouseTextAnim(0)}>
          <p className="nav-p-number">01</p>
          <p className="nav-p" ref={textRefs[0]}>
            <Link to="/">Projects</Link>
          </p>
        </div>
        <div className="nav-text" onMouseEnter={() => onMouseTextAnim(1)}>
          <p className="nav-p-number">02</p>
          <p className="nav-p" ref={textRefs[1]}>
            <a href={`/#/playground`}>Playground</a>
          </p>
        </div>
        <div className="nav-text" onMouseEnter={() => onMouseTextAnim(2)}>
          <p className="nav-p-number">03</p>
          <p className="nav-p" ref={textRefs[2]}>
            <a href={`/#/about`}>About</a>
          </p>
        </div>
        <div className="nav-text" onMouseEnter={() => onMouseTextAnim(3)}>
          <p className="nav-p-number">04</p>
          <p className="nav-p" ref={textRefs[3]}>
            <a href={`/#/contacts`}>Contacts</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
