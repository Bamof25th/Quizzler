"use client";
import React, { useRef } from "react";
import { IoCloseSharp } from "react-icons/io5";
import SelectModal from "./SelectModal";

const NewGameModal = ({ isOpen, setModalOpen }: { isOpen: boolean, setModalOpen: (isOpen: boolean) => void }) => {
  const dialog = useRef<HTMLDialogElement>(null);

  const closeModal = () => {
    if (dialog.current) {
      dialog.current.classList.add("transition-opacity", "duration-300", "opacity-0" );
      dialog.current.addEventListener("transitionend", () => {
        dialog.current?.close();
        dialog.current?.classList.remove("opacity-0");
      }, { once: true });
    }
    setModalOpen(false);
  };

  const submitModal = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    closeModal(); // Close modal on submit
  };

  return (
    <>
      {isOpen && (
        <dialog
          id="modal"
          onClick={(e) => {
            if (e.target === dialog.current) closeModal();
          }}
          className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300 opacity-100"
          ref={dialog}
        >
          <div className="bg-white rounded-lg p-6 shadow-lg w-11/12 max-w-md transform transition-transform duration-300 scale-100">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold">New Game</h2>
              <button onClick={closeModal} className="text-gray-600 hover:text-gray-800">
                <IoCloseSharp size={24} />
              </button>
            </div>
            <form onSubmit={submitModal} className="mt-4">
              <div className="flex flex-col gap-4">
                <SelectModal />
              </div>
              <button
                type="submit"
                className="btn-primary uppercase py-3 px-6 w-full tracking-widest mt-4"
              >
                New game
              </button>
            </form>
          </div>
        </dialog>
      )}
    </>
  );
};

export default NewGameModal;