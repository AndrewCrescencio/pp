import React, { useState, useEffect, ReactNode } from "react";

import moreVertical from "../../../public/images/more-vertical.svg";

import eyeIcon from "../../../public/images/eye-icon.svg";
import duplicateIcon from "../../../public/images/duplicate-icon.svg";
import deleteIcon from "../../../public/images/delete-icon.svg";
import editIcon from "../../../public/images/edit-icon.svg";

import Image from "next/image";
import Link from "next/link";

import * as S from "./styles";

import { Box, Text } from "@chakra-ui/react";

import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";

import type { Troles } from "..";

type PositionsListTableProps = {
  roles: Troles[];
};

const PositionsListTable = ({ roles }: PositionsListTableProps) => {
  return (
    <S.Table>
      <S.Thead>
        <S.Tr>
          <S.Th>Nome Completo</S.Th>
          <S.Th>Departamento</S.Th>
          <S.Th>Colaboradores</S.Th>
        </S.Tr>
      </S.Thead>
      <S.Tbody>
        {roles.map((role, idx) => (
          <S.Tr key={idx}>
            <S.Td>{role.name}</S.Td>
            <S.Td>{role.departament}</S.Td>
            <S.Td>
              <Box>
                {role.agents_quantity}
                <Menu placement="bottom-end">
                  <MenuButton as={Button} p={0} background="transparent">
                    <Image
                      src={moreVertical}
                      alt="more info"
                      width={24}
                      height={24}
                    />
                  </MenuButton>
                  <MenuList>
                    <MenuItem
                      _hover={{ backgroundColor: "#fff" }}
                      _focus={{ backgroundColor: "#fff" }}
                    >
                      <Image src={eyeIcon} alt="see icon" />
                      <Link href="/positions-details">
                        <Text
                          ml={4}
                          fontWeight={500}
                          fontSize="16px"
                          color="#587169"
                        >
                          Ver cargo
                        </Text>
                      </Link>
                    </MenuItem>
                    <br />
                    <MenuItem
                      isDisabled
                      _focus={{ backgroundColor: "#fff" }}
                      _hover={{ backgroundColor: "#fff" }}
                    >
                      <Image src={editIcon} alt="delete icon" />
                      <Text
                        ml={4}
                        fontWeight={500}
                        fontSize="16px"
                        color="#acb8b4"
                      >
                        Editar
                      </Text>
                    </MenuItem>
                    <br />
                    <MenuItem
                      isDisabled
                      _focus={{ backgroundColor: "#fff" }}
                      _hover={{ backgroundColor: "#fff" }}
                    >
                      <Image src={duplicateIcon} alt="delete icon" />
                      <Text
                        ml={4}
                        fontWeight={500}
                        fontSize="16px"
                        color="#acb8b4"
                      >
                        Duplicar
                      </Text>
                    </MenuItem>
                    <br />
                    <MenuItem
                      isDisabled
                      _focus={{ backgroundColor: "#fff" }}
                      _hover={{ backgroundColor: "#fff" }}
                    >
                      <Image src={deleteIcon} alt="delete icon" />
                      <Text
                        ml={4}
                        fontWeight={500}
                        fontSize="16px"
                        color="#acb8b4"
                      >
                        Excluir
                      </Text>
                    </MenuItem>
                  </MenuList>
                </Menu>
              </Box>
            </S.Td>
          </S.Tr>
        ))}
      </S.Tbody>
    </S.Table>
  );
};

export default PositionsListTable;
