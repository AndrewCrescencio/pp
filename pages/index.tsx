import { Heading } from "@chakra-ui/react";
import { ReactElement, useState } from "react";
import Layout from "../components/Layout";
import Tabs from "../components/Tabs";

import * as S from "../styles/styles";

const Home = () => {
  const [initialTab, setInitialTab] = useState<boolean>(true);
  return (
    <S.Container>
      <Heading fontSize={32} color="#34423d" mb={6} ml={["10px", null, "0"]}>
        Pedido Pago
      </Heading>
      <Tabs />
    </S.Container>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
