
export const ymID = 92450047


// Открыл карточку товара ym(92450047,'reachGoal','open_goods')
export const ymOpenGoods = () => {
  //@ts-ignore
  ym(ymID,'reachGoal','open_goods')
}

// Добавил в карзину ym(92450047,'reachGoal','added_to_cart')
export const ymAddedToCart = () => {
  //@ts-ignore
  ym(ymID,'reachGoal','added_to_cart')
}

// Перешел к оформлению заказа ym(92450047,'reachGoal','moved_to_order')
export const ymMovedToOrder = () => {
  //@ts-ignore
  ym(ymID,'reachGoal','moved_to_order')
}

//@ts-ignore
// Оформил заказ  ym(92450047,'reachGoal','placed_an_order')
export const ymPlacedAnOrder = () => {
  //@ts-ignore
  ym(ymID,'reachGoal','placed_an_order')
}

// Отправил заявку на партнёров ym(92450047,'reachGoal','submit_partnership')
export const ymSubmitPartnership = () => {
  //@ts-ignore
  ym(ymID,'reachGoal','submit_partnership')
}

//   Нужен расчёт ym(92450047,'reachGoal','need_calculation')
export const ymNeedCalculation = () => {
  //@ts-ignore
  ym(ymID,'reachGoal','need_calculation')
}

// Удалил товар из корзины ym(92450047,'reachGoal','removed_from_cart')
export const ymRemovedFromCart = () => {
  //@ts-ignore
  ym(ymID,'reachGoal','removed_from_cart')
}






