import {
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineInstagram,
} from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import "./App.css";

function Container({ label, content }) {
  return (
    <div class="box bg-neutral-300 h-40 w-[60%]">
      <div class="box-inner">
        <div class="box-front rounded-xl flex items-center justify-center">
          <h2>{label}</h2>
        </div>
        <div class="box-back rounded-xl flex items-center justify-center">
          <h2>{content}</h2>
        </div>
      </div>
    </div>
  );
}

function Links() {
  return (
    <div className="flex items-center gap-8">
      <a
        href="mailto: bruno.ceccolini@.com"
        className="cursor-pointer hover:scale-110 duration-200 transition-all"
      >
        <HiOutlineMail className="text-4xl" />
      </a>
      <a
        href="https://www.linkedin.com/in/bruno-ceccolini/"
        target="_blank"
        rel="noreferrer"
        className="cursor-pointer hover:scale-110 duration-200 transition-all"
      >
        <AiOutlineLinkedin className="text-4xl" />
      </a>
      <a
        href="https://www.instagram.com/brunoceccolini_/"
        target="_blank"
        rel="noreferrer"
        className="cursor-pointer hover:scale-110 duration-200 transition-all"
      >
        <AiOutlineInstagram className="text-4xl" />
      </a>
      <a
        href="https://www.github.com/BrunoCecco/"
        target="_blank"
        rel="noreferrer"
        className="cursor-pointer hover:scale-110 duration-200 transition-all"
      >
        <AiOutlineGithub className="text-4xl" />
      </a>
    </div>
  );
}

function App() {
  return (
    <div className="App bg-neutral-300">
      <header className="flex flex-wrap gap-8 text-left items-center justify-between py-6 bg-teal-400 md:px-40 px-10 text-slate-700">
        <div className="font-extrabold text-4xl">BRUNO CECCOLINI</div>
        <Links />
      </header>
      <main>
        <div className="">
          <div className="bg-slate-700 shadow-lg shadow-slate-700 rounded-xl md:m-40 md:p-40 p-10 m-10 text-orange-200 flex flex-col md:gap-10 gap-4">
            <div className="text-4xl md:text-6xl lg:text-8xl text-center">
              HELLO, WORLD
            </div>
            <div className="text-xl md:text-4xl text-center">
              I'm a student studying computer science at the{" "}
              <a
                href="https://www.st-andrews.ac.uk/"
                target="_blank"
                rel="noreferrer"
                className="decoration-solid underline hover:text-neutral-300 transition-all duration-200"
              >
                University of St Andrews
              </a>
            </div>
          </div>
        </div>
        <div className="flex gap-6 md:p-40 p-10 bg-slate-800 items-center justify-center">
          <Container label="Projects" />
          <Container label="Interests" />
          <Container label="University" />
          <Container label="Sports" />
          <div className="hidden">
            Interests - crypto - Sports Creative css University Projects -realms
            -DAO chat -Xchanted -Solswap -Motive -Mactutor
          </div>
        </div>
        <div className="flex flex-col gap-6 md:p-40 p-10 text-2xl">
          <div className="font-bold">How was this website built?</div>
          <div>- React JS - Tailwind CSS - Github Pages -</div>
        </div>
      </main>
      <footer className="flex flex-wrap gap-8 text-left items-center justify-between py-6 bg-teal-400 md:px-40 px-10 text-slate-700">
        <div className="text-xl font-bold">&copy; Bruno Ceccolini</div>
        <Links />
      </footer>
    </div>
  );
}

export default App;
