import styled from "@emotion/styled";

export const Navbar = styled.nav`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 9;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eaefed;
  background-color: #fff;
  height: 62px;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;
