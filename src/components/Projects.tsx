import {
  Effortless,
  Matrix,
  PhotoC,
  PortX,
  TimeTitan,
  Unknown,
} from "./Project Components";

export function Projects() {
  return (
    <>
      <h1 className="flex cursor-default border-white border-b-2 mb-2 mt-4 mx-20 lg:mx-32">
        Projects
      </h1>
      <div className="grid grid-flow-row md:gap-8 md:grid-cols-3 md:grid-rows-2 mx-20 lg:mx-32">
        <TimeTitan />
        <Matrix />
        <Effortless />
        <PortX />
        <PhotoC />
        <Unknown />
      </div>
    </>
  );
}
