export function Albums() {
  return (
    <>
      <h1 className="flex cursor-default border-white border-b-2 mb-2 mt-4 mx-20 lg:mx-32">
        Albums
      </h1>
      <div className="grid grid-flow-row md:gap-8 md:grid-cols-3 md:grid-rows-2 mx-20 lg:mx-32">
        <div className="project">Igor</div>
        <div className="project">At Long Last A$AP</div>
        <div className="project">Rodeo</div>
        <div className="project">Into</div>
        <div className="project">CARE FOR ME</div>
        <div className="project">Blonde</div>
        <div className="project">DAMN.</div>
        <div className="project">Love Deluxe</div>
        <div className="project">Backstage Raver</div>
      </div>
    </>
  );
}
