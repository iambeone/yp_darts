import * as React from "react";
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

export default function GamersTable({
  data,
}: {
  data: { name: string; email: string; id: number }[];
}) {
  const PATH = "/players";
  const ROWS_PER_PAGE = 10;
  const { pageNumber = 1 } = useParams();

  const table = {
    width: "auto",
    margin: { lg: "0 40px", sm: "0 24px", xs: "0 16px" },
    boxShadow: "none",
  };

  const changeCell = {
    width: "80px",
    padding: "16px 20px",
    display: { xs: "none", lg: "table-cell" },
  };

  const addCell = {
    width: "180px",
    padding: "16px 20px",
    display: { xs: "none", lg: "table-cell" },
  };

  const iconCell = {
    width: "5px",
    padding: "16px 20px",
  };

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
    <GamersTableContainer>
      <TableContainer component={Paper} sx={table}>
        <Table aria-label="gamers table">
          <TableHead>
            <TableRow>
              <TableCell>
                <ColumnTitle>Имя</ColumnTitle>
              </TableCell>
              <TableCell sx={addCell} />
              <TableCell sx={changeCell} />
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
                  <Name>{item.name}</Name> <br />
                  <Email>{item.email}</Email>
                </TableCell>
                <TableCell align="right" sx={addCell} onClick={openModal}>
                  <StyledLink>ДОБАВИТЬ В ТУРНИР</StyledLink>
                </TableCell>
                <TableCell
                  align="right"
                  sx={changeCell}
                  onClick={linkToChangePage}
                >
                  <StyledLink>ИЗМЕНИТЬ</StyledLink>
                </TableCell>
                <TableCell
                  align="right"
                  sx={iconCell}
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
    </GamersTableContainer>
  );
}

// https://github.com/ankitasingh170190/Pagination_Demo
