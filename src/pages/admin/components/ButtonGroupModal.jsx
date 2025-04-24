import { Check, Loader, X } from "lucide-react";
import ButtonEditor from "../../../components/ButtonEditor";

function ButtonGroupModal({ handleCloseModal, handleSaveModal, isLoading }) {
  return (
    <div className="flex gap-4 justify-center items-center w-full pt-4">
      <ButtonEditor handleClick={handleSaveModal} disableBtn={isLoading}>
        {isLoading ? (
          <Loader
            className="animate-spin"
            strokeWidth={1.5}
            width={18}
            height={18}
          />
        ) : (
          <Check strokeWidth={1.5} width={18} height={18} />
        )}
        <span>Save</span>
      </ButtonEditor>

      <ButtonEditor btn="cancel" handleClick={handleCloseModal}>
        <X strokeWidth={1.5} width={18} height={18} />
        <span>Cancel</span>
      </ButtonEditor>
    </div>
  );
}
export default ButtonGroupModal;
