import { useEffect, useState } from "react";
import { modalListT, ModalTypesT } from "../store/types";


export const useMatchQuery = (query: string) => {
  const [matches, setMatches] = useState(false)
// @ts-ignore
  const handleChange = (e) => setMatches( e.matches )

  useEffect(() => {
    const m = window.matchMedia(query)

    setMatches(m.matches)

    m.addEventListener('change', handleChange);

    return () => {
      m.removeEventListener('change', handleChange);
    }
  }, []);

  return matches;
}

export const getIsOpen = (modalList: modalListT, currentType: ModalTypesT) => {
  return modalList.filter(modal => modal.type === currentType)[0].isOpen
}

// @ts-ignore
export const getAllPrice = (allOrderList) => {
  // @ts-ignore
  return allOrderList.reduce((sum, cur) => {
    sum += cur.attributes.price
    return sum
  }, 0)
}

// @ts-ignore
export const getAllOrders = (productList, cartList) => {
  // @ts-ignore
  return cartList.map(cartId => {
    // @ts-ignore
    return productList.find(product => product.id === cartId)
  })
}

//don't work, but why??
// export const customScrollTo = (selector: string) => {
//   const elem = document.querySelector(`${selector}`)
//   if(elem) {
//       elem.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
//   }
// }

/**
 *
 * @param isOpen
 * About solution look at article: Prevent Page Scrolling When a Modal is Open
 * https://css-tricks.com/prevent-page-scrolling-when-a-modal-is-open/
 */
export function useNoScroll(isOpen: boolean) {
  useEffect(() => {
    // const handleScrollY = () => document.documentElement
    //     .style.setProperty('--scroll-y', `${window.scrollY}px`);

    // window.addEventListener('scroll', handleScrollY);
    if (isOpen) {
      const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
      const body = document.body;
      body.classList.add('no-scroll')
      // body.style.position = 'fixed';
      // body.style.top = `-${scrollY}`;
      // const documentWidth = document.documentElement.clientWidth;
      // const windowWidth = window.innerWidth;
      // const scrollbarWidth = windowWidth - documentWidth;
      // body.style.marginRight = `${scrollbarWidth}`
    } else if (document.body.classList.contains('no-scroll')) {
      document.body.classList.remove('no-scroll');
      // const body = document.body;
      // const scrollY = body.style.top;
      // body.style.position = '';
      // body.style.top = '';
      // window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }

    // return () => window.removeEventListener('scroll', handleScrollY);
  }, [ isOpen ]);
}

const debounce = (fn: Function, ms = 300) => {
  let timeoutId: ReturnType<typeof setTimeout>;
  return function (this: any, ...args: any[]) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), ms);
  };
};

const throttle = (fn: Function, wait: number = 300) => {
  let inThrottle: boolean,
    lastFn: ReturnType<typeof setTimeout>,
    lastTime: number;
  return function (this: any) {
    const context = this,
      args = arguments;
    if (!inThrottle) {
      fn.apply(context, args);
      lastTime = Date.now();
      inThrottle = true;
    } else {
      clearTimeout(lastFn);
      lastFn = setTimeout(() => {
        if (Date.now() - lastTime >= wait) {
          fn.apply(context, args);
          lastTime = Date.now();
        }
      }, Math.max(wait - (Date.now() - lastTime), 0));
    }
  };
};

export function clamp(num: number, min: number, max: number) {
  return Math.min(Math.max(num, min), max);
}

export function formatPhoneNumber(value: string) {
  const phone = value.replace(/\D/g, "");
  return phone
    .slice(0, 11)
    .replace(/^(\d{1})?(\d{3})(\d{3})(\d{4})$/, "$1 ($2) $3-$4");
}


