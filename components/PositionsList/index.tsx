import React, { useState, useEffect, ReactNode } from "react";
import { paginate } from "utils/paginate";

import refreshIcon from "public/images/refresh-icon.svg";

import Image from "next/image";

import PositionsListTable from "./PositionsListTable";
import PostListAccordion from "./PositionsListAccordion";
import Pagination from "../Pagination";

import * as S from "./styles";

import { Text } from "@chakra-ui/react";
import type { Trole } from "pages/index";

type PositionsListProps = {
  roles: Trole[];
};
const PositionsList = ({ roles }: PositionsListProps) => {
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

  const paginateRoles: Trole[] = paginate(roles, currentPage, pageSize);

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
                items={roles.length}
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
                }}
                disabled={pageSize >= roles.length ? true : false}
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

export default PositionsList;
