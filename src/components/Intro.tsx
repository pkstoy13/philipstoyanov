import picture from "../assets/cropped-profile.png";

export function Intro() {
  return (
    <div className="mt-8 space-x-72 mx-20 lg:mx-40  flex flex-col-reverse lg:flex-row md:justify-evenly items-center">
      <div className="">
        <h1 className="text-3xl border-b-2 border-black">Hi! I'm Phil</h1>
        <p>
          {
            "I am a junior at the University of Delaware, studying Computer Science. I am an aspiring software engineer. I am 20 years old. I am proficient in React, but aim to learn and master other JavaScript frameworks as well. I have a minor in Integrated Design and a concentration in Software Engineering. I am a hard worker and a team player."
          }
        </p>
        <a></a>
        <a></a>
      </div>
      <div className="">
        <img className="rounded-full w-72" src={picture} alt="Picture" />
      </div>
    </div>
  );
}
