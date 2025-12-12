import { li, p } from "framer-motion/client";
import React from "react";

const Qualifications = () => {

  const education = [
    {
      degree: "B.Tech in Computer Science",
      college: "Shrinathji Institute of Technology & Engineering ",
      year: "2022 - Present",
      description: "Focused on Full Stack Development, AI & Database Management Systems.",
    },
    {
      degree: "DBMS Certification (MySQL)",
      college: "IIT through NPTEL",
      year: "2024",
      description: "Learned advanced SQL, normalization, and query optimization.",
    },
  ];

  const skills = [
    "C++", "Python", "JavaScript", "React.js", "Node.js",
    "MongoDB", "Express.js", "Tailwind CSS", "Git & GitHub", "MySQL",
  ];

  const experience = [
    {
      title: "Web Development Intern",
      company: "Cognifyz Technologies",
      year: "May 2025 - June 2025",
      description: ["- Worked as part of a development team handling both front-end and back-end tasks.", "- Demonstrated strong problem-solving abilities and commitment to project goals.", "- Contributed to real-world web development tasks and collaborative software solutions."],
    },
    {
      title: "Freelance Web Developer",
      company: "Self-employed",
      year: "2023 - Present",
      description: "Built dynamic portfolio and business websites for clients.",
    },
  ];


  return (
    <div className="py-16 max-w-5xl mx-auto px-6 mb-20 text-white">
      <h2 className="text-4xl font-bold text-center mb-10 text-white">
        👨🏻‍🎓 Qualifications
      </h2>
      
      {/* Education Section */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold mb-4 text-blue-600">Education</h3>
        <div className="space-y-6 ">
          {education.map((edu, i) => (
            <div
              key={i}
              className="p-6 rounded-xl border border-white/40 shadow-[0_0_10px_rgba(255,255,255,0.4)] hover:shadow-[0_0_18px_rgba(255,255,255,0.5)] transition"
            >
              <h4 className="text-xl font-semibold">{edu.degree}</h4>
              <p className="text-gray-200">{edu.college}</p>
              <p className="text-sm text-gray-400">{edu.year}</p>
              <p className="mt-2 text-gray-400">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Experience Section */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold mb-4 text-blue-600">Experience</h3>
        <div className="space-y-6">
          {experience.map((exp, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl border border-white/40 shadow-[0_0_10px_rgba(255,255,255,0.4)] hover:shadow-[0_0_18px_rgba(255,255,255,0.5)] transition"
            >
              <h4 className="text-xl font-semibold">{exp.title}</h4>
              <p className="text-gray-200">{exp.company}</p>
              <p className="text-sm text-gray-400">{exp.year}</p>
              
              {/* Agr descriptions bahot se points me array hua then ul ban jaegi baki normal p tag */}
              {Array.isArray(exp.description) ? (
                <ul className="">
                  {exp.description.map((point, index) => (
                    <li key={index} className="text-gray-200">{point}</li>
                  ))}
                </ul>
              ) : (
                <p className="mt-2 text-gray-200">{exp.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Skills Section */}
      <div>
        <h3 className="text-2xl font-bold mb-4 text-blue-600">Skills</h3>
        <div className="flex flex-wrap gap-6">
          {skills.map((skill, i) => (
            <span
              key={i}
              className="border border-gray-200 shadow-[0_0_12px_rgba(0,123,255,0.5)] hover:shadow-[0_0_30px_rgba(0,123,255,0.7)] text-white px-4 py-2 rounded-full font-medium text-sm"
              style={{ backgroundColor: '#155DFC' }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Qualifications

// Array.isArray() ?
// It's a javascript buildin function. this checks that a value is array or not. In our case, description has both normal string and array of strings (array) so this will check if there is array then run 1st condition otherwise run 2nd condition.
// ex: Array.isArray([1, 2, 3]) = true
// Array.isArray("hello") = false