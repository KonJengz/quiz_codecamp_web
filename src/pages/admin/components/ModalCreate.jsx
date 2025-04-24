export const ModalCreate = ({ children, idModal }) => {
  return (
    <dialog id={`my_modal_${idModal}`} className="modal">
      <div className="modal-box  bg-white py-8 px-12 text-black flex flex-col gap-3 items-start rounded-2xl">
        {children}
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};
