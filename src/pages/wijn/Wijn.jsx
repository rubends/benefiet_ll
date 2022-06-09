import { Card, CardContent, Grid, Stack, Typography } from "@mui/material";

const Wijn = () => {
  return (
    <Card
      variant="outlined"
      id={"wijn-card"}
      sx={{
        flexGrow: 1,
        display: { xs: "flex" },
        justifyContent: "center",
        paddingTop: "64px",
      }}
    >
      <CardContent sx={{ marginBottom: "74px !important" }}>
        <Grid container spacing={2}>
          <Grid item xs={5}>
            <Stack sx={{}}>
              <Typography
                variant="h4"
                component="div"
                sx={{ fontWeight: "500", paddingBottom: "10px" }}
              >
                Wijnverkoop
              </Typography>
              <Typography component="div" sx={{}}>
                Al de winst van onze wijnverkoop zal volledig worden gebruikt
                voor onderzoek naar betere preventie en behandelingen voor
                darmkanker. Zo komen we hopelijk samen een stapje dichter bij
                een zorgeloze wereld zonder deze vreselijke ziekte.
                <br />
                <br />
                Rood - Dominio de Fontana Roble 2019
                <br />
                Wit - Dominio de Fontana 'Sauvignon - Verdejo' 2020
                <br />
                <br />
                Prijs: <br />
                12 euro per fles
                <br />
                60 euro per doos
                <br />
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={7}>
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSeHkqh6E9yLa9WD32vUAY3R5OeyXJyRmFk4fkQgCGSGQy600g/viewform?embedded=true"
              width="640"
              height="1445"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              title="wijnverkoop-frame"
            >
              Laden…
            </iframe>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Wijn;
