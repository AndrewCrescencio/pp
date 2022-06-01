import fileIcon from "../../../public/images/file-plus.svg";
import eyeIcon from "../../../public/images/eye-icon.svg";
import duplicateIcon from "../../../public/images/duplicate-icon.svg";
import deleteIcon from "../../../public/images/delete-icon.svg";
import editIcon from "../../../public/images/edit-icon.svg";

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
  Button,
} from "@chakra-ui/react";

import Image from "next/image";

import * as S from "./styles";

import type { Trole } from "pages/index";
import { useRef } from "react";
import Link from "next/link";

type PostListAccordionProps = {
  roles: Trole[];
};
const PostListAccordion = ({ roles }: PostListAccordionProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement>(null);
  return (
    <>
      <Accordion defaultIndex={[0]}>
        {roles.map((role, idx) => (
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
                          <S.AccordionHeaderItem>
                            <Text>Cargo</Text>
                            <Text>{role.name}</Text>
                          </S.AccordionHeaderItem>
                          <S.AccordionHeaderItem>
                            <Text>Departamento</Text>
                            <Text>{role.departament}</Text>
                          </S.AccordionHeaderItem>
                        </S.AccordionHeader>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>

                    <AccordionPanel p="16px">
                      <S.AccordionContent>
                        <S.AccordionContentItem>
                          <Text>Colaboradores</Text>
                          <Text>{role.agents_quantity}</Text>
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
                      border: "2px solid #eaefed",
                      borderRadius: "8px",
                    }}
                  >
                    <AccordionButton p="24px 16px 16px">
                      <Box flex="1" textAlign="left" alignItems="center">
                        <S.AccordionHeader>
                          <S.AccordionHeaderItem>
                            <Text>Cargo</Text>
                            <Text>{role.name}</Text>
                          </S.AccordionHeaderItem>
                        </S.AccordionHeader>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
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
              <Link href="/positions-details">
                <Text ml={4} fontWeight={500} fontSize="16px" color="#587169">
                  Ver cargo
                </Text>
              </Link>
            </Button>
            <Button display="flex" isDisabled>
              <Image src={editIcon} alt="edit icon" />
              <Link href="/collaborator-details">
                <Text ml={4} fontWeight={500} fontSize="16px" color="#587169">
                  Editar
                </Text>
              </Link>
            </Button>

            <Button display="flex" isDisabled>
              <Image src={duplicateIcon} alt="duplicate icon" />
              <Link href="/collaborator-details">
                <Text ml={4} fontWeight={500} fontSize="16px" color="#587169">
                  Duplicar
                </Text>
              </Link>
            </Button>

            <Button display="flex" isDisabled>
              <Image src={deleteIcon} alt="delete icon" />
              <Link href="/collaborator-details">
                <Text ml={4} fontWeight={500} fontSize="16px" color="#587169">
                  Excluir
                </Text>
              </Link>
            </Button>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default PostListAccordion;
