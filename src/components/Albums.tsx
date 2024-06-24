import Igor from "../assets/album art/igor.jpg";
import Rodeo from "../assets/album art/rodeo.jpg";
import CFM from "../assets/album art/care for me.jpg";
import Blonde from "../assets/album art/blonde.jpeg";
import Damn from "../assets/album art/damn..png";
import BR from "../assets/album art/br resized.png";
import ALLA from "../assets/album art/alla resized.png";
import Into from "../assets/album art/into resized.png";
import LD from "../assets/album art/ld resized.png";

export function Albums() {
  return (
    <>
      <h1 className="cursor-default border-white border-b-2 mb-2 mt-4 mx-20 lg:mx-44">
        Albums
      </h1>
      <div className="grid grid-flow-row md:gap-8 sm:grid-cols-2 md:grid-cols-3 md:grid-rows-3 gap-4 mx-20 lg:mx-44">
        <img className="project" src={Igor} alt="Igor" />
        <img className="project" src={ALLA} alt="ALLA" />
        <img className="project" src={Rodeo} alt="Rodeo" />
        <img className="project" src={Into} alt="Into" />
        <img className="project" src={CFM} alt="Care For Me" />
        <img className="project" src={Blonde} alt="Blonde" />
        <img className="project" src={Damn} alt="DAMN." />
        <img className="project" src={LD} alt="love deluxe" />
        <img className="project" src={BR} alt="Backstage Raver" />
      </div>
    </>
  );
}
