import reactLogo from "../assets/react-2.svg";
import tailwindLogo from "../assets/tailwind-css-2.svg";
import cssLogo from "../assets/css-3.svg";
import viteLogo from "../assets/vitejs.svg";
import craLogo from "../assets/create-react-app.svg";
import netlifyLogo from "../assets/netlify.svg";
import jsLogo from "../assets/logo-javascript.svg";
import tsLogo from "../assets/typescript.svg";
import vercelLogo from "../assets/vercel.svg";
import bashLogo from "../assets/bash-1.svg";
import cLogo from "../assets/c-1.svg";
import vimLogo from "../assets/vim.svg";

export function Projects() {
  return (
    <>
      <div className="section-block">
        <h1 className="header">Projects</h1>
        <div className="bg-primary">
          <>
            <h2>
              Time Titan{" "}
              <a
                className="link-grade"
                href="https://time-titan.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                🔗
              </a>
            </h2>

            <p className="mx-4">
              React Application that allows the user to set timers and keep
              track of how long they work on tasks. Utilizes state and other
              React Hooks to correctly keep track of time. Comes with Report
              Page and Sign in so that users can come back and see their
              previous times. Has color coding system as well to help users sort
              out the functions of their timers
              <br />
              Created With:{" "}
              <div className="ml-8  items-center w-40 flex space-x-3">
                <a
                  href="https://react.dev "
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={reactLogo} alt="React logo" />{" "}
                </a>
                <a
                  href="https://javascript.info/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={jsLogo} alt="JS logo" />{" "}
                </a>
                <a
                  href="https://tailwindcss.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={tailwindLogo} alt="Tailwind logo" />
                </a>
                <a
                  href="https://vitejs.dev/guide"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={viteLogo} alt="Vite logo" />{" "}
                </a>
                <a
                  href="https://www.netlify.com/for/web-applications/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={netlifyLogo} alt="Netlify logo" />{" "}
                </a>
              </div>
            </p>
          </>
          <>
            <h2>
              Photo Collection{" "}
              <a
                className="link-grade"
                href="https://affinity-collection.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                🔗
              </a>
            </h2>

            <p className="mx-4">
              React Application designed for users to add photos or images in a
              grid format and create image/photo albums. Useful for creating
              moodboards and organizing vibes.
              <br />
              Created With:{" "}
              <div className="ml-8  items-center w-40 flex space-x-3">
                <a
                  href="https://react.dev "
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={reactLogo} alt="React logo" />{" "}
                </a>
                <a
                  href="https://javascript.info/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={jsLogo} alt="JS logo" />{" "}
                </a>
                <a
                  href="https://tailwindcss.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={tailwindLogo} alt="Tailwind logo" />
                </a>
                <a
                  href="https://vitejs.dev/guide"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={viteLogo} alt="Vite logo" />{" "}
                </a>
                <a
                  href="https://www.netlify.com/for/web-applications/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={netlifyLogo} alt="Netlify logo" />{" "}
                </a>
              </div>
            </p>
          </>
          <>
            <h2>
              Portfolio{" "}
              <a
                className="link-grade"
                href="https://portfolio-psx.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                🔗
              </a>
            </h2>
            <p className="mx-4">
              You're looking at it right here. Single Page Application to show
              potential employers what I have done and tell them a little bit
              about me. I spent a lot of time figuring out ideal styling and
              learning how to make a site look aesthetically pleasing. Went
              through many stages of designing.
              <br />
              Created With:{" "}
              <div className="ml-8  items-center w-40 flex space-x-3">
                <a
                  href="https://react.dev "
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={reactLogo} alt="React logo" />{" "}
                </a>
                <a
                  href="https://www.typescriptlang.org/docs/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={tsLogo} alt="TS logo" />{" "}
                </a>
                <a
                  href="https://tailwindcss.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={tailwindLogo} alt="Tailwind logo" />
                </a>
                <a
                  href="https://vitejs.dev/guide"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={viteLogo} alt="Vite logo" />{" "}
                </a>
                <a
                  href="https://vercel.com/docs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={vercelLogo} alt="Vercel logo" />{" "}
                </a>
              </div>
            </p>
          </>
          <>
            <h2>
              Effortless Attire (Academic){" "}
              <a
                className="link-grade"
                href="https://doomsuccs.github.io/Team-1/"
                target="_blank"
                rel="noopener noreferrer"
              >
                🔗
              </a>
            </h2>
            <p className="mx-4">
              Webpage built during my Intro to Software Engineering course. Acts
              a functioning clothing store for a made up brand that sells
              University of Delaware apparel. Worked in a team of 4 people, with
              most of my time dedicated to completing the testing.
              <br />
              Created With:{" "}
              <div className="ml-8  items-center w-40 flex space-x-3">
                <a
                  href="https://react.dev "
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={reactLogo} alt="React logo" />{" "}
                </a>
                <a
                  href="https://www.typescriptlang.org/docs/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={tsLogo} alt="TS logo" />{" "}
                </a>
                <a
                  href="https://devdocs.io/css/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={cssLogo} alt="CSS logo" />
                </a>
                <a
                  href="https://create-react-app.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={craLogo} alt="CRA logo" />{" "}
                </a>
                <a
                  href="https://vercel.com/docs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="invisible"
                >
                  <img src={vercelLogo} alt="Vercel logo" />{" "}
                </a>
              </div>
            </p>
          </>
          <h2>Shell Project (Academic)</h2>
          <p className="mx-4">
            Custom Shell Project created for Operating Systems Course. Was
            broken down into paheses during the course, with the first phase
            focusing on getting the shell running, creating the built-in
            commands for it, and allowing arguments to be passed into the shell.
            The 2nd phase was focused on more advanced features, such as giving
            the shell the ability to run scripts, and creating an accumulater
            function and environment variables.
            <br />
            Created With:{" "}
            <div className="ml-8  items-center w-40 flex space-x-3">
              <a
                href="https://www.gnu.org/software/gnu-c-manual/gnu-c-manual.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={cLogo} alt="C logo" />{" "}
              </a>
              <a
                href="https://www.gnu.org/software/bash/manual/bash.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={bashLogo} alt="Bash logo" />{" "}
              </a>
              <a
                href="https://www.vim.org/docs.php"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={vimLogo} alt="Vim logo" />
              </a>
              <a
                href="https://vercel.com/docs"
                target="_blank"
                rel="noopener noreferrer"
                className="invisible"
              >
                <img src={vercelLogo} alt="Vercel logo" />{" "}
              </a>
              <a
                href="https://vercel.com/docs"
                target="_blank"
                rel="noopener noreferrer"
                className="invisible"
              >
                <img src={vercelLogo} alt="Vercel logo" />{" "}
              </a>
            </div>
          </p>
        </div>
      </div>
    </>
  );
}
