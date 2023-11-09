/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

const Messages = () => {
  const messages = [
    {
      location: "zaria",
      message:
        "Hello world this is a test message blah blah something about a new disease in town",
      fileUrl: "http://fdfsfs.pdf",
    },
  ];
  return (
    <div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>S/N</TableCell>
            <TableCell align="left">Location</TableCell>
            <TableCell align="left">File</TableCell>
            <TableCell align="left">Message</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {messages.map((row: any, i: number) => (
            <TableRow
              key={i}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell scope="row">{i + 1}</TableCell>
              <TableCell align="left">{row.location}</TableCell>
              <TableCell align="left">
                <a style={{ color: "blue" }} href={row.fileUrl}>
                  file
                </a>
              </TableCell>
              <TableCell align="left">{row.message}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Messages;
