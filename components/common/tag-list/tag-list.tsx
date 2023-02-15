import React, { useContext } from 'react';
import { TagListWrapper } from "./tag-list.style";
import { TagButton } from "../../design-system";
import { PropsContext } from "../../../store/propsContext/context";

export const TagList = ({ onTag, curFilter, isCatalogPage = false }) => {
  const { categories } = useContext(PropsContext)


  const setActive = (newId: number) => {
    if(curFilter !== newId) onTag(newId)
  }

  return (
    <TagListWrapper isCatalogPage={isCatalogPage}>
      <TagButton onClick={() => setActive(-1)}
                 isActive={curFilter === -1}
                 hasIcon={false}>
        Все товары
      </TagButton>
      {categories.map(({ attributes, id }) => {
        return (
          <li key={id}>
            <TagButton onClick={() => setActive(id)}
                       isActive={curFilter === id}
                       hasIcon={attributes.showFire}>
              {attributes.name}
            </TagButton>
          </li>
        )
      })}
    </TagListWrapper>
  );
};
