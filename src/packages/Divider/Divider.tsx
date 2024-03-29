import { COLORS } from "../Colors";
import { Wrapper } from "./styled";
import { DividerProps } from "./types";

export function Divider({
  color = COLORS.NEUTRAL[50],
  margin = 20,
  className,
}: DividerProps) {
  const dividerStyles = {
    backgroundColor: color,
    marginTop: margin,
    marginBottom: margin,
  };

  return <Wrapper className={className} style={dividerStyles} />;
}
