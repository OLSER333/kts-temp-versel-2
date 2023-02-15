// @ts-nocheck
import styled from "@emotion/styled";
import {
  Breakpoints,
  getCurrentFontSizeStyle,
  getCurrentFontStyle,
  getCurrentPaddingStyle,
} from "../../../styles";

export const WrapperInfo = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border-radius: 32px;
  max-width: 520px;
  width: 100%;
  height: calc(100vh - 200px);
  ${getCurrentPaddingStyle("pig", "horizontal")}
  @media screen and (max-width:1000px) {
    min-width: 50%;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    max-width: 100%;
  }
  @media screen and (max-width: 768px) {
    ${({ isActive }) => (isActive ? "display: flex" : "display: none;")}
  }
`;

export const List = styled.ul`
  margin-top: 32px;
  height: 100%;
  overflow-y: auto;
  position: relative;
  ${getCurrentPaddingStyle("dog", "bottom")}
`;

type TitleT = {
  onMobile?: boolean
  onPc?: boolean
}
export const Title = styled.h2<TitleT>`
  ${getCurrentPaddingStyle("dog", "top")};
  ${getCurrentFontStyle("main")};
  ${getCurrentFontSizeStyle("main")};
  display: ${({onPc}) => !onPc ? 'none': ''  };
  @media screen and (max-width: ${Breakpoints.tabletSM}) {
    display: ${({onMobile}) => !onMobile ? 'none': ''  };
    display: ${({onMobile}) => onMobile ? 'block': ''  };
    margin-bottom: ${({onMobile}) => onMobile ? '40px;': ''};
    text-align: ${({onMobile}) => onMobile ? 'center': ''};
  }
`;

export const Tabs = styled.div`
  display: flex;
  margin-top: 16px;
`;

export const TabWrapper = styled.button`
  background: #0f1f2f;
  border-radius: 20px;
  height: 40px;
  display: flex;
  align-items: center;
  gap: 8px;
  padding-left: 16px;
  padding-right: 16px;
  color: white;
  text-transform: uppercase;
  ${getCurrentFontStyle("smallest")}
  ${getCurrentFontSizeStyle("smallest")}
  margin-right: 6px;
  position: relative;
`;

export const TabList = styled.div`
  background: #eaeaea;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  padding: 18px;
  position: absolute;
  left: 0;
  top: calc(100% + 2px);
  width: 300px;
  z-index: 1;
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${getCurrentPaddingStyle("chicken", "vertical")}
  ${getCurrentPaddingStyle("cat", "horizontal")}
  border: 1px solid rgba(15, 31, 47, 0.1);
  border-radius: 24px;
  margin-bottom: 10px;
`;

export const CardTitle = styled.h3`
  ${getCurrentFontStyle("smallest")}
  ${getCurrentFontSizeStyle("smallest")}
  margin-bottom: 8px;
`;

export const CardSubTitle = styled.div`
  ${getCurrentFontStyle("smallest")}
  ${getCurrentFontSizeStyle("smallest")}
  text-transform: uppercase;
  color: rgba(15, 31, 47, 0.4);
`;

export const CardButtons = styled.div`
  display: flex;
  gap: 8px;
  width: 100%;
  ${getCurrentPaddingStyle("chicken", "top")}
`;

export const CardButton = styled.button`
  ${getCurrentFontStyle("smallest")}
  ${getCurrentFontSizeStyle("smallest")}
  text-transform: uppercase;
  background: linear-gradient(268.02deg, #00c2ff -14.53%, #0085ff 96.05%);
  border-radius: 24px;
  ${getCurrentPaddingStyle("butterfly", "vertical")}
  color: white;
  flex: 1;
`;

export const CardSubButton = styled.button`
  ${getCurrentFontStyle("smallest")}
  ${getCurrentFontSizeStyle("smallest")}
  ${getCurrentPaddingStyle("butterfly", "vertical")}
  text-transform: uppercase;
  background: #eaeaea;
  border-radius: 24px;
  flex: 1;
  cursor: default;
  opacity: 0.4;
`;

export const MapSectionOuterWrapper = styled.section`
  display: flex;
  flex-direction: column;
`;
export const MapSectionWrapper = styled.div`
  display: flex;
  overflow: hidden;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const MapWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 200px);

  @media screen and (max-width: 768px) {
    ${({ isActive }) => (isActive ? "display: flex" : "display: none;")}
  }
`;

export const MobileSectionTabs = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
    width: 100%;
    margin-bottom: 8px;
    gap: 4px;
  }
`;

export const SrctionTab = styled.button`
  ${getCurrentFontStyle("smallest")}
  ${getCurrentFontSizeStyle("smallest")}
  text-transform: uppercase;
  color: #eaeaea;
  border-radius: 24px;
  background: #0f1f2f;
  border-radius: 20px;
  height: 40px;
  width: 100%;

  ${({ isActive }) => (isActive ? "color: #000; background: white;" : "")}
`;

export const StyledMap = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 32px;
  overflow: hidden;
`;

export const ListItem = styled.button`
  display: flex;
  gap: 10px;
  ${getCurrentFontStyle("smallest")}
  ${getCurrentFontSizeStyle("smallest")}
  ${({ isActive }) => (isActive ? "" : "opacity: 0.4;")};
  :not(:last-of-type) {
    margin-bottom: 14px;
  }
`;

export const Checkbox = styled.div`
  ${({ isActive }) => (isActive ? "border: 2px solid #ff5c00;" : "border: 2px solid #0F1F2F;")}
  ${({ isRadio }) => (isRadio ? "border-radius: 50%" : "border-radius: 4px;")};

  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;

  :after {
    content: "";
    ${({ isActive }) => (isActive ? "background: #ff5c00;" : "display: none;")};
    ${({ isRadio }) => (isRadio ? "border-radius: 50%" : "border-radius: 2px;")};

    width: 8px;
    height: 8px;
  }
`;

export const CountCity = styled.div`
  background: linear-gradient(268.02deg, #00c2ff -14.53%, #0085ff 96.05%);
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`;

export const SelectedSortText = styled.div`
  color: #01acff;
`;
