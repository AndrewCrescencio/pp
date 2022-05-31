import axios from "axios";
import React, { useState, useEffect, ReactNode } from "react";
import { paginate } from "../../utils/paginate";

import refreshIcon from "../../public/images/refresh-icon.svg";

import Image from "next/image";

import PositionsListTable from "./PositionsListTable";
import PostListAccordion from "./PositionsListAccordion";
import Pagination from "../Pagination";

import * as S from "./styles";

import { Text } from "@chakra-ui/react";

export type Troles = {
  name: number;
  departament: string;
  agents_quantity: number;
};

const CollaboratorsList = () => {
  const [agents, setagents] = useState<Troles[]>([]);
  const [pageSize, setPageSize] = useState<number>(6);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const [windowWidth, setWindowWidth] = useState<number>(0);
  const handleWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    const getagents = async () => {
      const { data: res } = await axios.get(
        "https://pp-api-desafio.herokuapp.com/roles"
      );
      console.log(res.roles);
      setagents(res.roles);
    };
    getagents();
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

  const paginateRoles: Troles[] = paginate(agents, currentPage, pageSize);

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
          Listagem de cargos
        </Text>
        <>
          {windowWidth >= 1280 ? (
            <>
              <PositionsListTable roles={paginateRoles} />
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
              <PostListAccordion roles={paginateRoles} />
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
