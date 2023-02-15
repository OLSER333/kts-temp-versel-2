// константы которые используются в проекте
export * from "./constants";

// Mixins, которые нужно подключать в стили, чтобы можно было менять стили компонента из пропсов
// Пример использования:
export * from "./mixins";

// Функции, которые нужно подключать в стили, они возвращают нужный стиль
// Пример использования:
export * from "./get-styles-utils";

// Функция для адаптации стиля под разные разрешения
// Пример использования:
// getResponsiveStyle('color')(['red', 'green', 'blue']) =>
//  color: 'red'
// '@media(max-width: 1920px)': {
//   color: 'green'
// }
// '@media(max-width: 1600px)': {
//   color: 'blue'
// }
export * from "./media-query-utils";

// Функции, которые облегчат верстку
export {
  // Функция для преобразования цвета из формата HEX в RGBA.
  // Пример использования: hexToRGBA('#FFFFFF', 0.2) => 'rgba(255, 255, 255, 0.2)'
  hexToRGBA,
  getSizeInVw,
} from "./utils";

export * from "./types";
