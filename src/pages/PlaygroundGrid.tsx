import "./PlaygroundGid.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const PlaygroundGrid = () => {
  const container = useRef<HTMLDivElement>(null);

  const { contextSafe: contextSafeGrid } = useGSAP({ scope: container });

  const hoverAnimation = contextSafeGrid((e: React.MouseEvent) => {
    const blackBg = e.currentTarget.querySelector(".black");
    const title = e.currentTarget.querySelector(".black-title");
    const text = e.currentTarget.querySelector(".black-text");

    if (!blackBg || !title || !text) return;

    gsap.to(blackBg, {
      scaleY: 1,
      duration: 0.7,
    });
  });

  const hoverLeaveAnimation = contextSafeGrid((e: React.MouseEvent) => {
    const blackBg = e.currentTarget.querySelector(".black");
    const title = e.currentTarget.querySelector(".black-title");
    const text = e.currentTarget.querySelector(".black-text");

    if (!blackBg || !title || !text) return;

    gsap.to(blackBg, {
      scaleY: 0,
      duration: 0.7,
    });
  });

  return (
    <div className="prj-container">
      <div className="parent" ref={container}>
        <div
          onMouseEnter={hoverAnimation}
          onMouseLeave={hoverLeaveAnimation}
          className="div1 max-height position-relative">
          <div className="black"></div>
          <div className="b-text-cont invert-text">
            <h5 className="black-title">Olympus OM-10</h5>
            <p className="black-text">
              3D model and render of the Olympus OM-10, made in fusion
            </p>
          </div>
          <img
            className="cover-image-width"
            src="/images/playground/olympus.jpg"
            alt=""
          />
        </div>
        <div
          className="div2 max-height position-relative"
          onMouseEnter={hoverAnimation}
          onMouseLeave={hoverLeaveAnimation}>
          <div className="black"></div>
          <div className="b-text-cont invert-text">
            <h5 className="black-title">Coffe Tiles</h5>
            <p className="black-text">Packaging design for Borbone</p>
          </div>
          <img
            className="cover-image-width obj-position-right"
            src="/images/playground/borbone.png"
            alt=""
          />
        </div>
        <div
          className="div3 max-height position-relative"
          onMouseEnter={hoverAnimation}
          onMouseLeave={hoverLeaveAnimation}>
          <div className="black"></div>
          <div className="b-text-cont invert-text">
            <h5 className="black-title">B1.3</h5>
            <p className="black-text">Table and chair design for Alias</p>
          </div>
          <img
            className="cover-image-width obj-position-right"
            src="/images/playground/tav2.png"
            alt=""
          />
        </div>
        <div
          className="div4 max-height position-relative"
          onMouseEnter={hoverAnimation}
          onMouseLeave={hoverLeaveAnimation}>
          <div className="black"></div>
          <div className="b-text-cont invert-text">
            <h5 className="black-title">Digital Matrix</h5>
            <p className="black-text">
              Coding of matrix animations on an ESP32
            </p>
          </div>
          <img
            className="cover-image-width"
            src="/images/playground/matrici2.webp"
            alt=""
          />
        </div>
        <div
          className="div5 max-height position-relative"
          onMouseEnter={hoverAnimation}
          onMouseLeave={hoverLeaveAnimation}>
          <div className="black"></div>
          <div className="b-text-cont invert-text">
            <h5 className="black-title">L-O</h5>
            <p className="black-text">
              Prototype of a fridge timer for leftovers
            </p>
          </div>
          <img
            className="cover-image-width"
            src="/images/playground/timer.webp"
            alt=""
          />
        </div>
        <div
          className="div6 max-height position-relative"
          onMouseEnter={hoverAnimation}
          onMouseLeave={hoverLeaveAnimation}>
          <div className="black"></div>
          <div className="b-text-cont invert-text">
            <h5 className="black-title">Flowmix</h5>
            <p className="black-text">Redesign of a Moulinex minipimer</p>
          </div>
          <img
            className="cover-image-width"
            src="/images/playground/minipim.png"
            alt=""
          />
        </div>
        <div
          className="div7 max-height position-relative"
          onMouseEnter={hoverAnimation}
          onMouseLeave={hoverLeaveAnimation}>
          <div className="black"></div>
          <div className="b-text-cont invert-text">
            <h5 className="black-title">Atari</h5>
            <p className="black-text">
              Prototype of an Atari using digital farbication tecniques
            </p>
          </div>
          <img
            className="cover-image-width"
            src="/images/playground/atari.png"
            alt=""
          />
        </div>
        <div
          className="div8 max-height position-relative"
          onMouseEnter={hoverAnimation}
          onMouseLeave={hoverLeaveAnimation}>
          <div className="black"></div>
          <div className="b-text-cont invert-text">
            <h5 className="black-title">Monoknight</h5>
            <p className="black-text">A simple videogame made in javascript</p>
          </div>
          <img
            className="cover-image-width"
            src="/images/playground/mono.gif"
            alt=""
          />
        </div>
        <div
          className="div9 max-height position-relative"
          onMouseEnter={hoverAnimation}
          onMouseLeave={hoverLeaveAnimation}>
          <div className="black"></div>
          <div className="b-text-cont invert-text">
            <h5 className="black-title">Sony walkman</h5>
            <p className="black-text">
              Prototype of a fully functioning walkman using digital farbication
              tecniques and Arduino
            </p>
          </div>
          <img
            className="cover-image-width obj-position-right"
            src="/images/playground/walkman.png"
            alt=""
          />
        </div>
        <div
          className="div10 max-height position-relative"
          onMouseEnter={hoverAnimation}
          onMouseLeave={hoverLeaveAnimation}>
          <div className="black"></div>
          <div className="b-text-cont invert-text">
            <h5 className="black-title">Safe aps</h5>
            <p className="black-text">
              website development for a no-profit association
            </p>
          </div>
          <img
            className="cover-image-width"
            src="/images/playground/safe2.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default PlaygroundGrid;
