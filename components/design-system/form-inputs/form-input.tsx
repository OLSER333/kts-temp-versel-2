import React from 'react';
import { FormInputErrorText, FormInputFieldName, FormInputStyle, FormInputWrapper } from "./form-input.style";
import { EFormInps, Inputs } from "../../common/modal-form/modal-form";
import { FieldErrors } from "react-hook-form";

export type FormInputT = {
  type: string
  label: string
  placeholder: EFormInps | string
  register: any
  errors: FieldErrors<Inputs>
  name: EFormInps
  defValue?: string | undefined | null
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  formatFunc?: (str: string) => string
}

export const FormInput: React.FC<FormInputT> = ({ errors, label, name, register, placeholder, type }) => {
  return (
    <FormInputWrapper>
      <FormInputFieldName>{label}</FormInputFieldName>
      <FormInputStyle
        {...register}
        onChange={register.onChange}
        isError={!!errors[name]}
        type={type}
        placeholder={placeholder}
        name={name}

      />
      {!!errors[name] &&
        <FormInputErrorText>
          {errors[name]?.message ? errors[name]?.message : 'Это поле обязательно'}
        </FormInputErrorText>
      }

    </FormInputWrapper>
  );
};

