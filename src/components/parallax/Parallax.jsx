import { useRef } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = ({ type }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background:
          type === "Skills"
            ? "background-color: #212121"
            : "background-color: #212121",
      }}
    >
      <motion.h1 style={{ y: yText }}>
        {type === "Skills" ? "My Skills" : "My Projects"}
      </motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div
        className="planets"
        style={{
          y: yBg,
          backgroundImage: `url(${
            type === "Skills" ? "/planets.png" : "/sun.png"
          })`,
        }}
      ></motion.div>
      <motion.div  className="stars"></motion.div>
    </div>
  );
};

export default Parallax;