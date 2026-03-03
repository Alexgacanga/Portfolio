import { Download } from "lucide-react";
import ab from "../assets/ab.png"

export const About = () => {
  return (
    <div
      id="about"
      className='w-full bg-[url("/src/assets/aboutbg.jpg")] bg-cover bg-no-repeat bg-center'
    >
      <div className="flex pt-18 sm:pt-25 md:pt-30 lg:pt-35 flex-col justify-center items-center">
        <div className="">
          <div className="flex justify-center items-center">
            <div className="bg-black p-[4px] md:p-2 rounded-2xl h-10 w-35 md:h-16 md:w-50">
              <h1 className="text-xl md:text-4xl text-white m-auto text-center font-bold">
                About me
              </h1>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center md:flex-row">
          <div className="md:pl-15 lg:pl-30 w-full px-5 m-auto md:w-1/2 pt-6">
            <p className="text-sm md:text-[15px]">
              I am a Software Engineer and Graphic Designer driven by the
              challenge of turning complex logic into seamless digital
              experiences. With a background rooted in engineering principles
              and a self-taught eye for visual communication, I specialize in
              building solutions that are as functional as they are
              aesthetically engaging. <br />
              <br />
              My approach to development is defined by a commitment to
              continuous growth and professional excellence. I thrive on the
              intersection of data-driven backend systems and intuitive frontend
              design, consistently seeking out projects that push me to refine
              my technical craftsmanship. Whether I am architecting scalable
              APIs or crafting visual identities for growing businesses, my goal
              is always the same: to deliver impactful, high-quality results
              that solve real-world problems.
              <br />
              <br />
              Beyond the code, I am a firm believer in the power of
              collaboration and adaptability. I enjoy working with diverse teams
              to bridge the gap between technical requirements and user-centric
              design, ensuring every project I touch is built for performance
              and longevity.
            </p>
          </div>
          <div className="m-auto px-10 md:pr-10 lg:pr-25 md:w-1/2">
            <img src={ab} alt="" />
          </div>
        </div>
        <div className="pb-15 sm:pt-10">
          <a
            href="Portfolio/MyPorfolio/src/assets/Gacanga Alex Mwangi CV.pdf"
            download
          >
            <button className="bg-indigo-700 text-white font-bold md:w-44 md:h-12 w-32 h-9 md:text-[15px] text-[11px] rounded-2xl shadow-2xl hover:bg-indigo-600 cursor-pointer flex items-center justify-center gap-2 transition-all">
              Download Cv
              <Download size={18} className="md:w-5 md:h-5" />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};
