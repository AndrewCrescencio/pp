import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  overflow-x: auto;
`;

export const LoadMoreButton = styled.button`
  border: 2px solid #b5f1dd;
  border-radius: 8px;
  width: 100%;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 14px;
  gap: 8px;
  color: 34423D;
  &:disabled {
    cursor: not-allowed;
    border: 2px solid #cad6d1;
    opacity: 0.5;
  }
`;
