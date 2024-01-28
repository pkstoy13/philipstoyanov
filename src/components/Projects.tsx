import reactLogo from "../assets/react-2.svg";
import tailwindLogo from "../assets/tailwind-css-2.svg";
import viteLogo from "../assets/vitejs.svg";
import netlifyLogo from "../assets/netlify.svg";
import jsLogo from "../assets/logo-javascript.svg";

export function Projects() {
  return (
    <>
      <div className="section-block">
        <h1 className="header">Projects</h1>
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
            React Application that allows the user to set timers and keep track
            of how long they work on tasks. Utilizes state and other React Hooks
            to correctly keep track of time. Comes with Report Page and Sign in
            so that users can come back and see their previous times. Has color
            coding system as well to help users sort out the functions of their
            timers
            <br />
            Utilizations:{" "}
            <div className="ml-8  items-center scale-[.25] flex space-x-3">
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
            <p className="ml-8  items-center flex  space-x-3">
              Utilizations:{" "}
              <a href="https://react.dev">
                <img className="" src={reactLogo} alt="React logo" />{" "}
              </a>
              <a href="https://javascript.info/">
                <img src={jsLogo} className="" alt="JS logo" />{" "}
              </a>
              <a href="https://tailwindcss.com">
                <img className="" src={tailwindLogo} alt="Tailwind logo" />
              </a>
              <a href="https://vitejs.dev/guide">
                <img className="" src={viteLogo} alt="Vite logo" />{" "}
              </a>
              <a href="https://www.netlify.com/for/web-applications/">
                <img className="" src={netlifyLogo} alt="Netlify logo" />{" "}
              </a>
            </p>
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
            Webpage built during my Intro to Software Engineering course. Acts a
            functioning clothing store for a made up brand that sells University
            of Delaware apparel. Worked in a team of 4 people, with most of my
            time dedicated to completing the testing.
          </p>
        </>
        <h2>Shell Project (Academic)</h2>
        <p className="mx-4">
          Custom Shell Project created for Operating Systems Course. Was broken
          down into paheses during the course, with the first phase focusing on
          getting the shell running, creating the built-in commands for it, and
          allowing arguments to be passed into the shell. The 2nd phase was
          focused on more advanced features, such as giving the shell the
          ability to run scripts, and creating an accumulater function and
          environment variables.
        </p>
      </div>
    </>
  );
}
