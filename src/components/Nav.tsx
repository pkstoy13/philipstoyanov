import { useEffect } from "react";
import { Link, Element, Events, scrollSpy } from "react-scroll";

export function Nav() {
  useEffect(() => {
    // Registering the 'begin' event and logging it to the console when triggered.
    Events.scrollEvent.register("begin", (to, element) => {
      console.log("begin", to, element);
    });

    // Registering the 'end' event and logging it to the console when triggered.
    Events.scrollEvent.register("end", (to, element) => {
      console.log("end", to, element);
    });

    // Updating scrollSpy when the component mounts.
    scrollSpy.update();

    // Returning a cleanup function to remove the registered events when the component unmounts.
    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  // Defining functions to perform different types of scrolling.
  // Function to handle the activation of a link.
  const handleSetActive = (to: string) => {
    console.log(to);
  };

  return (
    <>
      <div>
        <div className="flex justify-end space-x-3 pr-4 bg-gray-800 text-red-200  ">
          {/*
        <button className="hover:animate-pulse">Overview</button>
        <button className="hover:animate-pulse">Education</button>
        <button className="hover:animate-pulse">Projects</button>
        <button className="hover:animate-pulse">Skills</button>
      */}
          <Link
            activeClass="active"
            to="test1"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            onSetActive={handleSetActive}
          >
            Education
          </Link>
          <Link
            activeClass="active"
            to="test2"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            onSetActive={handleSetActive}
          >
            Projects
          </Link>

          <Element name="test1" className="element" />
          <Element name="test2" className="element" />
        </div>
      </div>
    </>
  );
}
