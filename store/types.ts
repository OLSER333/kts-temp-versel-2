
export enum EModalTypes {
  CART = 'cart',
  PARTNER = 'partner',
  CALC = 'calc',
  CHECKOUT = 'checkout',
  DETAIL = 'detail',
  BURGER = 'burger'
}

export type ModalTypesT =
  EModalTypes.CART
  | EModalTypes.PARTNER
  | EModalTypes.CALC
  | EModalTypes.CHECKOUT
  | EModalTypes.DETAIL
  | EModalTypes.BURGER

export type modalItem = {
  isOpen: boolean
  type: ModalTypesT

}

export type modalListT = modalItem[]

export type modalSliceInitialT = {
  modalList: modalListT
  currentDetailId: number
  headerLogoIsBlack: boolean
  headerHasBack: boolean
}

/////////////////////// productsSlice types
// export type productT = {
//   id: number,
//   attributes: {
//     description: string
//     isNew: boolean
//     isSale: boolean
//     name: string
//     originalPrice: number
//     price: number
//     showOnMain: boolean
//   }
//
// }
//
// export type productListT = {
//   productList: productT[] | null
// }

///////////////////// cartSlice types

