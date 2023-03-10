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
import { useDispatch, useSelector } from "../../utils/hooks";
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
import { Tplayers } from "../../services/types";
import { setContextMenuOpen, setCurrentPlayerID } from "../../services/actions";

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
  const dispatch = useDispatch();
  const anchor = useSelector((state) => state.players.contextMenuOpen);
  const PATH = "/players";
  const ROWS_PER_PAGE = 10;
  const { pageNumber = 1 } = useParams();

  const openContextMenu = (evt: React.MouseEvent<HTMLButtonElement>) => {
    const id = Number(evt.currentTarget.dataset.id);
    dispatch(setContextMenuOpen(anchor ? null : evt.currentTarget));
    dispatch(setCurrentPlayerID(id));
  };

  const addToTournament = (id: number) => {
    return id;
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
                  <LinkStyled to={`/player/${item.id}`}>
                    <NameSpan>
                      {item.surname} {item.name}
                    </NameSpan>
                    <br />
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
                  <LinkSpan to={`/players/edit-player/${item.id}`}>
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
    </TableWithPagination>
  );
}
