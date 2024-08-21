import { Navbar } from "../Navbar/Navbar";
import { Expertise } from "../Expretise/Expertise";
import { Typewriter } from "react-simple-typewriter";
import { Contact } from "../Contact/Contact";
import { Work } from "../Work/Work";

const Home = () => {
  const handleType = (count) => {
    console.log(`Typed word count: ${count}`);
  };

  const handleDone = () => {
    console.log("Done after 5 loops!");
  };

  return (
    <>
      <section id="home">
      <Navbar />
        <div className="bg-fixed bg-center h-screen bg-cover" style={{ backgroundImage: "url('Fondo.jpeg')" }}>
          <div className="gradient-bottom absolute bottom-0  w-full h-[20rem] z-10 bg-gradient-to-t from-[#0f172a] to-[#0f172a0b] "></div>

          <div className="flex items-center justify-center h-full relative flex-col">
            <h1 className="text-white text-8xl font-bold">Tatiana Mosquera</h1>
            <div className="text-white text-4xl">
              <Typewriter 
              words={["Web developer", "Frontend developer", "Technologist in software analysis and development"]} 
              loop={5} 
              cursor cursorStyle="_" 
              typeSpeed={70} 
              deleteSpeed={50} 
              delaySpeed={1000} 
              onLoopDone={handleDone} 
              onType={handleType} />
            </div>
          </div>
        </div>
      </section>
      <section id="expertise">
        <Expertise></Expertise>
      </section>
      <section id="work">
        <Work></Work>
      </section>
      <section id="contact">
        <Contact></Contact>
      </section>
    </>
  );
};

export { Home };
