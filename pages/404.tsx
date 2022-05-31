import styled from "@emotion/styled";
import Link from "next/link";
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  place-content: center;
  font-family: inherit;
  text-align: center;
`;
const Custom404 = () => {
  return (
    <Container>
      <h1>404 - Page Not Found</h1>
      <Link href="/">Back to home</Link>
    </Container>
  );
};
export default Custom404;
