import React from 'react';
import {
  FormInputErrorText,
  FormInputFieldName,
  FormInputWrapper,
  FormTextareaStyle
} from "./form-input.style";
import { EFormInps, Inputs } from "../../common/modal-form/modal-form";
import { FieldErrors } from "react-hook-form";
interface FormInputT {
  type: string
  label: string
  placeholder: EFormInps | string
  register: any
  errors: FieldErrors<Inputs>
  name: EFormInps
  defValue?: string | undefined | null
}
export const FormTextarea: React.FC<FormInputT> = ({errors, label, name, register, placeholder, type}) => {
  return (
    <FormInputWrapper>
      <FormInputFieldName>{label}</FormInputFieldName>
      <FormTextareaStyle
        {...register}
        isError={!!errors[name]}
        type={type}
        placeholder={placeholder}
        name={name}
      />
      {!!errors[name] && <FormInputErrorText>
        {errors[name]?.message ? errors[name]?.message : 'Это поле обязательно'}
      </FormInputErrorText>}

    </FormInputWrapper>
  );
};

