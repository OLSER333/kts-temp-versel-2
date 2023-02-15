// @ts-nocheck
import React, { useContext, useEffect, useRef, useState } from "react";
import { BgImg, BgSectionWrapper, CustomSwiper, Overlay, Stub, SwiperText } from "./bg-section.style";
import bgImg1 from "../../../assets/images/bg-mountains.png";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";
import { PropsContext } from "../../../store/propsContext/context";
import { addressSite } from "../../../api/endpoints";

export const BgSection = () => {
  const overlay = useRef();
  const [ isActive, setIsActive ] = useState(false);

  const { topslider } = useContext(PropsContext)



  useEffect(() => {
    setTimeout(() => {
      setIsActive(true);
    }, 0);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const opacity =
        -document.documentElement.getBoundingClientRect().top /
        document.documentElement.clientHeight;
      // @ts-ignore
      overlay.current.style.background = `rgba(234, 234, 234, ${opacity})`;
    };

    document.addEventListener("scroll", onScroll);

    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  });

  return (
    <>
      <BgSectionWrapper isActive={isActive}>
        <CustomSwiper
          modules={[ Autoplay, Pagination ]}
          autoplay={{
            delay: 33000,
            pauseOnMouseEnter: false,
            disableOnInteraction: false,
          }}
          loop
          slidesPerView={"auto"}
          pagination={{
            clickable: true,
          }}
        >
          {topslider.map(({ backgroundImage, corner, id, text }, idx) => {
            return (
              <SwiperSlide key={id}>
                <>
                  <BgImg layout={"fill"}
                         priority={idx === 0}
                         objectFit={"cover"}
                         src={`${addressSite}${backgroundImage.data.attributes.url}`}
                         alt={text}/>
                  <SwiperText corner={corner} dangerouslySetInnerHTML={{__html: text}}/>
                </>
              </SwiperSlide>
            )
          })}
          <SwiperSlide>
            <BgImg layout={"fill"} priority objectFit={"cover"} src={bgImg1} alt="bg"/>
          </SwiperSlide>
          {/*<SwiperSlide>*/}
          {/*<BgImg layout={"fill"} objectFit={"cover"} src={bgRoom} alt="bg" />*/}
          {/*</SwiperSlide>*/}
          <SwiperSlide>
            <BgImg layout={"fill"} objectFit={"cover"} src={bgImg1} alt="bg"/>
          </SwiperSlide>
        </CustomSwiper>
        <Overlay ref={overlay}/>
      </BgSectionWrapper>
      <Stub/>
    </>
  );
}
  ;
