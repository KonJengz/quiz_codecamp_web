import React, { useState } from "react";
import Button from "../components/Button";
import Welcome from "../icons/Welcome";

function LoginPage() {
  const [input, setInput] = useState();
  return (
    <div className="flex justify-center items-center min-h-screen gap-32">
      <div className="">
        <Welcome className="w-96" />
      </div>

      <div className="w-96">
        <h1 className="text-2xl">Let's Get Started</h1>
        <div>
          <input
            type="text"
            placeholder="Username"
            className="border-b-2 border-y-teal-400"
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            className="border-b-2 border-y-teal-400"
          />
        </div>
        <div className="flex gap-2">
          <input type="checkbox" />
          <h1 className="text-xs">
            I promise that I will try to do it by myself without using AI.
          </h1>
        </div>
        <div>
          <Button />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
