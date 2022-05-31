import styled from "@emotion/styled";
const Container = styled.aside`
  display: none;
  &.active {
    display: block;
  }
  width: 256px;
  height: 100vh;
  background-color: #fff;
  border: 1px solid #eaefed;
  box-shadow: 0px 4px 8px rgba(165, 171, 179, 0.16);
  height: 100%;
  @media (min-width: 1280px) {
    display: block;
  }
`;
const Aside = () => {
  return <Container>Aside</Container>;
};

export default Aside;
