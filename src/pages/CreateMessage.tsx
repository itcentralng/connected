import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";
import {
  CircularProgress,
  FormControl,
  FormLabel,
  MenuItem,
  Select,
  Stack,
} from "@mui/material";

export default function CreateMessage() {
  const navigate = useNavigate();
  const short_code = 4444;

  const [fileUrl, setFileUrl] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [area, setArea] = React.useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleCreateMessage();
  };

  const handleCreateMessage = async () => {
    try {
      const req = await fetch("/url", {
        method: "POST",
        body: JSON.stringify({
          short_code,
          fileUrl,
          message,
          area,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (req.ok) {
        navigate("/messages");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleFileChange = async (e: any) => {
    try {
      const file = e.target.files[0];
      const formData = new FormData();
      formData.append("file", file);
      //upload file here and set file furl
      setFileUrl("http://fsfdffs");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container component="main" maxWidth="md">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <FormControl fullWidth margin="normal">
            <FormLabel>File</FormLabel>
            <Stack direction="row" spacing={1}>
              <TextField
                type="file"
                id="file"
                name="file"
                onChange={(e) => handleFileChange(e)}
                fullWidth
                required
              />
              {false && <CircularProgress />}
            </Stack>
          </FormControl>

          <FormControl fullWidth margin="normal">
            <FormLabel>Message</FormLabel>
            <TextField
              placeholder="message"
              name="message"
              multiline
              minRows={3}
              required
              fullWidth
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </FormControl>

          <FormControl fullWidth margin="normal">
            <FormLabel>Area</FormLabel>

            <Select
              value={area}
              onChange={(e) => setArea(e.target.value)}
              fullWidth
              required
            >
              <MenuItem disabled>select area</MenuItem>
              <MenuItem value={"09036215851"}>Zaria</MenuItem>
            </Select>
          </FormControl>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Send
          </Button>
          <Grid container>
            <Grid item xs>
              {/* <Link href="#" variant="body2">
                Forgot password?
              </Link> */}
            </Grid>
            <Grid item>
              {/* <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link> */}
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
