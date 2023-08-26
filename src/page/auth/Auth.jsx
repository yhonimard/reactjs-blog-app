import { useSearchParams } from "react-router-dom";
import AuthForm from "./Form";
import { useForm } from "react-hook-form";
import { useCallback } from "react";

const Auth = () => {
  const [searchParams] = useSearchParams();
  const isLoginUrl = searchParams.get("mode") == "login";

  const { register, handleSubmit } = useForm();

  // const onSubmit = useCallback((e) => {
  //   console.log(e);
  // }, []);
  const onSubmit = (e) => {
    console.log(e);
  };

  return (
    <div className="w-screen h-screen bg-zinc-950">
      <div className="container mx-auto flex justify-center items-center w-screen h-screen  max-w-lg px-4">
        <div className="bg-neutral-900 p-10 w-full border border-zinc-800 rounded">
          <h5 className="text-center text-3xl mb-1">
            {isLoginUrl ? "Login" : "Signup"}
          </h5>
          <AuthForm
            isLoginUrl={isLoginUrl}
            register={register}
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default Auth;