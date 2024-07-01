import Igor_art from "../assets/album art/igor.jpg";
import Rodeo_art from "../assets/album art/rodeo.jpg";
import ALLA_art from "../assets/album art/alla resized.png";
import Into_art from "../assets/album art/into resized.png";
import CFM_art from "../assets/album art/care for me.jpg";
import Blonde_art from "../assets/album art/blonde.jpeg";
import DAMN_art from "../assets/album art/damn..png";
import BR_art from "../assets/album art/br resized.png";
import LD_art from "../assets/album art/ld resized.png";

export function Igor() {
  return (
    <>
      <img
        className="project"
        onClick={() => {
          const modal = document.getElementById(
            "my_modal_1"
          ) as HTMLDialogElement;
          modal.showModal();
        }}
        src={Igor_art}
        alt="Igor"
      />
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box max-w-5xl  lg:h-3/4  bg-indigo-700 flex space-x-2">
          <img
            src={Igor_art}
            className="shadow-xl rounded-xl lg:size-4/5 xl:size-full size-2/3 shrink shadow-indigo-900"
            alt="Igor"
          />
          <div className="flex flex-col">
            <h2 className="inline">Igor - Tyler, The Creator</h2>
            <p>
              This is such a perfect album. The themes about love and
              relationships presented throughout are really felt. I first
              listened to this album my Freshmen Spring semester, and it was my
              first time really listening to an album by Tyler, the Creator. At
              that time, mentally I was not in a great place. My anxiety was
              worse than ever, feeling so much pressure being at college, with
              classes, and friendships, and just everything. The story that
              unfolds throughout the album is honestly amazing. Starting off
              being excited and wanting to be in a relationship with someone,
              but then once you're there, it's not how you imagined. In the end
              you realize, maybe it wasn't meant to be. Honestly, it's
              relatable, and the production is extremely unique and beautiful.
            </p>
            <div className="italic ">
              <p>Release Year: 2019</p>
              <p>Favorite Track: GONE GONE / THANK YOU</p>
            </div>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button />
        </form>
      </dialog>
    </>
  );
}

export function ALLA() {
  return (
    <>
      <img
        className="project"
        onClick={() => {
          const modal = document.getElementById(
            "my_modal_2"
          ) as HTMLDialogElement;
          modal.showModal();
        }}
        src={ALLA_art}
        alt="ALLA"
      />
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box max-w-5xl  lg:h-3/4  bg-indigo-700 flex space-x-2">
          <img
            src={ALLA_art}
            className="shadow-xl rounded-xl lg:size-4/5 xl:size-full size-2/3 shrink shadow-indigo-900"
            alt="ALLA"
          />
          <div className="flex flex-col">
            <h2 className="inline">AT.LONG.LAST.A$AP - A$AP Rocky</h2>
            <p>
              My all-time favorite album. It just sounds so good. The tracks on
              this record are so different from one another and Rocky is at his
              best on so many levels. There's not really much else to say.
              There's a couple of tracks on the album that are a little
              lackluster, but other than that, it's phenomenal. It's definitely
              my most listened to album I think. It really doesn't get old. The
              production is amazing, and Rocky's bars and charisma are on full
              display. You can definitely hear the inspiration Rocky got from
              Kanye West on here but I think he elevates it and makes it his
              own.
            </p>
            <div className="italic ">
              <p>Release Year: 2015</p>
              <p>Favorite Track: Jukebox Joints</p>
            </div>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button />
        </form>
      </dialog>
    </>
  );
}

export function Rodeo() {
  return (
    <>
      <img
        className="project"
        onClick={() => {
          const modal = document.getElementById(
            "my_modal_3"
          ) as HTMLDialogElement;
          modal.showModal();
        }}
        src={Rodeo_art}
        alt="Rodeo"
      />
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box max-w-5xl  lg:h-3/4  bg-indigo-700 flex space-x-2">
          <img
            src={Rodeo_art}
            className="shadow-xl rounded-xl lg:size-4/5 xl:size-full size-2/3 shrink shadow-indigo-900"
            alt="Rodeo"
          />
          <div className="flex flex-col">
            <h2 className="inline">Rodeo - Travis Scott</h2>
            <p>
              One of the best debut records ever, with too many timeless songs
              to count. The production is beautiful. There's loud, banger-type
              songs, and there's more calm, mellow pieces. This record does an
              excellent job of introducing you to the world of Travis Scott.
              This is one of the first albums that I listened to that really
              made me appreciate music, and it's one of the earliest ones that I
              still listen to today. I will forever cherish this record.
            </p>
            <div className="italic ">
              <p>Release Year: 2015</p>
              <p>Favorite Track: Impossible</p>
            </div>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button />
        </form>
      </dialog>
    </>
  );
}

export function Into() {
  return (
    <>
      <img
        className="project"
        onClick={() => {
          const modal = document.getElementById(
            "my_modal_4"
          ) as HTMLDialogElement;
          modal.showModal();
        }}
        src={Into_art}
        alt="Into"
      />
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box max-w-5xl  lg:h-3/4  bg-indigo-700 flex space-x-2">
          <img
            src={Into_art}
            className="shadow-xl rounded-xl lg:size-4/5 xl:size-full size-2/3 shrink shadow-indigo-900"
            alt="Into"
          />
          <div className="flex flex-col">
            <h2 className="inline">Into - Sonder</h2>
            <p>
              Such a nocturnal and vibey piece of work. At only 7 songs, Into is
              more like an EP, but it really feels like an album. Brent Faiyaz,
              the lead singer of Sonder, is at his absolute best whenever he
              works with the rest of Sonder. The producers know the exact
              production to make his voice standout, and on here, it's literally
              perfect. This record really emodies that late-at-night feeling
              when you're thinking about life. This is another album I first
              listened to my Freshman Spring semester I think, and it really
              helped me get through that time. It's crazy how certain songs and
              albums can bring you back to different points in your life.
            </p>
            <div className="italic ">
              <p>Release Year: 2017</p>
              <p>Favorite Track: Searchin</p>
            </div>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button />
        </form>
      </dialog>
    </>
  );
}
export function CFM() {
  return (
    <>
      <img
        className="project"
        onClick={() => {
          const modal = document.getElementById(
            "my_modal_5"
          ) as HTMLDialogElement;
          modal.showModal();
        }}
        src={CFM_art}
        alt="Care For Me"
      />
      <dialog id="my_modal_5" className="modal">
        <div className="modal-box max-w-5xl  lg:h-3/4  bg-indigo-700 flex space-x-2">
          <img
            src={CFM_art}
            className="shadow-xl rounded-xl lg:size-4/5 xl:size-full size-2/3 shrink shadow-indigo-900"
            alt="Care For Me"
          />
          <div className="flex flex-col">
            <h2 className="inline">Care For Me - Saba</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reiciendis, veniam! Sit voluptate sequi nisi recusandae quibusdam
              dolorum odit quis reiciendis quaerat qui saepe aspernatur in, quod
              perspiciatis ducimus quia hic.
            </p>
            <p>Release Year: 2018</p>
            <p>Favorite Track: PROM / KING</p>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button />
        </form>
      </dialog>
    </>
  );
}

export function Blonde() {
  return (
    <>
      <img
        className="project"
        onClick={() => {
          const modal = document.getElementById(
            "my_modal_6"
          ) as HTMLDialogElement;
          modal.showModal();
        }}
        src={Blonde_art}
        alt="Blonde"
      />
      <dialog id="my_modal_6" className="modal">
        <div className="modal-box max-w-5xl  lg:h-3/4  bg-indigo-700 flex space-x-2">
          <img
            src={Blonde_art}
            className="shadow-xl rounded-xl lg:size-4/5 xl:size-full size-2/3 shrink shadow-indigo-900"
            alt="Blonde"
          />
          <div className="flex flex-col">
            <h2 className="inline">Blonde - Frank Ocean</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reiciendis, veniam! Sit voluptate sequi nisi recusandae quibusdam
              dolorum odit quis reiciendis quaerat qui saepe aspernatur in, quod
              perspiciatis ducimus quia hic.
            </p>
            <p>Release Year: 2016</p>
            <p>Favorite Track: White Ferrari</p>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button />
        </form>
      </dialog>
    </>
  );
}
export function DAMN() {
  return (
    <>
      <img
        className="project"
        onClick={() => {
          const modal = document.getElementById(
            "my_modal_7"
          ) as HTMLDialogElement;
          modal.showModal();
        }}
        src={DAMN_art}
        alt="DAMN."
      />
      <dialog id="my_modal_7" className="modal">
        <div className="modal-box max-w-5xl  lg:h-3/4  bg-indigo-700 flex space-x-2">
          <img
            src={DAMN_art}
            className="shadow-xl rounded-xl lg:size-4/5 xl:size-full size-2/3 shrink shadow-indigo-900"
            alt="DAMN."
          />
          <div className="flex flex-col">
            <h2 className="inline">DAMN - Kendrick Lamar</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reiciendis, veniam! Sit voluptate sequi nisi recusandae quibusdam
              dolorum odit quis reiciendis quaerat qui saepe aspernatur in, quod
              perspiciatis ducimus quia hic.
            </p>
            <p>Release Year: 2017</p>
            <p>Favorite Track: PRIDE.</p>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button />
        </form>
      </dialog>
    </>
  );
}
export function LoveDeluxe() {
  return (
    <>
      <img
        className="project"
        onClick={() => {
          const modal = document.getElementById(
            "my_modal_8"
          ) as HTMLDialogElement;
          modal.showModal();
        }}
        src={LD_art}
        alt="Love Deluxe"
      />
      <dialog id="my_modal_8" className="modal">
        <div className="modal-box max-w-5xl  lg:h-3/4  bg-indigo-700 flex space-x-2">
          <img
            src={LD_art}
            className="shadow-xl rounded-xl lg:size-4/5 xl:size-full size-2/3 shrink shadow-indigo-900"
            alt="Love Deluxe"
          />
          <div className="flex flex-col">
            <h2 className="inline">Love Deluxe - Sade</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reiciendis, veniam! Sit voluptate sequi nisi recusandae quibusdam
              dolorum odit quis reiciendis quaerat qui saepe aspernatur in, quod
              perspiciatis ducimus quia hic.
            </p>
            <p>Release Year: 1992</p>
            <p>Favorite Track: Pearls</p>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button />
        </form>
      </dialog>
    </>
  );
}
export function BackstageRaver() {
  return (
    <>
      <img
        className="project"
        onClick={() => {
          const modal = document.getElementById(
            "my_modal_9"
          ) as HTMLDialogElement;
          modal.showModal();
        }}
        src={BR_art}
        alt="Backstage Raver"
      />
      <dialog id="my_modal_9" className="modal">
        <div className="modal-box max-w-5xl  lg:h-3/4  bg-indigo-700 flex space-x-2">
          <img
            src={BR_art}
            className="shadow-xl rounded-xl lg:size-4/5 xl:size-full size-2/3 shrink shadow-indigo-900"
            alt="Backstage Raver"
          />
          <div className="flex flex-col">
            <h2 className="inline">Backstage Raver - Joanne Robertson</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reiciendis, veniam! Sit voluptate sequi nisi recusandae quibusdam
              dolorum odit quis reiciendis quaerat qui saepe aspernatur in, quod
              perspiciatis ducimus quia hic.
            </p>
            <p>Release Year: 2024</p>
            <p>Favorite Track: shangri las death song</p>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button />
        </form>
      </dialog>
    </>
  );
}
