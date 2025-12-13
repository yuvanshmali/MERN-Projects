import React, { useState,} from "react";

const Navbar = () => {

    const [open, setOpen] = useState(false);

    return (
        <div className="mb-30 mt-5">
            <nav className={'w-[90%] md:w-[80%] lg:w-[800px] my-4 mx-auto py-2 px-6 rounded-full flex items-center justify-between bg-black/50 text-white border border-white/40 shadow-[0_0_10px_rgba(255,255,255,0.4)] hover:shadow-[0_0_18px_rgba(255,255,255,0.5)]  fixed top-0 z-50 left-1/2 -translate-x-1/2 '}>
                {/* Left: Profile */}
                <div className="flex items-center gap-2">
                    <a href="#about">
                        <img
                            src="/my-profile.jpg"
                            alt="Profile"
                            className="w-8 h-8 rounded-full cursor-pointer object-cover"
                        />
                    </a>
                    <a
                        href="#about"
                        className="font-bold text-sm md:text-lg "
                    >
                        Yuvansh Mali
                    </a>
                </div>

                {/* Right: Menu */}

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-6 font-medium">

                    <a
                        href="#about"
                        className="hover:text-blue-500 cursor-pointer transition"
                    >
                        About
                    </a>

                    <a
                        href="#qualifications"
                        className="hover:text-blue-500 cursor-pointer transition"
                    >
                        Qualifications
                    </a>

                    <a
                        href="#projects"
                        className="hover:text-blue-500 cursor-pointer transition"
                    >
                        Projects
                    </a>

                    <a
                        href="#contact-me"
                        className="hover:text-blue-500 cursor-pointer transition"
                    >
                        Contact-Me
                    </a>
                </ul>

                {/* Mobile Menu  Button*/}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden font-bold"
                >
                    {open ? "Close✖" : "Menu☰"}
                </button>
            </nav>
            
            {/* Mobile Menu (After open=true*/}
            {open && (
                <ul className="md:hidden flex flex-col gap-5 items-end max-w-min bg-black/60 text-white font-semibold p-4 rounded-xl shadow-lg fixed top-16 right-5 ">
                    <a href="#about" onClick={() => setOpen(false)}>About</a>
                    <a href="#qualifications" onClick={() => setOpen(false)}>Qualifications</a>
                    <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
                    <a href="#contact-me" onClick={() => setOpen(false)}>Contact-Me</a>
                </ul>
            )}
        </div>
    );
};

export default Navbar;
