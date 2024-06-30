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
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reiciendis, veniam! Sit voluptate sequi nisi recusandae quibusdam
              dolorum odit quis reiciendis quaerat qui saepe aspernatur in, quod
              perspiciatis ducimus quia hic.
            </p>
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
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reiciendis, veniam! Sit voluptate sequi nisi recusandae quibusdam
              dolorum odit quis reiciendis quaerat qui saepe aspernatur in, quod
              perspiciatis ducimus quia hic.
            </p>
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
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reiciendis, veniam! Sit voluptate sequi nisi recusandae quibusdam
              dolorum odit quis reiciendis quaerat qui saepe aspernatur in, quod
              perspiciatis ducimus quia hic.
            </p>
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
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reiciendis, veniam! Sit voluptate sequi nisi recusandae quibusdam
              dolorum odit quis reiciendis quaerat qui saepe aspernatur in, quod
              perspiciatis ducimus quia hic.
            </p>
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
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button />
        </form>
      </dialog>
    </>
  );
}
