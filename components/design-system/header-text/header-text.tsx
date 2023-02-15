import { HeaderTextStyles, HeaderTextWrapper } from "./header-text.style";

type HeaderTextT = {
  className?: string
  children?: any
}
export const HeaderText:React.FC<HeaderTextT> = ({children, className}) => {
  return (
    <HeaderTextWrapper className={className}>
      <HeaderTextStyles>
        {children}
      </HeaderTextStyles>
    </HeaderTextWrapper>
  );
};

