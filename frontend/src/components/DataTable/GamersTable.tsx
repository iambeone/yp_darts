import * as React from "react";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import {
  GamersTableContainer,
  ColumnTitle,
  Name,
  Email,
  StyledIcon,
  ButtonIcon,
  StyledLink,
  PaginationContainer,
} from "./GamersTableStyles";
import verticalDots from "../../images/vertical-dots.svg";
import { Tplayers } from "../../services/types";

const TableWithPagination = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-grow: 1;
  margin: 0 40px;
  @media (max-width: 1200px) {
    margin: 0 24px;
  }
  @media (max-width: 768px) {
    margin: 0 16px;
  }
`;

const TableStyle = {
  width: "auto",
  boxShadow: "none",
  marginTop: { xs: "16px", sm: "0" },
};

const CountText = styled.p`
  padding: 0;
  margin: 32px 0 16px 0;
  @media (max-width: 1200px) {
    margin: 24px 0 16px 0;
  }
  @media (max-width: 500px) {
    display: none;
  }
`;

const ColumnTitle = styled.span`
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.17px;
`;

const NameSpan = styled.span`
  font-size: 16px;
  line-height: 26px;
  color: rgba(0, 0, 0, 0.87);
`;

const EmailSpan = styled.span`
  font-size: 12px;
  line-height: 166%;
  letter-spacing: 0.4px;
  color: rgba(0, 0, 0, 0.6);
`;

const LinkSpan = styled.span`
  font-size: 15px;
  line-height: 26px;
  letter-spacing: 0.46px;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.87);
  cursor: pointer;
`;

const ChangeCell = {
  width: "80px",
  padding: "16px 20px",
  display: { xs: "none", lg: "table-cell" },
};

const AddCell = {
  width: "180px",
  padding: "16px 20px",
  display: { xs: "none", lg: "table-cell" },
};

const IconCell = {
  width: "5px",
  padding: "16px 20px",
};

const ButtonIcon = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const PaginationContainer = styled.div`
  margin: 0 auto;
  margin-top: auto;
  padding: 40px 0 32px 0;
`;

export default function GamersTable({ data }: { data: Tplayers[] }) {
  const PATH = "/players";
  const ROWS_PER_PAGE = 10;
  const { pageNumber = 1 } = useParams();

  const openModal = () => {
    console.log(1);
    return null;
  };

  const linkToChangePage = () => {
    console.log(2);
    return null;
  };

  const openContextMenu = () => {
    console.log(3);
    return null;
  };
  return (
    <TableWithPagination>
      <CountText>Показано игроков: {data.length}</CountText>
      <TableContainer component={Paper} sx={TableStyle}>
        <Table aria-label="gamers table">
          <TableHead>
            <TableRow>
              <TableCell>
                <ColumnTitle>Имя</ColumnTitle>
              </TableCell>
              <TableCell sx={AddCell} />
              <TableCell sx={ChangeCell} />
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {(ROWS_PER_PAGE > 0
              ? data.slice(
                  (Number(pageNumber) - 1) * ROWS_PER_PAGE,
                  (Number(pageNumber) - 1) * ROWS_PER_PAGE + ROWS_PER_PAGE,
                )
              : data
            ).map((item) => (
              <TableRow key={item.id}>
                <TableCell>
                  <NameSpan>{item.name}</NameSpan> <br />
                  <EmailSpan>{item.email}</EmailSpan>
                </TableCell>
                <TableCell align="right" sx={AddCell} onClick={openModal}>
                  <LinkSpan>ДОБАВИТЬ В ТУРНИР</LinkSpan>
                </TableCell>
                <TableCell
                  align="right"
                  sx={ChangeCell}
                  onClick={linkToChangePage}
                >
                  <LinkSpan>ИЗМЕНИТЬ</LinkSpan>
                </TableCell>
                <TableCell
                  align="right"
                  sx={IconCell}
                  onClick={openContextMenu}
                >
                  <ButtonIcon type="button">
                    <StyledIcon>more_vert</StyledIcon>
                  </ButtonIcon>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <PaginationContainer>
        <Pagination
          page={Number(pageNumber)}
          count={Math.ceil(data.length / ROWS_PER_PAGE)}
          variant="outlined"
          boundaryCount={2}
          renderItem={(item) => (
            <PaginationItem
              component={Link}
              to={`${PATH}/${item.page}`}
              {...item}
            />
          )}
        />
      </PaginationContainer>
    </TableWithPagination>
  );
}

// https://github.com/ankitasingh170190/Pagination_Demo
