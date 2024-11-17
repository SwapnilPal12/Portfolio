// Skills.jsx
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import "./skills.scss";

const skills = [
  { name: "HTML", icon: "/htmllogo.png" },
  { name: "CSS", icon: "/csslogo.png" },
  { name: "JavaScript", icon: "/jslogo.png" },
  { name: "React", icon: "/reactlogo.png" },
  { name: "Git", icon: "/gitlogo.png" },
  { name: "Github", icon: "/githublogo (1).png" },
  { name: "C", icon: "/clogo.png" },
  { name: "C++", icon: "/cpplogo.png" },
  { name: "Tailwind", icon: "/Tailwind CSS.png" },
  { name: "Bootstrap", icon: "/bootstraplogo.png" },
  { name: "MongoDB", icon: "/MongoDB.png" },
  { name: "ExpressJS", icon: "/Express.png" },
  { name: "NodeJS", icon: "/Node.js.png" },
  { name: "Framer-Motion", icon: "/framerr.png"},
  { name: "Redux", icon: "/Redux.png"},

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