import linkedin from "../assets/linkedin-icon-2.svg";
import github from "../assets/github-icon-1.svg";

export function Education() {
  return (
    <>
      <div />
      <h1 className="flex cursor-default border-white border-b-2 mt-4 mx-20 lg:mx-32 ">
        Education{" "}
        <a
          href="https://www.linkedin.com/in/pksto/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedin} className="size-7 mt-2 ml-2" alt="LinkedIn" />{" "}
        </a>
        <a
          href="https://github.com/pkstoy13"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={github} className="size-7 mt-2 ml-2" alt="GitHub" />{" "}
        </a>
      </h1>
      <div className="pl-1 pr-2  mx-20 lg:mx-32 project hover:cursor-default">
        <div className="flex text-lg justify-between ">
          <p>University of Delaware </p>
          <p>2021-2025</p>
        </div>
        <div className="flex text-lg justify-between ">
          <p>Major: Computer Science (BS)</p>
          <p>GPA: 3.6</p>
        </div>
        <p>Minor: Integrated Design</p>
        <p className="text-sm italic">
          Courses: Secure Software Design, Parallel Computing, Software
          Engineering, Operating Systems, Algorithms
        </p>
      </div>
    </>
  );
}
