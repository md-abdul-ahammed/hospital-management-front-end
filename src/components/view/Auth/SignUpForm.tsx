"use client";

import loginImage from "@/assets/login-form.png";
import Form from "@/components/Form/Form";
import SignUpFormFirst from "@/components/SignUpFormStepper/SignUpFormFirst";
import SignUpFormSecond from "@/components/SignUpFormStepper/SignUpFormSecond";
import StepperForm from "@/components/StepperForm/StepperForm";
import Image from "next/image";

const steps = [
  {
    title: "Basic Info First Step",
    content: <SignUpFormFirst />,
  },
  {
    title: "Basic Info Last Step",
    content: <SignUpFormSecond />,
  },
];

const SignUpForm = () => {
  const onSubmit = async (data: any) => {
    console.log(data);
  };

  return (
    <div className="grid items-center grid-cols-6 md:grid-cols-5">
      <div className="col-span-3 flex justify-center">
        <Image src={loginImage} width={800} alt="login-image" />
      </div>
      <div className="md:col-span-2 w-3/5 col-span-3">
        <Form submitHandler={onSubmit}>
          <StepperForm steps={steps} />
        </Form>
      </div>
    </div>
  );
};

export default SignUpForm;
