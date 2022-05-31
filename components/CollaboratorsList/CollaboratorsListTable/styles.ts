import styled from "@emotion/styled";
export const Table = styled.table`
  font-size: 12px;
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  overflow: hidden;
`;

export const Thead = styled.thead`
  text-align: left;
`;

export const Tr = styled.tr``;

export const Th = styled.th`
  padding: 16px 0;
  border-top: 1px solid #cad6d1;
  border-bottom: 1px solid #cad6d1;

  &:first-of-type {
    width: 244.5px;
    border-left: 1px solid #cad6d1;
    border-radius: 8px 0 0 0;
    padding-left: 16px;
  }
  &:nth-child(2) {
    width: 156.5px;
  }
  &:nth-child(3) {
    width: 128.5px;
  }
  &:nth-child(4) {
    width: 174.5px;
  }
  &:last-of-type {
    border-right: 1px solid #cad6d1;
    border-radius: 0 8px 0 0;
  }
`;

export const Tbody = styled.tbody``;

export const Td = styled.td`
  padding: 18px 0;
  border-bottom: 1px solid #eaefed;

  img {
    border-radius: 100%;
  }
  &:first-of-type {
    div {
      display: flex;
      gap: 8px;
      align-items: center;
      width: 244.5px;
      padding-left: 16px;
      padding-right: 32.5px;
    }
  }
  &:last-of-type {
    div {
      align-items: center;
      display: grid;
      grid-template-columns: auto auto;
      align-items: center;
      justify-content: space-between;
      padding-right: 16px;
    }
  }
`;
