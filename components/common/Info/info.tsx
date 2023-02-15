import React from 'react';
import { InfoWrapper } from "./info.style";

export const Info = ({ children }) => {
  return (
    <InfoWrapper>
      {children}
    </InfoWrapper>
  );
};

