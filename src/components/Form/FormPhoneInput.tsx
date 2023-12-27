import React, { useEffect, useRef, useState } from "react";
import { Button, Input, InputRef, Space } from "antd";
import { CountrySelector, usePhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { useFormContext, Controller } from "react-hook-form";

interface CombinedAntFormPhoneInputProps {
  name: string;
  label?: string;
  size?: "large" | "small";
  value: string;
  onChange: (phone: string) => void;
}

const FormPhoneInput: React.FC<CombinedAntFormPhoneInputProps> = ({
  name,
  label,
  size,
  value,
  onChange,
}) => {
  const { control } = useFormContext();

  const phoneInput = usePhoneInput({
    defaultCountry: "bd",
    value: value,
    onChange: (data) => {
      onChange(data.phone);
    },
  });

  const inputRef = useRef<InputRef>(null);
  const [cursorPosition, setCursorPosition] = useState<number | null>(null);

  useEffect(() => {
    if (inputRef.current?.input && cursorPosition !== null) {
      inputRef.current.input.setSelectionRange(cursorPosition, cursorPosition);
    }
  }, [cursorPosition]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const previousValue = phoneInput.phone;
    phoneInput.handlePhoneValueChange(e);
    const lengthDifference = phoneInput.phone.length - previousValue.length;
    setCursorPosition((prevCursorPosition) => {
      return prevCursorPosition !== null
        ? prevCursorPosition + lengthDifference
        : null;
    });
  };

  return (
    <>
      {label && <span>{label}</span>}
      <Controller
        control={control}
        name={name}
        render={({ field }) => {
          console.log(field);
          return (
            <div style={{ display: "flex", alignItems: "center" }}>
              <Space.Compact className="w-full">
                <CountrySelector
                  selectedCountry={phoneInput.country.iso2}
                  onSelect={(country) => phoneInput.setCountry(country.iso2)}
                  renderButtonWrapper={({ children, rootProps }) => (
                    <Button
                      {...rootProps}
                      style={{
                        padding: "4px",
                        height: "100%",
                        zIndex: 1, // fix focus overlap
                      }}
                    >
                      {children}
                    </Button>
                  )}
                  dropdownStyleProps={{
                    style: {
                      top: "35px",
                    },
                  }}
                />
                <Input
                  placeholder="Phone number"
                  type="tel"
                  size={size}
                  value={phoneInput.phone}
                  onChange={handleInputChange}
                  ref={inputRef}
                />
              </Space.Compact>
            </div>
          );
        }}
      />
    </>
  );
};

export default FormPhoneInput;
