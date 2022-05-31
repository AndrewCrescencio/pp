import type { ReactElement } from "react";
import Aside from "../Aside";
import Navbar from "../Navbar";
import * as S from "./styles";
import Head from "next/head";

type LayoutProps = {
  children?: ReactElement;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>Pedido Pago Desafio</title>
        <meta property="og:title" content="My page title" key="title" />
        <meta name="author" content="Author: Andrew Crescencio" />
        <meta property="description" content="Desafio frontend Pedido Pago" />

        <meta
          property="keywords"
          content="pedido, pago, desafio, frontend, front-end"
        />
        <meta property="og:site_name" content="PedidoPago" />
      </Head>
      <Navbar />
      <S.Body>
        <Aside />
        <S.Main>{children}</S.Main>
      </S.Body>
    </>
  );
};

export default Layout;
