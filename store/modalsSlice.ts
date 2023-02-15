import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { EModalTypes, modalSliceInitialT, ModalTypesT } from "./types";


const initialState: modalSliceInitialT = {
  modalList: [
    {
      type: EModalTypes.CART,
      isOpen: false
    },
    {
      type: EModalTypes.PARTNER,
      isOpen: false
    },
    {
      type: EModalTypes.CALC,
      isOpen: false
    },
    {
      type: EModalTypes.CHECKOUT,
      isOpen: false
    },
    {
      type: EModalTypes.DETAIL,
      isOpen: false
    },
    {
      type: EModalTypes.BURGER,
      isOpen: false
    },

  ],
  currentDetailId: 0,
  headerLogoIsBlack: false,
  headerHasBack: false
}

export const modalSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    closeAllModals: (state = initialState) => {
      state.modalList = state.modalList.map(modal => {
        return {
          ...modal, isOpen: false
        }
      })
      // if(!state.headerHasBack) state.headerLogoIsBlack = false

    },
    openModal: (state = initialState, action: PayloadAction<ModalTypesT>) => {
      state.modalList = state.modalList.map(modal => {
        return {
          ...modal,
          isOpen: action.payload === modal.type ? true : false
        }
      })
      // setBlackLogo()
      // if(!state.headerLogoIsBlack) state.headerLogoIsBlack = true
    },
    setCurrentDetailId: (state = initialState, action: PayloadAction<number>) => {
      state.currentDetailId = action.payload
    },
    setBlackLogo: (state = initialState) => {
      if(!state.headerLogoIsBlack) state.headerLogoIsBlack = true
    },
    setWhiteLogo: (state = initialState) => {
      if(state.headerLogoIsBlack) state.headerLogoIsBlack = false
    },
    setHeaderBack: (state = initialState) => {
      if(!state.headerHasBack) state.headerHasBack = true


    },
    unsetHeaderBack: (state = initialState) => {
      if(state.headerHasBack) state.headerHasBack = false
    }
  },
})

// Action creators are generated for each case reducer function
export const {
  closeAllModals,
  openModal,
  setCurrentDetailId,
  setWhiteLogo,
  setBlackLogo,
  setHeaderBack,
  unsetHeaderBack
} = modalSlice.actions

// export default cartSlice.reducer
export default modalSlice.reducer