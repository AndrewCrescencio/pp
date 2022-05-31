import React, { useRef } from "react";

import fileIcon from "../../../public/images/file-plus.svg";
import eyeIcon from "../../../public/images/eye-icon.svg";
import trashIcon from "../../../public/images/trash-icon.png";

import Image from "next/image";

import StatusButton from "../../StatusButton";

import * as S from "./styles";

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Input,
  Button,
} from "@chakra-ui/react";

import type { Tagents } from "..";
import Link from "next/link";
type CollaboratorsListAccordionProps = {
  agents: Tagents[];
};

const CollaboratorsListAccordion = ({
  agents,
}: CollaboratorsListAccordionProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <Accordion defaultIndex={[0]}>
        {agents.map((agent, idx) => (
          <AccordionItem marginBottom={2} key={idx} border={0}>
            {({ isExpanded }) => (
              <>
                {isExpanded ? (
                  <Box
                    css={{
                      border: "2px solid #B5F1DD",
                      borderRadius: "8px",
                    }}
                  >
                    <AccordionButton
                      p="24px 16px 16px"
                      _focus={{ border: "none" }}
                    >
                      <Box flex="1" textAlign="left" alignItems="center">
                        <S.AccordionHeader>
                          <Text>Nome Completo</Text>
                          <Image
                            className="header-avatar"
                            src={agent.image}
                            alt="avatar"
                            width={32}
                            height={32}
                          />
                          <Text>{agent.name}</Text>
                        </S.AccordionHeader>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>

                    <AccordionPanel p="16px">
                      <S.AccordionContent>
                        <S.AccordionContentItem>
                          <Text>Departamento</Text>
                          <Text>{agent.department}</Text>
                        </S.AccordionContentItem>
                        <S.AccordionContentItem>
                          <Text>Cargo</Text>
                          <Text>{agent.role}</Text>
                        </S.AccordionContentItem>

                        <S.AccordionContentItem>
                          <Text>Unidade</Text>
                          <Text>123456789</Text>
                        </S.AccordionContentItem>

                        <S.AccordionContentItem>
                          <Text>Unidade</Text>
                          <Text>{agent.branch}</Text>
                        </S.AccordionContentItem>

                        <S.AccordionContentItem>
                          <Text>Status</Text>
                          <StatusButton active={agent.status} />
                        </S.AccordionContentItem>
                      </S.AccordionContent>

                      <S.AccordionActionsButton ref={btnRef} onClick={onOpen}>
                        <Image src={fileIcon} alt="Actions icon" />
                        Ações
                      </S.AccordionActionsButton>
                    </AccordionPanel>
                  </Box>
                ) : (
                  <Box
                    css={{
                      border: "2px solid #EAEFED",
                      borderRadius: "8px",
                    }}
                  >
                    <AccordionButton p="24px 16px 16px">
                      <Box flex="1" textAlign="left" alignItems="center">
                        <S.AccordionHeader>
                          <Text>Nome Completo</Text>
                          <Image
                            className="header-avatar"
                            src={agent.image}
                            alt="avatar"
                            width={32}
                            height={32}
                          />
                          <Text>{agent.name}</Text>
                        </S.AccordionHeader>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>

                    <AccordionPanel p="16px">
                      <S.AccordionContent>
                        <S.AccordionContentItem>
                          <Text>Departamento</Text>
                          <Text>{agent.department}</Text>
                        </S.AccordionContentItem>
                        <S.AccordionContentItem>
                          <Text>Cargo</Text>
                          <Text>{agent.role}</Text>
                        </S.AccordionContentItem>

                        <S.AccordionContentItem>
                          <Text>Unidade</Text>
                          <Text>123456789</Text>
                        </S.AccordionContentItem>

                        <S.AccordionContentItem>
                          <Text>Unidade</Text>
                          <Text>{agent.branch}</Text>
                        </S.AccordionContentItem>

                        <S.AccordionContentItem>
                          <Text>Status</Text>
                          <StatusButton active={agent.status} />
                        </S.AccordionContentItem>
                      </S.AccordionContent>

                      <S.AccordionActionsButton>
                        <Image src={fileIcon} alt="Actions icon" />
                        Ações
                      </S.AccordionActionsButton>
                    </AccordionPanel>
                  </Box>
                )}
              </>
            )}
          </AccordionItem>
        ))}
      </Accordion>
      <Drawer
        isOpen={isOpen}
        placement="bottom"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent
          width="328px"
          margin="0 auto"
          borderRadius="12px 12px 0 0"
          boxShadow="0px 8px 24px rgba(165, 171, 179, 0.4)"
        >
          <DrawerCloseButton />
          <DrawerHeader></DrawerHeader>
          <DrawerBody p="0 8px 8px">
            <Button
              display="flex"
              _focus={{ backgroundColor: "#fff" }}
              _hover={{ backgroundColor: "#fff" }}
              _selected={{ backgroundColor: "#fff" }}
            >
              <Image src={eyeIcon} alt="see icon" />
              <Link href="/collaborator-details">
                <Text ml={4} fontWeight={500} fontSize="16px" color="#587169">
                  Ver colaborador
                </Text>
              </Link>
            </Button>
            <Button display="flex" isDisabled>
              <Image src={trashIcon} alt="delete icon" />
              <Link href="/collaborator-details">
                <Text ml={4} fontWeight={500} fontSize="16px" color="#587169">
                  Ver colaborador
                </Text>
              </Link>
            </Button>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
export default CollaboratorsListAccordion;
