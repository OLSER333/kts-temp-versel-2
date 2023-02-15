import { IconInfoPropT } from "./types";
import { IconInfoWrapper } from "./icon-info.style";
import { Typography } from "../typography";

export const IconInfo: React.FC<IconInfoPropT> = ({ Icon, text = "", ...props }) => (
  <IconInfoWrapper {...props}>
    <Icon/>
    <Typography ml="ant" color="mainBlack" fontType="middle">
      {text}
    </Typography>
  </IconInfoWrapper>
);
