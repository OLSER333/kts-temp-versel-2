import { CartBtn, CartOrderCount } from "./button.style";
import { useMatchQuery } from "../../../utils";
import { Breakpoints } from "../../../styles";
import { CartMobile } from "../../../assets";

type CartBtnT = {
  children: string
  count?: number
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;

}
export const CartButton: React.FC<CartBtnT> = ({ children, count, onClick }) => {
  const isTablet = useMatchQuery(`(max-width: ${Breakpoints.tabletLG}`)
  return (
    <CartBtn onClick={onClick}>
      <>
        {!isTablet && children}
        {isTablet && <CartMobile style={{
          transform: 'scale(1.5)'
        }}/>}
        {count !== 0 ? <CartOrderCount key={count}>{count}</CartOrderCount> : null}
      </>
    </CartBtn>
  );
};

