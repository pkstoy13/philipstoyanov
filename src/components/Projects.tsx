import reactLogo from "../assets/react logo.png";
import tailwindLogo from "../assets/Tailwind_CSS_Logo.svg.png";
import viteLogo from "../assets/vite-logo.png";
import netlifyLogo from "../assets/netlify-icon.png";
import jsLogo from "../assets/js-logo.png";

export function Projects() {
  return (
    <>
      <div className="section-block">
        <h1 className="header">Projects</h1>
        <>
          <h2>
            Time Titan{" "}
            <a
              className="text-lg bg-indigo-500 rounded-lg"
              href="https://time-titan.netlify.app/"
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
            <p className="ml-8  items-center flex space-x-3">
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
            Photo Collection{" "}
            <a
              className="text-lg bg-indigo-500 rounded-lg"
              href="https://affinity-collection.netlify.app/"
            >
              🔗
            </a>
          </h2>

          <p className="mx-4">
            React Application designed for users to add photos or images in a
            grid format and create image/photo albums
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
          <h2>Portfolio</h2>
          <p className="mx-4">
            You're looking at it right here. Single Page Application to show
            potential employers what I have done and tell them a little bit
            about me.
          </p>
        </>
        <>
          <h2>Effortless Attire (Academic)</h2>
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
