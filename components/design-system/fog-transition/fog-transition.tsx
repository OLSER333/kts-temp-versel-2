import React from 'react';
import { FogBottom, FogTop } from "./fog-transition.style";

type FogTransitionT = {
  direction: 'top' | 'bottom'  // | 'right' | 'left'
  // height?: number | '100%'
  // width?: number | '100%'
}
//
export const FogTranstiion: React.FC<FogTransitionT> = ({ direction }) => {
  return (
    <>
      {
        direction === 'top' && (<FogTop/>)
      }
      {
        direction === 'bottom' && (<FogBottom/>)
      }
    </>

  )
}

