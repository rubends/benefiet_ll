import React, { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Typography,
  TextField,
  Stack,
} from "@mui/material";

const Benefiet = () => {
  const [auth, setAuth] = useState(false);
  const [password, setPassword] = useState("");

  const checkCode = function () {
    if (password === "1234") {
      setAuth(true);
    }
  };

  return (
    <Card
      id={"benefiet-card"}
      sx={{
        flexGrow: 1,
        display: { xs: "flex" },
        justifyContent: "center",
        minHeight: "90vh",
        paddingTop: "64px",
      }}
    >
      {auth ? (
        <CardContent sx={{ paddingBottom: "10px" }}>
          <Typography variant="h4" component="div">
            Benefiet
          </Typography>
          <Divider sx={{ marginTop: "10px", marginBottom: "10px" }} />
          <Typography component="div" sx={{ marginBottom: "30px" }}>
            Bedankt om hier eshfsef en super veel info en blabla
          </Typography>

          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSfgJczKjDY5LOcflc6vu2wv0dMRUsOFsCeeCyFHvB2kPyDkUA/viewform?embedded=true"
            width="640"
            height="965"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
          >
            Laden…
          </iframe>
        </CardContent>
      ) : (
        <CardContent
          sx={{
            width: "30%",
          }}
        >
          <Card
            variant="outlined"
            sx={{
              marginTop: "10%",
            }}
          >
            <CardMedia
              component="img"
              height="160"
              image="./kasteel.jpeg"
              alt="Kasteel van Brasschaat"
            />
            <CardContent
              sx={{
                padding: "30px 50px",
              }}
            >
              <Stack spacing={2}>
                <TextField
                  label="Gebruikerscode"
                  variant="standard"
                  id="codefield"
                  value={password}
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                />
                <Button
                  variant="outlined"
                  sx={{ marginTop: "40px !important", padding: "10px" }}
                  onClick={checkCode}
                >
                  Controleren
                </Button>
              </Stack>
            </CardContent>
          </Card>
        </CardContent>
      )}
    </Card>
  );
};

export default Benefiet;
