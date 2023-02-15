import { Colors } from "../../../styles";
import { UnderlineT } from "./types";

const getColor = (color: UnderlineT) => (color !== true ? Colors[color] : Colors.black);

export const applyUnderline = ({ underline }: {underline?: UnderlineT}) =>
  underline ? `border-bottom: 1px dashed ${getColor(underline)};` : "";
