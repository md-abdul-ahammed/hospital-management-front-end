"use client";

import { DatePicker, DatePickerProps, Input } from "antd";
import { Controller, useFormContext } from "react-hook-form";
import dayjs, { Dayjs } from "dayjs";
import { RangePickerProps } from "antd/es/date-picker";

interface IDatePicker {
  onChange?: (valueOne: Dayjs | null, valueTwo: string) => void;
  name: string;
  value?: Dayjs;
  size?: "large" | "small";
  label?: string;
  placeholder?: string;
  isWithoutPreviousDate?: boolean;
}

const FormDatePicker = ({
  name,
  label,
  onChange,
  size,
  isWithoutPreviousDate = false,
  placeholder,
}: IDatePicker) => {
  const { control, setValue } = useFormContext();
  const disabledDate: RangePickerProps["disabledDate"] = (current) => {
    // Can not select days before today and today
    return current && current < dayjs().startOf("day");
  };

  const handleOnChange: DatePickerProps["onChange"] = (date, dateString) => {
    onChange ? onChange(date, dateString) : null;
    setValue(name, dateString);
  };

  return (
    <div>
      {label ? label : null}
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <DatePicker
            placeholder={placeholder}
            name={name}
            size={size}
            {...(isWithoutPreviousDate && { disabledDate })}
            value={field.value ? dayjs(field.value) : null}
            onChange={handleOnChange}
            className="w-full"
          />
        )}
      />
    </div>
  );
};

export default FormDatePicker;
