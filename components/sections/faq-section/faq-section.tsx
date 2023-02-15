import {
  FaqSectionWrapper,
  FaqShowButton,
  FaqSpoiler,
  FaqSpoilerAnswer,
  FaqSpoilerQuestion
} from "./faq-section.style";
import React, { useContext, useRef, useState } from "react";
import { PropsContext } from "../../../store/propsContext/context";

export const FaqSection = () => {

  const {faq} = useContext(PropsContext)


  const [ activeSpoiler, setActiveSpoiler ] = useState<number>(-1)
  const answRef = useRef<HTMLParagraphElement>(null)
  const setActive = (e, i: number) => {
    if (i === activeSpoiler && e.target.closest('.faqShowButton')) {
      setActiveSpoiler(-1)

    } else {
      setActiveSpoiler(i)
    }
  }

  return (
    <FaqSectionWrapper>
      {faq.map(({ question, answer, id }, i) => {
        const isActive = activeSpoiler === i
        return (
          <FaqSpoiler isActive={isActive} key={id} onClick={(e) => setActive(e, i)}>
            <FaqSpoilerQuestion >
              <>
                <p>{question}</p>
                <FaqShowButton active={isActive} className='faqShowButton'>
                  {isActive ? <div style={{transform: 'scaleX(1.5) translateY(-1px)'}}>-</div> : <div>+</div>}
                </FaqShowButton>
              </>
            </FaqSpoilerQuestion>


            <FaqSpoilerAnswer
              style={{
                maxHeight: `${isActive && answRef.current !== null ?
                   '1000px' : '0px'}`,
                marginTop: `${isActive && answRef.current !== null ?
                  '20px' : '0px'}`
              }}
              active={isActive}
              ref={answRef}>
              {answer}
            </FaqSpoilerAnswer>
          </FaqSpoiler>
        )
      })}
    </FaqSectionWrapper>
  );
};



