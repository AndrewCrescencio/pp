import axios from "axios";
import React, { useState, useEffect, ReactNode, useRef } from "react";
import { paginate } from "../../utils/paginate";

import refreshIcon from "../../public/images/refresh-icon.svg";

import Image from "next/image";

import CollaboratorsListTable from "./CollaboratorsListTable";
import CollaboratorsListAccordion from "./CollaboratorsListAccordion";
import Pagination from "../Pagination";

import * as S from "./styles";

import { Text, useDisclosure } from "@chakra-ui/react";

export type Tstatus = "active" | "inactive";

export type Tagents = {
  agent_id: number;
  name: string;
  image: string;
  department: string;
  branch: string;
  role: string;
  status: Tstatus;
};

type CollaboratorsListProps = {
  agents: Tagents[];
};
const CollaboratorsList = ({ agents }: CollaboratorsListProps) => {
  const [pageSize, setPageSize] = useState<number>(6);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const [windowWidth, setWindowWidth] = useState<number>(0);
  const handleWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    handleWindowWidth();
    window.addEventListener("resize", handleWindowWidth);
  }, []);

  const handlePageChange = (page: number, next: boolean) => {
    next ? setCurrentPage(page + 1) : setCurrentPage(page - 1);
  };

  const handlePageSizeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setPageSize(parseInt(event.target.value));
  };

  const paginateagents: Tagents[] = paginate(agents, currentPage, pageSize);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <S.Container>
        <Text
          mt={10}
          mb={["24px", null, "40px"]}
          color="#34423D"
          fontWeight={600}
          fontSize="16px"
          pt={["40px", null, "0"]}
          borderTop={["2px solid #EAEFED", null, "0"]}
        >
          Listagem de colaboradores
        </Text>
        <>
          {windowWidth >= 1280 ? (
            <>
              <CollaboratorsListTable agents={paginateagents} />
              <Pagination
                items={agents.length}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={handlePageChange}
                onPageSizeChange={handlePageSizeChange}
              />
            </>
          ) : (
            <>
              <CollaboratorsListAccordion agents={paginateagents} />
              {/* <Drawer
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
                  <DrawerHeader>
                    <Text fontWeight={600} fontSize="18px" color="#34423D">
                      Categorias
                    </Text>
                  </DrawerHeader>

                  <DrawerBody>
                    <Text
                      fontWeight={500}
                      fontSize="16px"
                      color="#34423D"
                      mb="34px"
                      cursor="pointer"
                    >
                      Colaboradores
                    </Text>
                    <Text
                      fontWeight={500}
                      fontSize="16px"
                      color="#34423D"
                      mb="65px"
                      cursor="pointer"
                    >
                      Cargos
                    </Text>
                  </DrawerBody>
                </DrawerContent>
              </Drawer> */}
              <S.LoadMoreButton
                onClick={() => {
                  setPageSize(pageSize + 10);
                  console.log(pageSize, agents.length);
                }}
                disabled={pageSize >= agents.length ? true : false}
              >
                <Image
                  src={refreshIcon}
                  alt="load more icon"
                  width={24}
                  height={24}
                />
                <Text fontSize="16px" color="inherit" fontWeight={600}>
                  Carregar mais
                </Text>
              </S.LoadMoreButton>
            </>
          )}
        </>
      </S.Container>
    </>
  );
};

export default CollaboratorsList;
