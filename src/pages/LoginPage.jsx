import React, { useState } from "react";
import Welcome from "../icons/Welcome";
import InputLogin from "../components/InputLogin";
import { loginSchema } from "../utils/validator";
import { ZodError } from "zod";
import { toast } from "react-toastify";
import ButtonMain from "../components/ButtonMain";
import Rocket from "../icons/Rocket";

import * as motion from "motion/react-client";
import Lets from "../icons/Lets";
import { LoaderCircle } from "lucide-react";
import CheckBox from "../components/CheckBox";
import useAuthStore from "../stores/authStore";
import { AxiosError } from "axios";

const initialInput = {
  username: "",
  password: "",
};

function LoginPage() {
  const [input, setInput] = useState(initialInput);
  const [inputError, setInputError] = useState(initialInput);
  const [isLoading, setIsLoading] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const actionLogin = useAuthStore((state) => state.actionLogin);
  const actionGetMe = useAuthStore((state) => state.actionGetMe);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInput((prev) => ({ ...prev, [name]: value }));
    setInputError((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      loginSchema.parse(input);
      if (!isChecked) {
        toast.error("Please check the checkbox");
        return;
      }

      await actionLogin(input);
      await actionGetMe();

      setInputError(initialInput);
      setInput(initialInput);

      toast.success("Login successfully");
    } catch (error) {
      console.log(error);

      if (error instanceof ZodError) {
        const errMsg = error.errors.reduce((acc, cur) => {
          acc[cur.path] = cur.message;
          return acc;
        }, {});
        setInputError(errMsg);
      }

      if (error instanceof AxiosError) {
        const errMsg = error.response?.data?.message;

        return toast.error(errMsg);
      }

      toast.error("invalid Login");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen gap-36 text-gray-q-1">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.3,
          scale: {
            type: "spring",
            visualDuration: 0.3,
            bounce: 0.5,
          },
        }}
      >
        <Welcome className="w-100" />
      </motion.div>

      <div className="w-96">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.3,
            delay: 0.1,
            x: {
              type: "spring",
              visualDuration: 0.3,
              bounce: 0.5,
              delay: 0.1,
            },
          }}
          className="text-2xl mb-6 flex items-end gap-2"
        >
          <Lets className="w-20" />
          <span className="relative -bottom-1">Get Started</span>
        </motion.div>

        <form onSubmit={handleSubmit} className="flex flex-col">
          <div className="space-y-4 mb-7">
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.3,
                delay: 0.2,
                x: {
                  type: "spring",
                  visualDuration: 0.3,
                  bounce: 0.5,
                  delay: 0.2,
                },
              }}
            >
              <InputLogin
                handleInputChange={handleInputChange}
                nameInput="username"
                placeholder="Enter your Username"
                error={inputError.username}
                valueInput={input.username}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.3,
                delay: 0.3,
                x: {
                  type: "spring",
                  visualDuration: 0.3,
                  bounce: 0.5,
                  delay: 0.3,
                },
              }}
            >
              <InputLogin
                handleInputChange={handleInputChange}
                nameInput="password"
                placeholder="Enter your Password"
                typeInput="password"
                error={inputError.password}
                valueInput={input.password}
              />
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.3,
              delay: 0.4,
              x: {
                type: "spring",
                visualDuration: 0.3,
                bounce: 0.5,
                delay: 0.4,
              },
            }}
            className="flex gap-2 mb-10 items-center"
          >
            <CheckBox setIsChecked={setIsChecked} isChecked={isChecked} />
            <h1 className="text-xs">
              I promise that I will try to do it by myself without using AI.
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.75,
            }}
          >
            <ButtonMain
              btn="active"
              disableBtn={input.password !== "" && input.username !== ""}
            >
              {isLoading ? (
                <LoaderCircle className="animate-spin" />
              ) : (
                <Rocket className="w-4 fill-gray-q-1" />
              )}
              Login
            </ButtonMain>
          </motion.div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
