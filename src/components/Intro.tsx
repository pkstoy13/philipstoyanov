import picture from "../assets/profile-pic.svg";
import linkedin from "../assets/linkedin-icon-2.svg";
import github from "../assets/github-icon-1.svg";

export function Intro() {
  return (
    <div className="mt-12 lg:mt-24 mx-20 lg:mx-60  xl:mx-80 flex flex-col-reverse  items-center">
      <div>
        <h1 className="text-3xl border-b-2 border-black">Hi! I'm Phil</h1>
        <p>
          {
            "I am a junior at the University of Delaware, studying Computer Science. I am an aspiring software engineer. "
          }
        </p>
      </div>
      <div className="flex items-center space-x-4 mt-2 md:mt-6 lg:mt-16">
        <a
          href="https://github.com/pkstoy13"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={github} alt="GitHub" className="w-4 md:w-6 lg:w-8" />
        </a>
        <a
          href="https://www.linkedin.com/in/philip-stoyanov-044344229/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedin} alt="LinkedIn" className="w-4 md:w-6 lg:w-8" />
        </a>
      </div>
      <div>
        <img
          className="rounded-xl w-72 md:scale-110 lg:scale-150 "
          src={picture}
          alt="Picture"
        />
      </div>
    </div>
  );
}
