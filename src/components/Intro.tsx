export function Intro() {
  return (
    <div className="flex flex-col-reverse md:flex-row md:justify-evenly items-center">
      <div className="">
        <h1 className="text-3xl">Hi! I'm Phil</h1>
        <p>
          {
            "I am a junior at the University of Delaware, studying Computer Science."
          }
        </p>
        <a></a>
        <a></a>
      </div>
      <div className="">
        <img src="../assets/placeholder.png" alt="Picture" />
      </div>
    </div>
  );
}
