import React from 'react';

const projectss = [
  {
    id: 1,
    title: "MERN Projects",
    description: "A full-stack blog platform",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    github: "https://github.com/yuvanshmali/MERN-Projects",
  },
  {
    id: 2,
    title: "Web Development Projects",
    description: "Some beginner projects of web-development",
    tech: ["Html","Css"],
    github: "https://github.com/yuvanshmali/Web-Development-Projects",
  },
  {
    id: 3,
    title: "Python Beginner Projects",
    description: "Some beginner projects using python",
    tech: ["Python"],
    github: "https://github.com/yuvanshmali/Python-Beginner-Projects",
  },
];

const Projects = () => {
  return (
    <div className="py-16 mb-20 ">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-10 text-white">
            🚀 My Projects
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 ">
            {projectss.map((project) => (
              <div
                key={project.id}
                className="rounded-2xl p-6 flex flex-col justify-between border border-white/40 shadow-[0_0_10px_rgba(255,255,255,0.4)] hover:shadow-[0_0_18px_rgba(255,255,255,0.5)] transition-all hover:scale-105"
              >
                <div>
                  <h3 className="text-2xl font-semibold mb-3 text-white">
                    {project.title}
                  </h3>
                  <p className="text-white mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="text-sm  px-2 py-1 rounded-full hover:shadow-[0_0_18px_rgba(255,255,255,0.5)] transition-all hover:scale-105"
                        style={{ backgroundColor: 'white', color: '#000' }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>  

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 flex items-center justify-center gap-2 py-2 px-4 rounded-lg hover:shadow-[0_0_18px_rgba(255,255,255,0.5)] transition-all hover:scale-105"
                  style={{ backgroundColor: 'white', color: '#000' }}

                >
                  🔗 View on GitHub
                </a>
                {/* noopener = Link ko new tab me open karne par woh aapke page ko control na kar sake.
                noreferrer = Ye ensure karta hai ki user kis website se aa raha hai (referrer) — ye info hide ho jaye. */}
              </div>
            ))}
          </div>
        </div>
    </div>
  )
}

export default Projects
