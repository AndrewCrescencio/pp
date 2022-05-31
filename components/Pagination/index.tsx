import { Text } from "@chakra-ui/react";
import _ from "lodash";
import React from "react";
import * as S from "./styles";
import Image from "next/image";
import chevronLeft from "../../public/images/chevron-left.svg";

type PaginationProps = {
  items: number;
  pageSize: number;
  currentPage: number;
  onPageChange: (page: number, next: boolean) => void;
  onPageSizeChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

const Pagination = ({
  items,
  pageSize,
  currentPage,
  onPageChange,
  onPageSizeChange,
}: PaginationProps) => {
  const pageCount = items / pageSize;

  // if (Math.ceil(pageCount) === 1) return null;

  const pages = _.range(1, pageCount + 1);

  return (
    <>
      {/* <nav>
        <ul className="pagination">
          {pages.map((page) => (
            <li key={page}>
              <a
                style={{ cursor: "pointer" }}
                onClick={() => onPageChange(page)}
              >
                {page}
              </a>
            </li>
          ))}
        </ul>
      </nav> */}
      <S.Container>
        <S.SelectWrapper>
          <Text fontSize="16px" color="#587169" fontWeight={400}>
            Mostrando {pageSize} de {items}
          </Text>
          <S.Select
            onChange={(e) => onPageSizeChange(e)}
            name="select-page-size"
            id="select-page-size"
          >
            <option value="6">6</option>
            <option value="10">10</option>
            <option value="20">20</option>
          </S.Select>
        </S.SelectWrapper>
        <S.ButtonsWrapper>
          <S.ButtonLeft
            onClick={() => onPageChange(currentPage, false)}
            disabled={currentPage === 1 ? true : false}
          ></S.ButtonLeft>
          <Text fontWeight={600} fontSize="16px" color="#587169" mx="12px">
            {currentPage} de {Math.round(items / pageSize)}
          </Text>

          <S.ButtonRight
            onClick={() => onPageChange(currentPage, true)}
            disabled={
              currentPage === Math.round(items / pageSize) ? true : false
            }
          ></S.ButtonRight>
        </S.ButtonsWrapper>
      </S.Container>
    </>
  );
};

export default Pagination;
