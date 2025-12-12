import React from 'react'

const About = () => {
    return (
        <div className='md:w-[80%] mx-auto mb-10 py-16 text-white' >
            <h2 className="text-4xl font-bold text-center mb-10 gap-10 text-white">
                👨‍💻 About Me
            </h2>
            {/* profile picture ke sath vala para */}
            <div className='flex flex-col md:flex-row gap-5'>
                <div className='md:w-[80%] space-y-5 md:space-y-10' >
                    <h1 className='text-3xl md:text-5xl font-bold' >
                        Hey! I'm <span className="text-blue-500">Yuvansh Mali</span> and I'm a full stack engineer.
                    </h1>
                    <p className='text-center md:text-start' style={{wordSpacing:"6px"}}>
                        I'm a dedicated Full Stack Developer with a B.Tech in Computer Science from SITE College, Nathdwara. I possess strong expertise in web development, database management, and full stack frameworks, and has hands-on experience with technologies such as HTML, CSS, Express, React, and MERN stack.
                    </p>
                </div>
                <div className='md:w-[20%] md:h-50' >
                    <img
                        className="w-full h-full rounded-2xl object-cover"
                        src="/my-profile3.jpg"
                        alt="my-profile3"
                    />
                </div>
            </div>

            {/* profile pic ke alawa vala para */}
            <div className='text-center md:text-start mt-5' >
                <p className='mb-10' >
                    I combine technical proficiency with strategic problem-solving, having developed projects like an obstacle-avoiding robo car while integrating programming and web development skills. I also engage in digital marketing initiatives, showcasing my versatility and ability to enhance user experiences and business outcomes
                </p>
                <p >
                    I have demonstrated leadership skills as a Team Leader at Smart India Hackathon and as Captain of his Institute's basketball team, effectively guiding teams, delegating tasks, and fostering collaboration to achieve project and performance goals under high-pressure environments.
                </p>
            </div>
        </div>
    )
}

export default About
