import React, { useEffect, useRef, useState } from 'react';
import {
  CalcCard, CalcCardCategoryName,
  CalcCardMeasurements,
  CalcCardRow,
  CalcCardsWrapper,
  CalcInput, CalcMaterialBtnsWrapper, CalcResult, CalcResultLabel, CalcResultWrapper,
  CalcSectionWrapper
} from "./calc-section.style";
import { CalcMaterialBtn, CalcMaterialBtnActive } from "../../design-system/button/button.style";
import { HeaderText } from "../../design-system/header-text/header-text";


export const CalcSection = ({onNeedHide}) => {
    const CalcCardsWrapperRef = useRef(null)
    useEffect(() => {

      const onScroll = () => {
        // @ts-ignore
        const topNeedHide = CalcCardsWrapperRef.current.getBoundingClientRect().bottom
        if(document.documentElement.scrollTop > topNeedHide) {
          onNeedHide(true)
        } else {
          onNeedHide(false)
        }
      };
      document.addEventListener("scroll", onScroll);
      return () => {
        document.removeEventListener("scroll", onScroll);
      };
    }, []);


    const materials = [
      {
        titleForUser: 'Кирпич',
        warmMetres: 18,
        material: 'brick'
      },
      {
        titleForUser: 'Дерево',
        warmMetres: 15.5,
        material: 'wood'
      },
      {
        titleForUser: 'Железобетон',
        warmMetres: 14,
        material: 'ferroconcrete'
      },
      {
        titleForUser: 'СИП-панели',
        warmMetres: 20,
        material: 'sippanel'
      }

    ]

    const [ square, setSquare ] = useState<number>(43)
    const [ height, setHeight ] = useState<number>(2.7)
    const [ curMaterial, setCurMaterial ] = useState<string>(materials[0].material)


    const handleSquare = (newVal: string) => {
      setSquare(Number(newVal))
    }

    const handleHeight = (newVal: string) => {
      setHeight(Number(newVal))
    }

    const handleMaterial = (newMaterial: string) => {
      if (curMaterial !== newMaterial) {
        setCurMaterial(newMaterial)
      }
    }

    useEffect(() => {
      setResult(getResultCalc)
    }, [ square, height, curMaterial ])

    const minRangeSquare = 0
    const maxRangeSquare = 100

    const minRangeHeight = 0
    const maxRangeHeight = 10

    const getResultCalc = () => {
      const res = (square * height) / materials.filter(el => el.material === curMaterial)[0].warmMetres
      return (res > 0 ? Math.ceil(res) : 1)
    }
    const [ result, setResult ] = useState<number>(getResultCalc())

    return (
      <CalcSectionWrapper ref={CalcCardsWrapperRef}>
        <HeaderText>
          <h2>Сколько нужно обогревателей?</h2>
        </HeaderText>
        <CalcCardsWrapper >
          <CalcCard>
            <CalcCardRow>
              <CalcCardCategoryName>
                <p>S помещения</p>
              </CalcCardCategoryName>
              <p>кв. метры</p>
            </CalcCardRow>

            <CalcInput
              onChange={(e) => handleSquare(e.target.value)}
              type="range"
              style={{
                background: `linear-gradient(to right, #FF8A00 0%, #FF5C00 ${
                  (square * 100) / maxRangeSquare
                }%, #CCCCCC ${(square * 100) / maxRangeSquare}%, #CCCCCC 100%)`,
              }}
              name="square"
              min={minRangeSquare}
              max={maxRangeSquare}
              step="1"
              value={square}
            />
            <CalcCardRow>
              <p>{minRangeSquare} М<sup>2</sup></p>
              <CalcCardMeasurements>
                <p>{square}м2</p>
              </CalcCardMeasurements>
              <p>{maxRangeSquare} М<sup>2</sup></p>
            </CalcCardRow>
          </CalcCard>
          <CalcCard>
            <CalcCardRow>
              <CalcCardCategoryName>
                Высота потолков
              </CalcCardCategoryName>
              <p>метры</p>
            </CalcCardRow>

            <CalcInput
              onChange={(e) => handleHeight(e.target.value)}
              type="range"
              style={{
                background: `linear-gradient(to right, #FF8A00 0%, #FF5C00 ${
                  (height * 100) / maxRangeHeight
                }%, #CCCCCC ${(height * 100) / maxRangeHeight}%, #CCCCCC 100%)`,
              }}
              name="height"
              min={minRangeHeight}
              max={maxRangeHeight}
              step="0.1"
              value={height}
            />
            <CalcCardRow>
              <p>{minRangeHeight} М</p>
              <CalcCardMeasurements>
                <p>{height}м</p>
              </CalcCardMeasurements>
              <p>{maxRangeHeight} М</p>
            </CalcCardRow>
          </CalcCard>
          <CalcCard>
            <CalcCardRow>
              <CalcCardCategoryName>
                <p>Выберите материал стен</p>
              </CalcCardCategoryName>
            </CalcCardRow>
            <CalcCardRow>
              <CalcMaterialBtnsWrapper>
                {materials.map(({ material, warmMetres, titleForUser }, idx) => {
                  return (
                    <>
                      {material === curMaterial ?
                        <CalcMaterialBtnActive
                          onClick={() => handleMaterial(material)}
                          key={idx}>
                          {titleForUser}
                        </CalcMaterialBtnActive>
                        :
                        <CalcMaterialBtn
                          onClick={() => handleMaterial(material)}
                          key={idx}>
                          {titleForUser}
                        </CalcMaterialBtn>
                      }
                    </>
                  )
                })}
              </CalcMaterialBtnsWrapper>
            </CalcCardRow>
          </CalcCard>
        </CalcCardsWrapper>
        {result &&
          (<CalcResultWrapper>
            <CalcResult>{result}</CalcResult>
            <CalcResultLabel>обогревателей необходимо</CalcResultLabel>
          </CalcResultWrapper>)
        }


      </CalcSectionWrapper>
    );
  }
;

