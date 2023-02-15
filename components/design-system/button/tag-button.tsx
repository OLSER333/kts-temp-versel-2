import React, { MouseEvent } from 'react';
import { TagBtn, TagBtnActive, TagBtnText } from "./button.style";
import { Fire } from "../../../assets";


type TagBtnT = {
  children: string
  hasIcon: boolean
  onClick?: (e: MouseEvent<HTMLElement>) => void
  isActive: boolean

}
export const TagButton: React.FC<TagBtnT> = ({ children, hasIcon, onClick, isActive }) => {
  return (
    <>
      {isActive ?
        (
          <TagBtnActive onClick={onClick} >
            <>
            <TagBtnText  dangerouslySetInnerHTML={{__html: children}}/>
            {hasIcon ? <Fire/> : ''}
              </>
          </TagBtnActive>
        ) :
        (
          <TagBtn onClick={onClick} >
            <TagBtnText  dangerouslySetInnerHTML={{__html: children}}/>
            {hasIcon ? <Fire/> : ''}
          </TagBtn>
        )
      }
    </>
  )
};