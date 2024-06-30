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
      <h1 className="cursor-default border-white border-b-2 mb-2 mt-4 mx-20 lg:mx-44">
        Albums
      </h1>
      <div className="album-grid">
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
