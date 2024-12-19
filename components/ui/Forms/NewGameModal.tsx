"use client";
import React, { useRef } from "react";
import { IoCloseSharp } from "react-icons/io5";
import SelectModal from "./SelectModal";
import { useRouter } from "next/navigation";

const NewGameModal = ({
  isOpen,
  setModalOpen,
}: {
  isOpen: boolean;
  setModalOpen: (isOpen: boolean) => void;
}) => {
  const dialog = useRef<HTMLDialogElement>(null);
  const router = useRouter();

  const closeModal = () => {
    if (dialog.current) {
      dialog.current.classList.add(
        "transition-opacity",
        "duration-300",
        "opacity-0"
      );
      dialog.current.addEventListener(
        "transitionend",
        () => {
          dialog.current?.close();
          dialog.current?.classList.remove("opacity-0");
        },
        { once: true }
      );
    }
    setModalOpen(false);
  };

  const submitModal = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    router.push("/Quiz");

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
          className="fixed top-0 h-screen w-screen left-0 right-0 bottom-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300 opacity-100"
          ref={dialog}
        >
          <div className="bg-inherit rounded-lg p-6 shadow-lg w-11/12 max-w-[30rem] transform transition-transform duration-300 scale-100">
            <div className="flex justify-end">
              <button
                onClick={closeModal}
                className="text-white hover:text-red-500"
              >
                <IoCloseSharp size={24} />
              </button>
            </div>
            <form onSubmit={submitModal} className="mt-4">
              <div className="flex flex-col gap-4 ">
                <SelectModal />
              </div>
              <button
                type="submit"
                className="relative py-3 mt-4 px-6 w-full text-white uppercase font-semibold tracking-widest border border-blue-600 rounded-lg overflow-hidden transition-all duration-200 ease-in-out hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-400"
              >
                <span className="absolute inset-0 bg-white opacity-0 transition-all duration-500 transform skew-x-[-20deg] hover:opacity-100 hover:translate-x-full"></span>
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
