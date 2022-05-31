import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 24px;
`;

export const SelectWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Select = styled.select`
  background: #ffffff;
  border: 2px solid #cad6d1;
  border-radius: 8px;
  padding: 6px 15.5px 9px 6px;
  margin-left: 24px;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const ButtonRight = styled.button`
  width: 48px;
  height: 36px;
  border: 1.4px solid #709085;
  border-radius: 0px 8px 8px 0px;
  background-color: transparent;
  &:disabled {
    border: 1.4px solid #cad6d1;
  }
  &::before {
    content: url("/images/chevron-right.svg");
    position: relative;
    top: 3px;
  }
  &:disabled::before {
    content: url("/images/chevron-right-disabled.svg");
    position: relative;
    top: 3px;
  }
`;

export const ButtonLeft = styled.button`
  width: 48px;
  height: 36px;
  border: 1.4px solid #709085;
  border-radius: 8px 0px 0px 8px;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  &:disabled {
    border: 1.4px solid #cad6d1;
  }
  &::before {
    content: url("/images/chevron-left.svg");
    position: relative;
    top: 3px;
  }
  &:disabled::before {
    content: url("/images/chevron-left-disabled.svg");
    position: relative;
    top: 3px;
  }
`;

export const ChevronLeft = styled.span`
  position: relative;
  display: block;
  height: 50px; /*Height should be double border thickness*/
  &::before,
  &::after {
    position: absolute;
    display: block;
    content: "";
    border: 25px solid transparent; /*Adjust chevron size*/
  }
  &::before {
    top: 0;
    border-top-color: #b00; /*Chevron Color*/
  }
  &::after {
    top: -2px; /*Adjust thickness*/
    border-top-color: #fff; /*Match chevron background colour*/
  }
`;

export const ChevronRight = styled.span``;
