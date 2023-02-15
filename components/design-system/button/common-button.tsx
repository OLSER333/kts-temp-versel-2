import { Ref, forwardRef } from "react";

import { ButtonPropT } from "./types";
import { ButtonWrapper } from "./button.style";
//@ts-ignore
export const Button: React.FC<ButtonPropT> = forwardRef(function Button(
  { children,  ...props },
  ref: Ref<HTMLButtonElement>
) {
  return (
    <ButtonWrapper {...props}>
      {children}
    </ButtonWrapper>
  );
});
