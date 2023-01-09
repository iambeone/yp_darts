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
import { useDispatch, useSelector } from "../../utils/hooks";
import {
  setContextMenuClose,
  setContextMenuOpen,
} from "../../services/actions";
import {
  contextMenuPlayersTableDelete,
  contextMenuPlayersTableFull,
} from "../../utils/constants";
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
  const dispatch = useDispatch();
  const { contextMenuOpen } = useSelector((store) => store.common);
  const [anchor, setAnchor] = React.useState<HTMLButtonElement | null>(null);
  const [windowWidth, setWindowWidth] = React.useState(0);

  React.useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [windowWidth]);

  const openModal = () => {
    console.log(1);
    return null;
  };

  const openContextMenu = (
    evt: React.MouseEvent<HTMLButtonElement>,
    itemId: number,
  ) => {
    const contextMenuProps = {
      id: itemId,
      items: [{ icon: "", value: "" }],
    };
    if (windowWidth < 1200) {
      contextMenuProps.items = contextMenuPlayersTableFull;
    } else {
      contextMenuProps.items = contextMenuPlayersTableDelete;
    }
    setAnchor(anchor ? null : evt.currentTarget);
    dispatch(setContextMenuOpen(contextMenuProps));
  };

  // не работает, разобраться
  const closeContextMenu = () => {
    console.log("close");
    setAnchor(null);
    dispatch(setContextMenuClose());
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
                  <LinkStyled to={`/player/:${item.id}`}>
                    <NameSpan>{item.name}</NameSpan> <br />
                    <EmailSpan>{item.email}</EmailSpan>
                  </LinkStyled>
                </TableCell>
                <TableCell align="right" sx={AddCell} onClick={openModal}>
                  <BtnSpan>ДОБАВИТЬ В ТУРНИР</BtnSpan>
                </TableCell>
                <TableCell align="right" sx={ChangeCell}>
                  <LinkSpan to={`/players/edit-player/:${item.id}`}>
                    ИЗМЕНИТЬ
                  </LinkSpan>
                </TableCell>
                <TableCell align="right" sx={IconCell}>
                  <ButtonIcon
                    onClick={(e) => openContextMenu(e, item.id)}
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
      {contextMenuOpen && (
        <ContextMenu anchorEl={anchor} close={() => closeContextMenu()} />
      )}
    </TableWithPagination>
  );
}

// https://github.com/ankitasingh170190/Pagination_Demo
