// Skills.jsx
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import "./skills.scss";

const skills = [
  { name: "HTML", icon: "/public/htmllogo.png" },
  { name: "CSS", icon: "/public/csslogo.png" },
  { name: "JavaScript", icon: "/public/jslogo.png" },
  { name: "React", icon: "/public/reactlogo.png" },
  { name: "Git", icon: "/public/gitlogo.png" },
  { name: "Github", icon: "/public/githublogo (1).png" },
  { name: "C", icon: "/public/clogo.png" },
  { name: "C++", icon: "/public/cpplogo.png" },
  { name: "Tailwind", icon: "/public/Tailwind CSS.png" },
  { name: "Bootstrap", icon: "/public/bootstraplogo.png" },
  { name: "MongoDB", icon: "/public/MongoDB.png" },
  { name: "ExpressJS", icon: "/public/Express.png" },
  { name: "NodeJS", icon: "/public/Node.js.png" },
  { name: "Framer-Motion", icon: "/public/framerr.png"},
  { name: "Redux", icon: "/public/Redux.png"},

];

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="skills-section">
      <h2 className="skills-heading" data-aos="fade-up">
        Technical Skills
        <div className="progressBar"></div>
      </h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div
            key={skill.name}
            className="skill-card"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="skill-icon-wrapper">
              <img 
                src={skill.icon} 
                alt={`${skill.name} icon`} 
                className="skill-icon" 
              />
            </div>
            <p className="skill-name">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;