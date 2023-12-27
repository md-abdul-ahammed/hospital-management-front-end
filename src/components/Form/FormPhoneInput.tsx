import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { AntPhoneInput } from "./AntPhoneInput/AntPhoneInput";

interface FormAntPhoneProps {
  name: string;
  label?: string;
}

const FormPhoneInput: React.FC<FormAntPhoneProps> = ({ name, label }) => {
  const { control } = useFormContext();

  return (
    <>
      {label ? <span>{label}</span> : null}
      <Controller
        control={control}
        name={name}
        render={({ field }) => {
          return (
            <AntPhoneInput value={field.value} onChange={field.onChange} />
          );
        }}
      />
    </>
  );
};

export default FormPhoneInput;
