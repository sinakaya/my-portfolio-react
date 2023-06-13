import { AiFillInstagram, AiFillGithub } from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";
import { Link } from "react-router-dom";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import sina from "../public/wave.png";
import code from "../public/code.png";
import design from "../public/design.png";
import consulting from "../public/consulting.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";

function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <div className={darkMode ? "dark" : ""}>
        <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
          <section className="min-h-screen">
            <nav className="py-10 mb-12 flex justify-between dark:text-white">
              <h1 className="cursor-pointer font-burtons font-semibold text-xl">
                Portfolio
              </h1>
              <ul className="flex items-center">
                <li>
                  <BsFillMoonStarsFill
                    onClick={() => setDarkMode(!darkMode)}
                    className=" cursor-pointer text-2xl"
                  />
                </li>
                <li>
                  <a
                    className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                    href="#"
                  >
                    Resume
                  </a>
                </li>
              </ul>
            </nav>
            <div className="text-center p-10 py-10">
              <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
                Sina Khaninejad
              </h2>
              <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
                Developer and engineer.
              </h3>
              <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
                Freelancer providing services for programming and design content
                needs. Join me down below and let's get cracking!
              </p>
              <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
                <Link
                  target="_blank"
                  to={`https://www.instagram.com/sinakhaninejad`}
                >
                  <AiFillInstagram />
                </Link>
                <BsTelegram />
                <Link target="_blank" to={`https://github.com/sinakaya`}>
                  <AiFillGithub />
                </Link>
              </div>
              <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
                <img loading="lazy" src={sina} />
              </div>
            </div>
          </section>
          <section>
            <div>
              <h3 className="text-3xl py-1 dark:text-white ">
                Services I offer
              </h3>
              <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                Since the beginning of my journey as a web designer and
                developer, I've done some projects
                <span className="text-teal-500"> agencies </span>
                consulted for <span className="text-teal-500">startups </span>
                and collaborated with talanted people to create digital products
                for both business and consumer use.
              </p>
              <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                I offer from a wide range of services, including brand design,
                programming and teaching.
              </p>
            </div>
            <div className="lg:flex gap-10">
              <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
                <img
                  loading="lazy"
                  className="mx-auto"
                  src={design}
                  width={100}
                  height={100}
                />
                <h3 className="text-lg font-medium pt-8 pb-2  ">
                  Beautiful Designs
                </h3>
                <p className="py-2">
                  Creating elegant designs suited for your needs following core
                  design theory.
                </p>
                <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
                <p className="text-gray-800 py-1">Tailwind</p>
                <p className="text-gray-800 py-1">Sass</p>
                <p className="text-gray-800 py-1">Bootstrap</p>
                <p className="text-gray-800 py-1">Figma</p>
              </div>
              <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
                <img
                  loading="lazy"
                  className="mx-auto"
                  src={code}
                  width={100}
                  height={100}
                />
                <h3 className="text-lg font-medium pt-8 pb-2 ">
                  Code your dream project
                </h3>
                <p className="py-2">
                  Do you have an idea for your next great website? Let's make it
                  a reality.
                </p>
                <h4 className="py-4 text-teal-600">Tools that I Use</h4>
                <p className="text-gray-800 py-1">Java Script</p>
                <p className="text-gray-800 py-1">Type Script</p>
                <p className="text-gray-800 py-1">React</p>
                <p className="text-gray-800 py-1">Indesign</p>
              </div>
              <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
                <img
                  loading="lazy"
                  className="mx-auto"
                  src={consulting}
                  width={100}
                  height={100}
                />
                <h3 className="text-lg font-medium pt-8 pb-2 ">Consulting</h3>
                <p className="py-2">
                  Are you interested in feedback for your current project? I can
                  give you tips and tricks to level it up.
                </p>
                <h4 className="py-2 text-teal-600">Critical thinking</h4>
                <p className="text-teal-600 py-1">Self-learning</p>
                <p className="text-teal-600 py-1">Time management</p>
                <p className="text-teal-600 py-1">Problem-solving</p>
                <p className="text-teal-600 py-1">good knowledge of English</p>
              </div>
            </div>
          </section>
          <section className="py-10">
            <div>
              <h3 className="text-3xl py-1 dark:text-white ">Portofolio</h3>
              <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                Since the beginning of my journey as a web designer and
                developer, I've done grate projects,
                <span className="text-teal-500"> agencies </span>
                consulted for <span className="text-teal-500">startups </span>
                and collaborated with talanted people to create digital products
                for both business and consumer use.
              </p>
              <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                I offer from a wide range of services, including brand design,
                programming and teaching.
              </p>
            </div>
            <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
              <div className="basis-1/3 flex-1 ">
                <img
                  loading="lazy"
                  className="rounded-lg object-cover hover:scale-105 transition-all"
                  width={"100%"}
                  height={"100%"}
                  src={web1}
                />
              </div>
              <div className="basis-1/3 flex-1">
                <img
                  loading="lazy"
                  className="rounded-lg object-cover hover:scale-105 transition-all"
                  width={"100%"}
                  height={"100%"}
                  src={web2}
                />
              </div>
              <div className="basis-1/3 flex-1">
                <img
                  loading="lazy"
                  className="rounded-lg object-cover hover:scale-105 transition-all"
                  width={"100%"}
                  height={"100%"}
                  src={web3}
                />
              </div>
              <div className="basis-1/3 flex-1">
                <img
                  loading="lazy"
                  className="rounded-lg object-cover hover:scale-105 transition-all"
                  width={"100%"}
                  height={"100%"}
                  src={web4}
                />
              </div>
              <div className="basis-1/3 flex-1">
                <img
                  loading="lazy"
                  className="rounded-lg object-cover hover:scale-105 transition-all"
                  width={"100%"}
                  height={"100%"}
                  src={web5}
                />
              </div>
              <div className="basis-1/3 flex-1">
                <img
                  loading="lazy"
                  className="rounded-lg object-cover hover:scale-105 transition-all"
                  width={"100%"}
                  height={"100%"}
                  src={web6}
                />
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export default Home;