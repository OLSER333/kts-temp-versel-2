export const baseURL = `https://teplokvarc.ru/api`
export const addressSite = 'https://teplokvarc.ru/'
export enum EApi{
  productsOnMain = `/tovaries?populate=image,attributes,kategorii`, // ?showOnMain=true
  productsCatalog = `/tovaries?populate=image,attributes`,
  forms = '/forms',
  lending = 'https://teplokvarc.ru/api/landing-content?populate=topslider,topslider.backgroundImage,faq,qualitytiles,qualitytiles.icon,orderProcessTiles,orderProcessTiles.imageUrl,showRoomImage,socialNetworks,socialNetworks.networkIcon,ogImage',
  categories = '/kategoriis',
  filiales = '/filialies'

}

