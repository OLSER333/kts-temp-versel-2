import { DeliveryCardWrapper } from "./delivery-card.style";
import { addressSite } from "../../../api/endpoints";

// @ts-ignore
export const DeliveryCard:React.FC = ({icon, text, borderColor, textColor}) => {
  return (
    // @ts-ignore
    <DeliveryCardWrapper borderColor={borderColor}>
      <>
        <span style={{color: `${textColor}`}} dangerouslySetInnerHTML={{__html: text}}></span>
        <img src={`${addressSite}${icon}`} alt={text}/>
      </>
    </DeliveryCardWrapper>
  );
};

