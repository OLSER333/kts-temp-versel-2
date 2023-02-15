import {
  AdvantagesCards,
  AdvantagesInfo,
  AdvantagesMainText,
  AdvantagesSubText,
  AdvantagesInner,
  AdvantagesWrapper,
} from "./advantages.style";
import { AdvantageCard } from "../../common/advantage-card";
import { useContext, useEffect, useRef, useState } from "react";
import { PropsContext } from "../../../store/propsContext/context";

export const Advantages = () => {
  const { advantage } = useContext(PropsContext)
  const { cards, secondBlockDescription, secondBlockTitle } = advantage

  const advantagesWrapperRef = useRef(null);
  const [ countOfShownCards, setCountOfShownCards ] = useState(0);

  const step = 2 / cards.length;

  useEffect(() => {
    const onScroll = () => {
      //@ts-ignore
      const rect = advantagesWrapperRef.current.getBoundingClientRect();

      const bottomBorder = rect.bottom - document.documentElement.clientHeight;

      if (rect.top <= 100 && bottomBorder >= -100) {
        setCountOfShownCards(
          Math.floor((2 - bottomBorder / document.documentElement.clientHeight) / step + 1)
        );
      }
    };

    document.addEventListener("scroll", onScroll);

    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, []);
  return (
    <AdvantagesWrapper ref={advantagesWrapperRef}>
      <AdvantagesInner>
        <AdvantagesInfo>
          <AdvantagesMainText dangerouslySetInnerHTML={{ __html: `${secondBlockTitle}` }}/>

          <AdvantagesSubText dangerouslySetInnerHTML={{ __html: `${secondBlockDescription}` }}/>
        </AdvantagesInfo>
        <AdvantagesCards>
          {cards.map(({ title, subDescription, description, colorHex, id, icon }, index) => {
            return (
              <AdvantageCard
                isShown={index < countOfShownCards}
                title={title}
                subDescription={subDescription}
                icon={icon.data.attributes.url}
                description={description}
                key={id}
                color={colorHex}
              />
            );
          })}
        </AdvantagesCards>
      </AdvantagesInner>
    </AdvantagesWrapper>
  );
};
