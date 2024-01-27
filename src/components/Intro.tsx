import picture from "../assets/cropped-profile.png";

export function Intro() {
  return (
    <div className="mt-8 mx-20 flex flex-col-reverse lg:flex-row md:justify-evenly items-center">
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
        <img className="rounded-full size-72" src={picture} alt="Picture" />
      </div>
    </div>
  );
}
