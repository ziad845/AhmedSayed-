import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./skills.css";

import { FaFigma, FaGitAlt, FaFileExcel, FaDatabase, FaChartBar } from "react-icons/fa";
import { SiCplusplus, SiPython, SiTableau } from "react-icons/si";

const Skills = () => {
  const skills = [
    { name: "SQL Server", icon: <FaDatabase />, color: "sql-server" },
    { name: "Power BI", icon: <FaChartBar />, color: "powerbi" }, // أيقونة بديلة مشابهة
    { name: "Figma", icon: <FaFigma />, color: "figma" },
    { name: "Git", icon: <FaGitAlt />, color: "git" },
    { name: "C++", icon: <SiCplusplus />, color: "cpp" },
    { name: "Excel", icon: <FaFileExcel />, color: "excel" },
    { name: "Python", icon: <SiPython />, color: "python" },
    { name: "Tableau", icon: <SiTableau />, color: "tableau" },
  ];

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="skills-page flex">
      <h1 className="skills-title">My Skills</h1>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`skill-item ${skill.color}`}
            data-aos="zoom-in"
            data-aos-delay={`${index * 100}`}
          >
            <div className="skill-icon">{skill.icon}</div>
            <p className="skill-name">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
