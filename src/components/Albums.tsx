import {
  Igor,
  Rodeo,
  ALLA,
  Into,
  CFM,
  Blonde,
  DAMN,
  LoveDeluxe,
  BackstageRaver,
} from "./Album Components";

export function Albums() {
  return (
    <>
      <h1 className="flex cursor-default border-white border-b-2 my-4 mx-20 lg:mx-32 xl:mx-52">
        Albums
      </h1>
      <div className="grid justify-items-center md:gap-8 md:grid-cols-3 md:grid-rows-3 mx-20 lg:mx-44">
        <Igor />
        <ALLA />
        <Rodeo />
        <Into />
        <CFM />
        <Blonde />
        <DAMN />
        <LoveDeluxe />
        <BackstageRaver />
      </div>
    </>
  );
}
