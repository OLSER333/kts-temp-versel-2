import React, { Ref, forwardRef } from "react";

import { Text } from "./typography.style";
import { TypographyPropsT } from "./types";

export const Typography: React.FC<TypographyPropsT> = forwardRef(function Typography(
  { as = "p", ...props },
  ref: Ref<HTMLParagraphElement>
) {
  return <Text as={as} ref={ref} {...props} />;
});
