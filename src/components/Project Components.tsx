import ttLogo from "../assets/time titan w gradient.png";
import eaLogo from "../assets/reworked effortless logo.png";
import bsLogo from "../assets/matrix shell art.png";
import pxLogo from "../assets/portfolio x png.png";
import icLogo from "../assets/photo collection logo.png";
import qMark from "../assets/qmark png.png";

export function TimeTitan() {
  return (
    <div className="project">
      <img
        src={ttLogo}
        onClick={() => {
          const modal = document.getElementById(
            "my_modal_10"
          ) as HTMLDialogElement;
          modal.showModal();
        }}
        alt="Album"
      />
      <dialog id="my_modal_10" className="modal">
        <div className="modal-box cursor-default bg-indigo-700">
          <h2>Time Titan</h2>
          <a
            href="https://time-titan.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            title="Check out Time Titan"
            className="text-indigo-300 underline"
          >
            https://time-titan.netlify.app/
          </a>
          <p>
            React Application that allows the user to set timers and keep track
            of how long they work on tasks. Utilizes state and other React Hooks
            to correctly keep track of time. Comes with Report Page and Sign in
            so that users can come back and see their previous times. Has color
            coding system as well to help users sort out the functions of their
            timers
          </p>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
}

export function Matrix() {
  return (
    <div className="project">
      <img
        src={bsLogo}
        onClick={() => {
          const modal = document.getElementById(
            "my_modal_11"
          ) as HTMLDialogElement;
          modal.showModal();
        }}
        alt="Album"
      />
      <dialog id="my_modal_11" className="modal">
        <div className="modal-box cursor-default bg-indigo-700">
          <h2>Welcome to the Matrix</h2>
          <a
            href="https://time-titan.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            title="Download Shell Code"
            className="text-indigo-300 underline"
          >
            shell.zip (unfinished)
          </a>
          <p>
            Custom Shell Project created for Operating Systems Course. Was
            broken down into phases during the course, with the first phase
            focusing on getting the shell running, creating the built-in
            commands for it, and allowing arguments to be passed into the shell.
            The 2nd phase was focused on more advanced features, such as giving
            the shell the ability to run scripts, and creating an accumulater
            function and environment variables.
          </p>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
}

export function Effortless() {
  return (
    <div className="project">
      <img
        src={eaLogo}
        onClick={() => {
          const modal = document.getElementById(
            "my_modal_12"
          ) as HTMLDialogElement;
          modal.showModal();
        }}
        alt="Effortless Attire"
      />
      <dialog id="my_modal_12" className="modal">
        <div className="modal-box cursor-default bg-indigo-700">
          <h2>Effortless Attire</h2>
          <a
            href="https://doomsuccs.github.io/Team-1/"
            target="_blank"
            rel="noopener noreferrer"
            title="Effortless Attire"
            className="text-indigo-300 underline"
          >
            https://doomsuccs.github.io/Team-1/
          </a>
          <p>
            Webpage built during my Intro to Software Engineering course. Acts a
            functioning clothing store for a made up brand that sells University
            of Delaware apparel. Worked in a team of 4 people, with most of my
            time dedicated to completing the testing.
          </p>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
}
export function PortX() {
  return (
    <div className="project">
      <img
        src={pxLogo}
        onClick={() => {
          const modal = document.getElementById(
            "my_modal_13"
          ) as HTMLDialogElement;
          modal.showModal();
        }}
        alt="Album"
      />
      <dialog id="my_modal_13" className="modal">
        <div className="modal-box cursor-default bg-indigo-700">
          <h2>Portfolio X</h2>
          <a
            href="https://portfolio-psx.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            title="Portfolio X"
            className="text-indigo-300 underline"
          >
            https://portfolio-psx.vercel.app/
          </a>

          <p>
            You're looking at it right here. Single Page Application to show
            potential employers what I have done and tell them a little bit
            about me. I spent a lot of time figuring out ideal styling and
            learning how to make a site look aesthetically pleasing. Went
            through many stages of designing.
          </p>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
}

export function PhotoC() {
  return (
    <div className="project">
      <img
        src={icLogo}
        onClick={() => {
          const modal = document.getElementById(
            "my_modal_14"
          ) as HTMLDialogElement;
          modal.showModal();
        }}
        alt="Album"
      />
      <dialog id="my_modal_14" className="modal">
        <div className="modal-box cursor-default bg-indigo-700">
          <h2>Photo Collection</h2>
          <a
            href="https://affinity-collection.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            title="Photo Collection"
            className="text-indigo-300 underline"
          >
            https://affinity-collection.netlify.app/
          </a>
          <p>
            React Application designed for users to add photos or images in a
            grid format and create image/photo albums. Useful for creating
            moodboards and organizing vibes. Currently unfinished.
          </p>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
}
export function Unknown() {
  return (
    <div className="project">
      <img
        src={qMark}
        onClick={() => {
          const modal = document.getElementById(
            "my_modal_15"
          ) as HTMLDialogElement;
          modal.showModal();
        }}
        alt="???"
      />
      <dialog id="my_modal_15" className="modal">
        <div className="modal-box cursor-default bg-indigo-700">
          <p>TO BE R3{"}{"}E4L€|)?</p>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
}
