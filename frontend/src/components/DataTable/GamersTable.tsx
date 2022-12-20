import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styles from "./DataTable.module.css";
import verticalDots from "../../images/vertical-dots.svg";

export default function GamersTable({
  rows,
}: {
  rows: { name: string; email: string }[];
}) {
  return (
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
          {rows.map((row) => (
            <TableRow key={row.name}>
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
  );
}
