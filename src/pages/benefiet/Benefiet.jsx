import React, { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  TextField,
  Stack,
} from "@mui/material";

const Benefiet = () => {
  const [auth, setAuth] = useState(false);
  const [password, setPassword] = useState("");

  const checkCode = function () {
    if (password === "Dw7cV3") {
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
          <Grid container spacing={2}>
            <Grid item sm={5}>
              <Stack sx={{}}>
                <Typography
                  variant="h4"
                  component="div"
                  sx={{ fontWeight: "500", paddingBottom: "10px" }}
                >
                  Benefiet
                </Typography>
                <Typography component="div" sx={{}}>
                  Als je dit leest, ben jij uitgenodigd om op de benefiet
                  aanwezig te zijn! Deze zal doorgaan op dinsdag 2 augustus 2022
                  vanaf 19u30. Wij zorgen voor een aperitief, hapje, drankje en
                  een dessertenbuffet.
                  <br />
                  Dit alles in een prachtig kader met een streepje live muziek.
                  Het enige wat jij moet doen is dit formulier invullen, zodat
                  wij weten wie we mogen verwachten.
                  <br />
                  <br />
                  Daarnaast vragen we een vrije bijdrage aan VZW Stop
                  Darmkanker. Dit doe je via volgende link: <br />
                  <a href="https://acties.stopdarmkanker.be/team/luc-stopt-darmkanker">
                    https://acties.stopdarmkanker.be/team/luc-stopt-darmkanker
                  </a>
                  .<br />
                  Uw donatie zal volledig worden gebruikt voor onderzoek naar
                  betere preventie en behandelingen. <br />
                  Zo komen we hopelijk samen een stapje dichter bij een
                  zorgeloze wereld zonder deze vreselijke ziekte. Dokter
                  Colemont, de oprichter van deze VZW, zal de dag zelf aanwezig
                  zijn om een verder woordje uitleg te geven.
                  <br />
                  <br />
                  Na overschrijving zal je uw inkomticket in je mailbox
                  ontvangen en ben je officieel ingeschreven voor het event.
                  Hopelijk tot dan!
                </Typography>
              </Stack>
            </Grid>
            <Grid item sm={7}>
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSfgJczKjDY5LOcflc6vu2wv0dMRUsOFsCeeCyFHvB2kPyDkUA/viewform?embedded=true"
                width="640"
                height="965"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
                title="benefiet-frame"
              >
                Laden…
              </iframe>
            </Grid>
          </Grid>
        </CardContent>
      ) : (
        <CardContent
          sx={{
            minWidth: "30%",
          }}
        >
          <Card variant="outlined" id={"code-card"}>
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
