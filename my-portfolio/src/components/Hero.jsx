import React from 'react'

const Hero = () => {
  return (
    <div className='md:w-[80%] flex flex-col md:flex-row mb-20 mx-auto gap-10 text-white  ' >
      <div className='space-y-8 md:w-[60%]'>
        <h1 className='text-3xl md:text-5xl font-bold'>
          Trust me, I'm a <span className="text-blue-500">software engineer.</span>
        </h1>
        <p className='text-center md:text-start' style={{wordSpacing:"6px"}}>
          Meet Yuvansh — but everyone calls him Yuvv. He is a passionate software engineer who loves turning ideas into real-world solutions through code. From building modern web apps with React and Tailwind CSS to exploring the world of artificial intelligence, he is always eager to learn and grow. His journey began with curiosity about how the internet works, and it has grown into designing and developing projects that blend creativity with functionality. Whether it’s crafting user interfaces, structuring databases, or solving algorithms, he enjoys the challenge. Driven by discipline and consistency, he pushes his boundaries every day. 🚀
        </p>
      </div>
      <div className='md:w-[40%] md:h-90'>
        <img
          className="w-full h-full rounded-2xl object-cover"
          src="/my-profile2.JPG"
          alt="my-profile2"
        />
        <div className="flex justify-evenly gap-10  mt-4">
          <a
            href="https://github.com/yuvanshmali"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className='w-7' src="/github.png" alt="github-icon" />
          </a>
          <a
            href="https://linkedin.com/in/yuvansh-mali-70b1b933a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className='w-7' src="/linkedin.png" alt="linkedin-icon" />
          </a>
          <a
            href="https://instagram.com/yuvanshmali"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className='w-7' src="/instagram.png" alt="instagram-icon" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero

// noopener= window.opener ko block karta hai. New tab wali site apni site ko control/access nahi kar sakti
// noreferrer = Browser apni website ka URL referrer ke form me nahi bhejta. New website ko nahi pata chalega ki user kis site se aaya
