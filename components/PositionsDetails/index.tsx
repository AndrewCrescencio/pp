import axios from "axios";
import React, { useState, useEffect, ReactNode } from "react";
import * as S from "./styles";
import Image from "next/image";
import backIcon from "../../public/images/back-icon.svg";
import checkIcon from "../../public/images/check-icon.svg";
import uncheckIcon from "../../public/images/uncheck-icon.svg";

import { Text } from "@chakra-ui/react";
import Link from "next/link";

const PositionsDetails = () => {
  return (
    <S.Container>
      <S.Header>
        <Link href="/" className="link">
          <Image src={backIcon} alt="back icon" width={36} height={36} />
        </Link>
        <Text
          fontSize={["24px", null, "32px"]}
          fontWeight={600}
          color="#34423D"
        >
          Cargos e permisões
        </Text>
      </S.Header>
      <S.InfoContainer>
        <Text mb="40px" fontWeight={600} fontSize="16px" color="#34423D">
          Dados do cargo
        </Text>

        <S.InfoHeader>
          <S.InfoHeaderItem>
            <Text color="#587169" fontSize="16px" fontWeight={500}>
              Sac
            </Text>
          </S.InfoHeaderItem>
          <S.InfoHeaderItem>
            <Text color="#587169" fontSize="16px" fontWeight={500}>
              Analista
            </Text>
          </S.InfoHeaderItem>
        </S.InfoHeader>
        <Text mb="40px" fontSize="16px" fontWeight={600} color="#34423D">
          Listagem de permissões
        </Text>
        <S.Table>
          <S.Thead>
            <S.Tr>
              <S.Th>Cargo</S.Th>
              <S.Th>Ler</S.Th>
              <S.Th>Editar</S.Th>
              <S.Th>Excluir</S.Th>
            </S.Tr>
          </S.Thead>
          <S.Tbody>
            <S.Tr>
              <S.Td>Pedidos</S.Td>
              <S.Td>
                <Image src={checkIcon} alt="check icon" />
              </S.Td>
              <S.Td>
                <Image src={uncheckIcon} alt="uncheck icon" />
              </S.Td>
              <S.Td>
                <Image src={uncheckIcon} alt="uncheck icon" />
              </S.Td>
            </S.Tr>

            <S.Tr>
              <S.Td>Clientes</S.Td>
              <S.Td>
                <Image src={checkIcon} alt="check icon" />
              </S.Td>
              <S.Td>
                <Image src={uncheckIcon} alt="uncheck icon" />
              </S.Td>
              <S.Td>
                <Image src={checkIcon} alt="check icon" />
              </S.Td>
            </S.Tr>

            <S.Tr>
              <S.Td>Marketing</S.Td>
              <S.Td>
                <Image src={checkIcon} alt="check icon" />
              </S.Td>
              <S.Td>
                <Image src={checkIcon} alt="check icon" />
              </S.Td>
              <S.Td>
                <Image src={checkIcon} alt="check icon" />
              </S.Td>
            </S.Tr>

            <S.Tr>
              <S.Td>Colaboradores</S.Td>
              <S.Td>
                <Image src={checkIcon} alt="check icon" />
              </S.Td>
              <S.Td>
                <Image src={uncheckIcon} alt="uncheck icon" />
              </S.Td>
              <S.Td>
                <Image src={checkIcon} alt="check icon" />
              </S.Td>
            </S.Tr>

            <S.Tr>
              <S.Td>Cargos e permissões</S.Td>
              <S.Td>
                <Image src={checkIcon} alt="check icon" />
              </S.Td>
              <S.Td>
                <Image src={checkIcon} alt="check icon" />
              </S.Td>
              <S.Td>
                <Image src={uncheckIcon} alt="uncheck icon" />
              </S.Td>
            </S.Tr>

            <S.Tr>
              <S.Td>Catálogo</S.Td>
              <S.Td>
                <Image src={checkIcon} alt="check icon" />
              </S.Td>
              <S.Td>
                <Image src={uncheckIcon} alt="uncheck icon" />
              </S.Td>
              <S.Td>
                <Image src={uncheckIcon} alt="uncheck icon" />
              </S.Td>
            </S.Tr>

            <S.Tr>
              <S.Td>Financeiro</S.Td>
              <S.Td>
                <Image src={checkIcon} alt="check icon" />
              </S.Td>
              <S.Td>
                <Image src={checkIcon} alt="check icon" />
              </S.Td>
              <S.Td>
                <Image src={uncheckIcon} alt="uncheck icon" />
              </S.Td>
            </S.Tr>

            <S.Tr>
              <S.Td>Website e Lojas fisicas</S.Td>
              <S.Td>
                <Image src={checkIcon} alt="check icon" />
              </S.Td>
              <S.Td>
                <Image src={uncheckIcon} alt="uncheck icon" />
              </S.Td>
              <S.Td>
                <Image src={checkIcon} alt="check icon" />
              </S.Td>
            </S.Tr>
          </S.Tbody>
        </S.Table>
      </S.InfoContainer>
    </S.Container>
  );
};

export default PositionsDetails;
