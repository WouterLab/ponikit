import { styled } from "@linaria/react";
import { css } from "@linaria/core";
import { COLORS } from "../Colors";
import { H3_STYLES, TEXT1_STYLES } from "../Typography";

const { NEUTRAL } = COLORS;

export const Wrapper = styled.div`
  border-radius: 8px;
  background-color: ${NEUTRAL[80]};
  color: ${NEUTRAL[0]};
  padding: 10px 60px;

  @media (max-width: 768px) {
    padding: 10px 20px;
  }
`;

export const StepWrapper = styled.div`
  width: 100%;
  padding: 5px 0;
`;

export const arrowStyles = css`
  width: 24px;
  height: 24px;
  min-width: 24px;
  min-height: 24px;
  transition: all 0.3s;

  path {
    fill: ${NEUTRAL[0]};
  }
`;

export const Header = styled.div`
  cursor: pointer;
  padding: 10px 20px;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: ${NEUTRAL[40]};

    .${arrowStyles} {
      path {
        fill: ${NEUTRAL[40]};
      }
    }
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;

export const Title = styled.div`
  ${H3_STYLES};
`;

export const reverseStyles = css`
  transform: rotate(180deg);
`;

export const Content = styled.div`
  transition:
    max-height 0.3s ease-in-out,
    margin-top 0.3s ease-in-out,
    padding-top 0.3s ease-in-out,
    padding-bottom 0.3s ease-in-out;
  opacity: 1;
  padding: 0 20px 20px 20px;
  box-sizing: border-box;
  overflow: hidden;
  ${TEXT1_STYLES};
`;

export const hiddenStyles = css`
  max-height: 0px;
  overflow: hidden;
  margin-top: 0;
  padding: 0 20px;
`;
