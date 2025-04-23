// @ts-nocheck

import { ZodError } from "zod";
import WarningInfo from "../../../components/WarningInfo";
import ButtonGroupModal from "./ButtonGroupModal";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import useCategoriesStore from "../../../stores/categoriesStore";

const initialErrorInput = {
  name: "",
  isChallenge: false,
};

function CreateCategory({ text, idModal, hdlApi, categoryEdit }) {
  const initialInput = {
    name: categoryEdit?.name || "",
    isChallenge: categoryEdit ? categoryEdit.isChallenge : false,
  };

  const [input, setInput] = useState(initialInput);
  const [errorInput, setErrorInput] = useState(initialErrorInput);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
    setErrorInput((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSaveModal = async () => {
    setIsLoading(true);
    try {
      await hdlApi(input);
      handleCloseModal();
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

  useEffect(() => {
    if (categoryEdit) {
      setInput(categoryEdit);
    }
  }, [categoryEdit]);

  const handleCloseModal = () => {
    document.getElementById(`my_modal_${idModal}`).close();
    setInput(initialInput);
    setErrorInput(initialErrorInput);
  };

  return (
    <>
      <h1 className="text-center w-full text-2xl">{text}</h1>
      <div className="w-full space-y-1">
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
        {errorInput.name && (
          <p className="text-red-400 text-sm">{errorInput.name}</p>
        )}
      </div>
      <div>
        <input
          type="checkbox"
          value={input.isChallenge}
          onChange={(e) =>
            setInput((prev) => ({ ...prev, isChallenge: e.target.checked }))
          }
          name="isChallenge"
        />
        <span>isChallenge</span>
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
export default CreateCategory;
