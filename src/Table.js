import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import * as opportunities from "./opportunities.json";

export default function BasicTable({ onClick }) {
  /**
   * A basic table to display all non-nested information from opportunities.json
   */
  const data = opportunities.default;

  return (
    <TableContainer className="tableContainer" component={Paper}>
      <Table className="table" sx={{ }} aria-label="simple table">
        <TableHead className="thead">
          <TableRow className="tr">
            <TableCell className="td" align="left">Opp Name</TableCell>
            <TableCell className="td" align="left">Opp Stage</TableCell>
            <TableCell className="td" align="right">Rep Probability</TableCell>
            <TableCell className="td" align="right">PX Probability</TableCell>
            <TableCell className="td" align="left">PX Tier</TableCell>
            <TableCell className="td" align="right">Amount</TableCell>
            <TableCell className="td" align="left">Product</TableCell>
            <TableCell className="td" align="left">Sales Rep</TableCell>
          </TableRow>
        </TableHead>
        <TableBody className="tbody">
          {data.map((row) => (
            <TableRow className="tr"
              onClick={(event) => onClick(event, row)}
              key={row.oppId}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell aria-label="Opp Name" className="td" component="th" scope="row">
                {row.oppName}
              </TableCell>
              <TableCell aria-label="Opp Stage" className="td" align="left">{row.stage}</TableCell>
              <TableCell aria-label="Rep Probability" className="td" align="right">{row.repProbability}</TableCell>
              <TableCell aria-label="PX Probability" className="td" align="left">{row.pilytixProbability}</TableCell>
              <TableCell aria-label="PX Tier" className="td" align="left">{row.pilytixTier}</TableCell>
              <TableCell aria-label="Amount" className="td" align="right">{row.amount}</TableCell>
              <TableCell aria-label="Product" className="td" align="left">{row.product}</TableCell>
              <TableCell aria-label="Sales Rep" className="td" align="left">{row.salesRepName}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
