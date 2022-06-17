import styled from "@emotion/styled";

export const Container = styled.div`
  max-width: 956px;
  width: 100%;
  height: 100%;
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
  align-items: center;
  margin-bottom: 40px;
`;

export const InfoHeaderDetails = styled.div``;

export const PersonalInfo = styled.div``;

export const PersonalInfoDetails = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  @media (min-width: 768px) {
    gap: 24px;
  }
`;

export const PersonalInfoDetailsItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: #f5faf8;
  border: 2px solid #cad6d1;
  border-radius: 8px;
  padding: 16px;

  flex: none;
  width: 100%;
  @media (min-width: 768px) {
    flex: 1;
  }
`;

export const OrganizationalInfo = styled.div`
  margin-top: 40px;
`;

export const OrganizationalInfoDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 24px;
  border: 2px solid #eaefed;
  border-radius: 8px;
  flex-wrap: wrap;
`;
export const OrganizationalInfoDetailsItem = styled.div`
  border: 2px solid #cad6d1;
  border-radius: 8px;
  padding: 16px 20px;
  max-width: 410px;
  width: 100%;
  @media (max-width: 955px) {
    max-width: none;
  }
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
  &:nth-of-type(2)::before {
    content: "Cargo";
  }
  &:nth-of-type(3)::before {
    content: "Unidade";
  }
  &:nth-of-type(4)::before {
    content: "Status";
  }
`;
