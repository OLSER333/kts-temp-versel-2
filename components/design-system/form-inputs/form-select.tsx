import React, { useContext } from 'react';
import {
  FormInputErrorText,
  FormInputFieldName,
  FormInputStyle,
  FormInputWrapper,
  FormSelectStyle
} from "./form-input.style";
import { EFormInps, Inputs } from "../../common/modal-form/modal-form";
import { FieldErrors } from "react-hook-form";
import { PropsContext } from "../../../store/propsContext/context";

export type FormSelectT = {
  type?: string
  label: string
  placeholder?: EFormInps | string
  register: any
  errors: FieldErrors<Inputs>
  name: EFormInps
  defValue?: string | undefined | null
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  formatFunc?: (str: string) => string
}

export const FormSelect: React.FC<FormSelectT> = ({ errors, label, name, register, placeholder, type }) => {
  const {filialies} = useContext(PropsContext)
  return (
    <FormInputWrapper>
      <FormInputFieldName>{label}</FormInputFieldName>
      <FormSelectStyle
        {...register(name, {
          required: true
        })}
        name={name}

      >
        <>

          {/*<option key={0} value="выбрать" disabled>выбрать</option>*/}
          {filialies.map(({ attributes, id }, idx) => {
            return (<option key={id} value={id}>{attributes.city}</option>)
          })}
        </>
      </FormSelectStyle>
      {!!errors[name] &&
          <FormInputErrorText>
            {errors[name]?.message ? errors[name]?.message : 'Это поле обязательно'}
          </FormInputErrorText>
      }

    </FormInputWrapper>
  );
};

