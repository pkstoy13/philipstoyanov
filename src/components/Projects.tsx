import {
  Effortless,
  ToDoIt,
  PortX,
  TimeTitan,
  MakerSpace,
  AdventureT,
} from "./Project Components";

export function Projects() {
  return (
    <>
      <h1 className="flex cursor-default border-white border-b-2 my-4 mx-20 lg:mx-32">
        Projects
      </h1>
      <div className="grid grid-flow-row md:gap-8 md:grid-cols-3 md:grid-rows-2 mx-20 lg:mx-32">
        <ToDoIt />
        <MakerSpace />
        <AdventureT />
        <TimeTitan />
        <Effortless />
        <PortX />
      </div>
    </>
  );
}
