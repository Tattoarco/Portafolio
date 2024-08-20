import React, { useState, useEffect, useRef } from "react";
import "./Expertise.css";

const Expertise = () => {
  const titleRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const topPos = titleRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (topPos < windowHeight && topPos > 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <section className="relative h-screen bg-[#0f172a] max-md:h-full text-white flex flex-col items-center justify-center">
        <h2 ref={titleRef} className={`${isVisible ? "animate-slideInFromLeft" : "opacity-0"} absolute  text-8xl font-bold mb-[25rem]`}>
          My Expertise
        </h2>

        
        <div className="relative z-10 w-[80%] mx-auto grid grid-cols-3 gap-4 max-md:grid-cols-1 mt-[9rem]">
          <div className="w-full border-4 shadow-2xl flex flex-col p-10 rounded-lg bg-opacity-75 hover:bg-white hover:text-black hover:border-orange-400 hover:scale-105 transition-all duration-300 backdrop-blur-none hover:backdrop-blur-none group">
            <div className="flex items-center justify-center">
              <i className="fas fa-laptop-code text-5xl pr-3 group-hover:text-orange-600" />
              <p className="font-bold text-3xl">Software Development</p>
            </div>

            <p className="mt-6 text-xl">Experienced in both functional and OOP: JavaScript, TypeScript.</p>
          </div>

          <div className="w-full border-4 shadow-2xl flex flex-col p-10 rounded-lg bg-opacity-75 hover:bg-white hover:text-black hover:border-orange-400 hover:scale-105 transition-all duration-300 backdrop-blur-none hover:backdrop-blur-none group">
            <div className="flex items-center justify-center">
              <i className="fa-brands fa-react text-5xl pr-3 group-hover:text-orange-600"></i>
              <p className="font-bold text-3xl">Frontend Dev React, Angular</p>
            </div>
            <p className="mt-6 text-xl">Passionate about UI/UX. Over 3 years of development experience in HTML, CSS, JS, React and Angular frameworks.</p>
          </div>

          <div className="w-full border-4 shadow-2xl flex flex-col p-10 rounded-lg bg-opacity-75 hover:bg-white hover:text-black hover:border-orange-400 hover:scale-105 transition-all duration-300 backdrop-blur-none hover:backdrop-blur-none group">
            <div className="flex items-center justify-center">
              <i className="fa-solid fa-database text-5xl pr-3 group-hover:text-orange-600"></i>
              <p className="font-bold text-3xl">Database Dev MySql, Api</p>
            </div>

            <p className="mt-6 text-xl">Skilled in deploying APIs and working with both relational and non-relational databases.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export { Expertise };
