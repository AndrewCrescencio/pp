import styled from "@emotion/styled";
export const AccordionHeader = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 25.5px;
  p:first-of-type {
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 140%;
    color: #587169;
  }
  p:nth-child(2) {
    font-weight: 400;
    font-size: 12px;
    line-height: 140%;
    color: #587169;
  }
`;

export const AccordionHeaderItem = styled.div`
  &:first-of-type {
    width: 97px;
  }
`;
//border: 2px solid #B5F1DD;
export const AccordionContent = styled.div`
  display: grid;
  grid-template-columns: 117px 152px;
  column-gap: 24px;
  row-gap: 29px;
  @media (min-width: 580px) {
    grid-template-columns: repeat(auto-fit, minmax(117px, 1fr));
  }
`;

export const AccordionContentItem = styled.div`
  p:first-of-type {
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 140%;
    color: #587169;
    margin-bottom: 2px;
    font-size: 12px;
  }
  p:nth-child(2) {
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
    color: #587169;
    font-size: 12px;
  }
  &:nth-child(3) {
    p:nth-child(2) {
      font-size: 14px;
    }
  }
`;

export const AccordionActionsButton = styled.button`
  border: 2px solid #b5f1dd;
  border-radius: 8px;
  background-color: transparent;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  text-align: center;
  color: #34423d;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 32px;
  width: 100%;
  height: 52px;
`;
