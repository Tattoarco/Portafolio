const Contact = () => {
  return (
    <>
      <section>
        <div className="relative bg-[#d9d9d9] h-screen">
          <div className="absolute inset-x-0 top-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
              <path fill="#0f172a" fillOpacity="1" d="M0,320L40,282.7C80,245,160,171,240,149.3C320,128,400,160,480,186.7C560,213,640,235,720,224C800,213,880,171,960,160C1040,149,1120,171,1200,192C1280,213,1360,235,1400,245.3L1440,256L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path>
            </svg>
          </div>
          <div className="relative w-full flex justify-center">
            <div className="grid gap-6 grid-cols-2 mt-32 w-[70%]">
              <div className="grid justify-center font-bold backdrop-blur-sm p-5">
                <h3 className="text-5xl">Social networks </h3>

                <div className="flex gap-4">
                  <a href="https://github.com/Tattoarco/" target="_blank">
                    <img src="/github.svg" alt="GitHub Tatiana Mosquera" className="w-14 hover:scale-110 transition-all duration-300" />
                  </a>
                  <a href="www.linkedin.com/in/tatiana-mosquera-068a29251" target="_blank">
                    <img src="/inkedin.webp" alt="Linkedin Tatiana Mosquera" className="w-14 hover:scale-110 transition-all duration-300" />
                  </a>
                  <a href="mailto:atatianamosquera@gmail.com" target="_blank">
                    <img src="/gmail.webp" alt="Gmail Tatiana Mosquera" className="w-14 hover:scale-110 transition-all duration-300" />
                  </a>
                </div>

                <a href="/Hoja de vida Tatiana Mosquera.pdf" download="Tatiana-Mosquera-HV.pdf" className="bg-orange-600 text-white rounded-lg p-4 gap-3 flex justify-center items-center hover:bg-white hover:border-2 hover:border-orange-600 shadow-lg hover:text-orange-600 hover:scale-105 transition-all duration-300 mt-4">
                  <i className="fa-solid fa-cloud-arrow-down"></i>
                  <p>Descargar CV</p>
                </a>
              </div>
              <div className="flex gap-10 justify-center font-bold backdrop-blur-sm p-5">
                <h3 className="text-5xl">About me</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export { Contact };
