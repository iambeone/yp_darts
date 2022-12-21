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
import styles from "./GamersTable.module.css";
import verticalDots from "../../images/vertical-dots.svg";

export default function GamersTable({
  data,
}: {
  data: { name: string; email: string; id: number }[];
}) {
  const USER_PATH = "/players";
  const ROWS_PER_PAGE = 10;
  const { pageNumber = 1 } = useParams();

  return (
    <>
      <TableContainer component={Paper} style={{ boxShadow: "none" }}>
        <Table aria-label="gamers table">
          <TableHead>
            <TableRow>
              <TableCell>
                <span className={styles.columnTitle}>Имя</span>
              </TableCell>
              <TableCell className={styles.addCell} />
              <TableCell className={styles.changeCell} />
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
            ).map((row) => (
              <TableRow key={row.id}>
                <TableCell>
                  <span className={styles.name}>{row.name}</span> <br />
                  <span className={styles.email}>{row.email}</span>
                </TableCell>
                <TableCell align="right" className={styles.addCell}>
                  <span className={styles.link}>ДОБАВИТЬ В ТУРНИР</span>
                </TableCell>
                <TableCell align="right" className={styles.changeCell}>
                  <span className={styles.link}>ИЗМЕНИТЬ</span>
                </TableCell>
                <TableCell align="right" className={styles.iconCell}>
                  <button type="button" className={styles.btnIcon}>
                    <img src={verticalDots} alt="Добавить в турнир" />
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination
        page={Number(pageNumber)}
        count={Math.ceil(data.length / ROWS_PER_PAGE)}
        shape="rounded"
        color="primary"
        showFirstButton
        showLastButton
        boundaryCount={2}
        renderItem={(item) => (
          <PaginationItem
            component={Link}
            to={`${USER_PATH}/${item.page}`}
            {...item}
          />
        )}
      />
    </>
  );
}
