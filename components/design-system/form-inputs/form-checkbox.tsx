import React from 'react';
import {
  FormCheckboxStyle,
  FormInputErrorText,
  FormInputWrapper
} from "./form-input.style";
import { EFormInps, Inputs } from "../../common/modal-form/modal-form";
import { FieldErrors } from "react-hook-form";

type FormCheckbox = {
  type: string
  label: string
  register: any
  errors: FieldErrors<Inputs>
  name: EFormInps
  defValue?: string | undefined | null
}
export const FormCheckbox: React.FC<FormCheckbox> = ({ errors,  name, register, type , label}) => {
  return (
    <FormInputWrapper>
      <FormCheckboxStyle>
        <input
          {...register}
          type={type}
          name={name}
        />
        <span>{label}</span>
      </FormCheckboxStyle>
      {!!errors[name] && <FormInputErrorText>
        {errors[name]?.message ? errors[name]?.message : 'Это поле обязательно'}
      </FormInputErrorText>}

    </FormInputWrapper>
  );
};

