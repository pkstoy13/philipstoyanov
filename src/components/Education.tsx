export function Education() {
  return (
    <>
      <div className="border-black border-2" />
      <h1 className="flex cursor-default border-white border-b-2 mt-4 mx-20 lg:mx-32 ">
        Education
      </h1>
      <div className="pl-1 pr-2  mx-20 lg:mx-32 project hover:cursor-default">
        <div className="flex text-lg justify-between ">
          <p>University of Delaware </p>
          <p>2021-2025</p>
        </div>
        <div className="flex text-lg justify-between ">
          <p>Major: Computer Science (BS)</p>
          <p>GPA: 3.51</p>
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
