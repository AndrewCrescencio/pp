import styled from "@emotion/styled";

export const Container = styled.div`
  padding-left: 32px;
  padding-right: 32px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid #eaefed;
  @media (max-width: 768px) {
    border-right: 0;
  }
`;
