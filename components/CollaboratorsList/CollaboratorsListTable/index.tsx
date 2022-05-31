import {
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
  Button,
} from "@chakra-ui/react";
import Image from "next/image";
import moreVertical from "../../../public/images/more-vertical.svg";
import trashIcon from "../../../public/images/trash-icon.png";
import eyeIcon from "../../../public/images/eye-icon.svg";
import type { Tagents } from "..";
import StatusButton from "../../StatusButton";

import * as S from "./styles";
import Link from "next/link";

type CollaboratorsListTableProps = {
  agents: Tagents[];
};
export const CollaboratorsListTable = ({
  agents,
}: CollaboratorsListTableProps) => {
  return (
    <>
      <S.Table>
        <S.Thead>
          <S.Tr>
            <S.Th>Nome Completo</S.Th>
            <S.Th>Departamento</S.Th>
            <S.Th>Cargo</S.Th>
            <S.Th>Unidade</S.Th>
            <S.Th>Status</S.Th>
          </S.Tr>
        </S.Thead>
        <S.Tbody>
          {agents.map((agent, idx) => (
            <S.Tr key={idx}>
              <S.Td>
                <div>
                  <Image
                    src={agent.image}
                    alt="avatar"
                    width={32}
                    height={32}
                  />
                  {agent.name}
                </div>
              </S.Td>
              <S.Td> {agent.department} </S.Td>
              <S.Td> {agent.role} </S.Td>
              <S.Td> {agent.branch} </S.Td>
              <S.Td>
                <Box>
                  <StatusButton active={agent.status} />
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
                        <Link href="/collaborator-details">
                          <Text
                            ml={4}
                            fontWeight={500}
                            fontSize="16px"
                            color="#587169"
                          >
                            Ver colaborador
                          </Text>
                        </Link>
                      </MenuItem>
                      <br />
                      <MenuItem
                        isDisabled
                        _focus={{ backgroundColor: "#fff" }}
                        _hover={{ backgroundColor: "#fff" }}
                      >
                        <Image src={trashIcon} alt="delete icon" />
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
    </>
  );
};

export default CollaboratorsListTable;
