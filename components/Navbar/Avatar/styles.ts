import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 14.5px 32px;
  border-left: 1px solid #eaefed;
  @media (max-width: 768px) {
    border-left: 0;
    position: fixed;
    top: 0;
    left: 0;
  }
`;

export const Text = styled.div`
  margin-left: 10px;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const Name = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 100%;
  color: #34423d;
`;

export const Description = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 120%;
  color: #587169;
`;
