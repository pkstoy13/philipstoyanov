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
              when you're reminiscing on life and thinking about everything
              that's changed since you last thought. This is another album I
              first listened to my Freshman Spring semester I think, and it
              really helped me get through that time. It's crazy how certain
              songs and albums can bring you back to different points in your
              life.
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
              This album is very special to me. Another artist and album that I
              first listened to my Freshmen year. The Jazz-like production on
              this album is very unique and distinct to anything else I've heard
              before. Saba's storytelling on this record is beautiful as he goes
              through his upbringing and his rise as an artist. I find this
              record and its themes extremely relatable, and that's part of the
              reason I love it so much. On top of that, this record has some of
              the saddest and heart-breaking moments I've ever heard on a
              record. Especially on the penultimate track, PROM / KING, which
              detail's Saba's friendship with his cousin Walter, as they find
              their way as kids and later on in the music industry. I won't
              spoil the ending, but it's haunting and I would recommend anyone
              to at least listen to that one song.{" "}
            </p>
            <div className="italic ">
              <p>Release Year: 2018</p>
              <p>Favorite Track: PROM / KING</p>
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
              Even now, Blonde is already regarded as a classic to many, and for
              good reason. It is an amazing album from start to finish. This
              record makes you feel things. There's so many classic songs on
              this record, and Frank's voice is literally majestic. Nights, Ivy,
              Pink + White, Self Control, Nikes, and White Ferrari are all songs
              I think I will probably bump for the rest of my life. This album
              is so good that Frank doesn't have to drop any new music because
              his legacy and impact is solidified off this record alone. No one
              can replicate what Frank Ocean did on this record, even though
              artists have been trying to ever since this masterpiece dropped.
            </p>
            <div className="italic ">
              <p>Release Year: 2016</p>
              <p>Favorite Track: White Ferrari</p>
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
              While DAMN. is objectively not Kendrick Lamar's best album, I
              think it might be my favorite. I like basically everything about
              this record. The cover art, the song names and the themes
              throughout are executed so well. Even while Kendrick was at his
              most successful point in the music industry, he still dropped an
              album that has a lot of meaning, deep messages, and masterful
              storytelling. The album flows very well and is not too long or too
              short. Each track is very different, always keeping the listener
              guessing and engaged. On top of that, this is another album that
              makes you feel a lot of things and has an incredible vibe.
            </p>
            <div className="italic ">
              <p>Release Year: 2017</p>
              <p>Favorite Track: PRIDE.</p>
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
              This is a classic record. Sade's voice is straight up angelic.
              Honestly, some of the best singing I've ever heard comes from this
              album. Whenever I listen to a song off this record, my mind clears
              and I feel at peace. It's crazy how calming and smooth this record
              is. Almost all of Sade's records could be considered their best,
              but to me, this one stands out the most.
            </p>
            <div className="italic ">
              <p>Release Year: 1992</p>
              <p>Favorite Track: Pearls</p>
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
              Every since this record came out, I have not been able to stop
              listening to it. I love how mysterious, enigmatic, and even dark
              it is. You don't really understand the words being sung at most
              times, you just feel that strong, dark guitar and Joanne's
              enchanting vocals. It makes for such an intriguing and captivating
              listen. I've known about Dean Blunt for years now from his work
              with A$AP Rocky, but I didn't find out about Joanne Robertson
              until this record. Hearing her voice for the first time, I
              instantly realized how well it fit with Dean's signature dark,
              confusing style. The cover art had me intrigued, so I gave it a
              listen, and I'm so glad that I did, because so far, this has been
              my favorite album of 2024.
            </p>
            <div className="italic ">
              <p>Release Year: 2024</p>
              <p>Favorite Track: shangri las death song</p>
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
