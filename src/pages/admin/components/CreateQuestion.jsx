import { useEffect, useState } from "react";
import WarningInfo from "../../../components/WarningInfo";
import ButtonGroupModal from "./ButtonGroupModal";
import { ZodError } from "zod";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import Editor from "../../../components/Editor";
import useCategoriesStore from "../../../stores/categoriesStore";
import CodeEditor from "../../../components/monaco_test/components/CodeEditor";
import CreateTestCaseList from "./questions/test-cases/CreateTestCaseList";
import useQuestionStore, {
  INIT_CREATE_QUESTION_DETAILS,
} from "../../../stores/questionStore";

// For rendering Starter code and solution code
// UI component which use the same Component
const codeEditorUI = [
  {
    id: Date.now(),
    name: "starterCode",
    header: "Starter Code",
    defaultCode: "/** Writing the Starter code here */",
    code: "",
    hdlEdit: function (input, setStateFn) {
      setStateFn(input);
    },
  },
  {
    id: Date.now() + 1,
    name: "solutionCode",
    header: "Solution Code",
    defaultCode: "/** Writing the Solution code here */",
    code: "",
    hdlEdit: function (input, setStateFn) {
      setStateFn(input);
    },
  },
];

function CreateQuestion() {
  // GLOBAL STATE
  const { categories } = useCategoriesStore();
  const { createQuestionDetails, setCreateQuestionDetails } =
    useQuestionStore();

  // LOCAL STATE
  const [errorInput, setErrorInput] = useState(INIT_CREATE_QUESTION_DETAILS);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCreateQuestionDetails(value, name);
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
    document.getElementById("my_modal_1").close();
  };

  useEffect(() => {
    if (categories && categories.length > 0) {
      setCreateQuestionDetails(categories[0].id, "categoryId");
    }
  }, [categories]);

  console.log("Create question details:", createQuestionDetails);

  return (
    <div className=" bg-[#D9D9D9] p-6 max-w-[900px] h-[90%] text-black flex flex-col gap-3">
      <div className="flex justify-between items-baseline gap-12 w-full">
        <div className="flex flex-col flex-1/2 gap-2 ">
          <h1>Name</h1>
          <input
            name="title"
            onChange={handleChange}
            type="text"
            className="bg-[#CCCCCC] w-full p-2 h-10 rounded-[9px]"
          />
          <div className="w-full flex gap-2 ">
            <h1 className="text-sm">
              Name to indicate what this exam is about.
            </h1>
          </div>
        </div>
        <div className="flex flex-col flex-1/2 gap-2">
          <h1>Category</h1>
          <select
            defaultValue="Please Select Categoryr"
            onChange={handleChange}
            name="categoryId"
            className="select select-primary bg-[#CCCCCC] w-full p-2 h-10 rounded-[9px]"
          >
            <option disabled={true}>Please Select Category</option>
            {categories.map((category) => (
              <option value={category.id} key={category.id}>
                {category.name}
              </option>
            ))}
          </select>
          <div className="w-full flex gap-2">
            <h1 className="text-sm">
              Select a category to indicate what this exam is about.
            </h1>
          </div>
        </div>
      </div>
      <div className="mt-2 flex-1 ">
        <h1>Details</h1>
        <Editor
          onChange={(input) => setCreateQuestionDetails(input, "description")}
          placeholder="Enter Details Quiz"
          className="textarea textarea-primary w-full h-[40%] justify-start "
        />
        {/* <textarea
              type="text"
              placeholder="Enter Details Quiz"
              
            ></textarea> */}
      </div>
      <div>
        {/* --- Is Function check box --- */}
        <div className="flex">
          <input
            name="isFunction"
            defaultChecked
            value={createQuestionDetails.isFunction}
            onChange={(e) =>
              setCreateQuestionDetails(e.target.checked, "isFunction")
            }
            type="checkbox"
          />
          <p className="m-2">Is code a function code?</p>
        </div>
        {/* ----------------------------- */}
        {/* --- Variable name Input --- */}
        <h1>fuction/ variable name</h1>
        <input
          name="variableName"
          onChange={handleChange}
          className="rounded-[9px] bg-[#CCCCCC] w-full h-8 rounded-1xl p-3"
          type="text"
          placeholder="Enter Function/ Variable name"
        />
        <div className="flex">
          <h1 className="text-sm">Used to check correctness.</h1>
        </div>
      </div>
      {/* Starter code and Solution code */}
      <div>
        {codeEditorUI.map((component) => (
          <div key={component.id}>
            <h1>{component.header}</h1>
            <CodeEditor
              code={component.code || component.defaultCode}
              hdlEdit={(input) =>
                component.hdlEdit(input, (input) =>
                  setCreateQuestionDetails(input, component.name)
                )
              }
            />
          </div>
        ))}
      </div>

      <div>
        <h1>Test Cases</h1>
        <CreateTestCaseList />
      </div>

      <WarningInfo />
      <ButtonGroupModal
        isLoading={isLoading}
        handleCloseModal={handleCloseModal}
        handleSaveModal={handleSaveModal}
      />
    </div>
  );
}

export default CreateQuestion;
