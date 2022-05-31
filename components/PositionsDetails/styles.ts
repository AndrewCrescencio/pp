import styled from "@emotion/styled";

export const Container = styled.div`
  max-width: 956px;
  width: 100%;
  height: 100% !important;
  margin: 0 auto;
  padding: 0 6px 80px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  &:first-child {
    cursor: pointer;
  }
`;

export const InfoContainer = styled.div`
  background: #fff;
  box-shadow: 0px 4px 8px rgba(165, 171, 179, 0.16);
  border-radius: 8px;
  padding: 40px 16px;
  margin-top: 24px;
  @media (min-width: 768px) {
    padding: 40px 24px;
  }
`;

export const InfoHeader = styled.div`
  display: flex;
  gap: 24px;
  margin-bottom: 40px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const InfoHeaderItem = styled.div`
  flex: 1;
  border: 2px solid #cad6d1;
  border-radius: 8px;
  padding: 16px 20px;
  position: relative;
  &::before {
    content: "Departamento";
    position: absolute;
    top: -12px;
    left: 16px;
    background-color: #fff;
    padding: 0 4px;
    font-family: inherit;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    color: #a3b8b0;
  }
  &:nth-child(2)::before {
    content: "Cargo";
  }
`;

export const Table = styled.table`
  font-size: 12px;
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  overflow: hidden;
  font-family: inherit;
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
    border-left: 1px solid #cad6d1;
    border-radius: 8px 0 0 0;
    padding-left: 16px;
    min-width: 110px;
    @media (max-width: 340px) {
      padding-left: 8px;
    }
  }
  &:nth-child(2) {
    width: 123px;
  }
  &:nth-child(3) {
    width: 123px;
  }
  &:nth-child(4) {
    width: 96px;
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
  &:first-of-type {
    padding-left: 16px;
    @media (max-width: 340px) {
      padding-left: 8px;
    }
  }
  &:last-of-type {
  }
`;
