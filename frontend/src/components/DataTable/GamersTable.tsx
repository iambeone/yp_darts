import * as React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
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
  TableWithPagination,
  ColumnTitle,
  NameSpan,
  EmailSpan,
  StyledIcon,
  ButtonIcon,
  BtnSpan,
  PaginationContainer,
  CountText,
  LinkStyled,
  LinkSpan,
} from "./GamersTableStyles";
import ContextMenu from "../ContextMenu/ContextMenu";
import { Tplayers } from "../../services/types";

const TableStyle = {
  width: "auto",
  boxShadow: "none",
  marginTop: { xs: "16px", sm: "0" },
};

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

export default function GamersTable({ data }: { data: Tplayers[] }) {
  const PATH = "/players";
  const ROWS_PER_PAGE = 10;
  const { pageNumber = 1 } = useParams();
  const navigate = useNavigate();
  const [anchor, setAnchor] = React.useState<HTMLButtonElement | null>(null);

  const openContextMenu = (evt: React.MouseEvent<HTMLButtonElement>) => {
    setAnchor(anchor ? null : evt.currentTarget);
  };

  // не работает закрытие по клику не по меню, разобраться
  const closeContextMenu = () => {
    console.log("close");
    setAnchor(null);
  };

  const addToTournament = (id: number) => {
    console.log(id);
  };

  const deletePlayer = (id: number) => {
    console.log(id);
  };

  const contextMenuPlayersTableFull = [
    {
      icon: "person_add",
      value: "Добавить в турнир",
      callback: (e: React.MouseEvent<HTMLElement>) => {
        const id = Number(e.currentTarget.dataset.id);
        addToTournament(id);
        closeContextMenu();
      },
    },
    {
      icon: "edit",
      value: "Изменить",
      callback: (e: React.MouseEvent<HTMLElement>) =>
        navigate(`/players/edit-player/:${e.currentTarget.dataset.id}`),
    },
    {
      icon: "delete",
      value: "Удалить",
      callback: (e: React.MouseEvent<HTMLElement>) => {
        const id = Number(e.currentTarget.dataset.id);
        deletePlayer(id);
        closeContextMenu();
      },
    },
  ];

  const contextMenuPlayersTableDelete = [
    {
      icon: "delete",
      value: "Удалить",
      callback: (e: React.MouseEvent<HTMLElement>) => {
        const id = Number(e.currentTarget.dataset.id);
        deletePlayer(id);
        closeContextMenu();
      },
    },
  ];

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
                  <LinkStyled to={`/player/:${item.id}`}>
                    <NameSpan>{item.name}</NameSpan> <br />
                    <EmailSpan>{item.email}</EmailSpan>
                  </LinkStyled>
                </TableCell>
                <TableCell
                  align="right"
                  sx={AddCell}
                  onClick={() => addToTournament(item.id)}
                >
                  <BtnSpan>ДОБАВИТЬ В ТУРНИР</BtnSpan>
                </TableCell>
                <TableCell align="right" sx={ChangeCell}>
                  <LinkSpan to={`/players/edit-player/:${item.id}`}>
                    ИЗМЕНИТЬ
                  </LinkSpan>
                </TableCell>
                <TableCell align="right" sx={IconCell}>
                  <ButtonIcon
                    data-id={item.id}
                    onClick={openContextMenu}
                    type="button"
                  >
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
      {window.innerWidth < 1200 ? (
        <ContextMenu
          items={contextMenuPlayersTableFull}
          anchorEl={anchor}
          close={closeContextMenu}
        />
      ) : (
        <ContextMenu
          items={contextMenuPlayersTableDelete}
          anchorEl={anchor}
          close={closeContextMenu}
        />
      )}
    </TableWithPagination>
  );
}

// https://github.com/ankitasingh170190/Pagination_Demo
