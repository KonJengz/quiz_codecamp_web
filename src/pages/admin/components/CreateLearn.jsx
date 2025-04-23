import { useState } from "react";
import WarningInfo from "../../../components/WarningInfo";
import ButtonGroupModal from "./ButtonGroupModal";
import { ZodError } from "zod";
import { toast } from "react-toastify";
import { AxiosError } from "axios";

const initialInput = {
  name: "",
};

function CreateLearn() {
  const [input, setInput] = useState(initialInput);
  const [errorInput, setErrorInput] = useState(initialInput);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
    setErrorInput((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSaveModal = async () => {
    setIsLoading(true);
    try {
      console.log("handleSaveModal");
    } catch (error) {
      console.log("error ModalCreateLearn", error);

      if (error instanceof ZodError) {
        const errMsg = error.errors.reduce((acc, cur) => {
          acc[cur.path] = cur.message;
          return acc;
        }, {});
        setErrorInput(errMsg);
      }

      if (error instanceof AxiosError) {
        const errMsg = error.response?.data?.message;
        toast.error(errMsg);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleCloseModal = () => {
    document.getElementById("my_modal_3").close();
  };

  return (
    <>
      <h1 className="text-center w-full text-2xl">Create Learn</h1>

      <div className="w-full">
        <input
          value={input.name}
          onChange={handleChange}
          name="name"
          type="text"
          placeholder="Enter your Category Name"
          className={`w-full rounded-[6px] p-2 text-center bg-gray-q-1 justify-center outline-0 ${
            errorInput.name && "outline-1 outline-red-400"
          }`}
        />
      </div>
      <WarningInfo />

      <ButtonGroupModal
        isLoading={isLoading}
        handleCloseModal={handleCloseModal}
        handleSaveModal={handleSaveModal}
      />
    </>
  );
}
export default CreateLearn;
