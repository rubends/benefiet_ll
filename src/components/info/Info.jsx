import { Box, Card, CardContent, Grid, Stack, Typography } from "@mui/material";

const Info = () => {
  return (
    <Card variant="outlined" id={"info-card"} sx={{ border: "none" }}>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item sm={5}>
            <Box
              component="img"
              sx={{
                width: "80%",
                left: "10%",
                paddingTop: "10px",
              }}
              alt="Luc Lemmens"
              src="./LucLemmens.JPG"
            />
          </Grid>
          <Grid item sm={7}>
            <Stack sx={{}}>
              <Typography
                variant="h4"
                component="div"
                sx={{ fontWeight: "500", paddingBottom: "10px" }}
              >
                2 augustus 2022
              </Typography>
              <Typography component="div" sx={{}}>
                De dag dat Luc 60 jaar zou worden. De dag waarop jullie allen
                zouden worden uitgenodigd voor een groot feest om dit te vieren.
                Luc zag het groot! Het moest een feest worden in een kasteel met
                alles erop en eraan. Luc had nog zoveel dromen… Nu is het aan
                ons om deze voor hem te verwezenlijken. <br />
                <br />
                Wij zijn Anita, Evert, Veerle en Famke. De echtgenote en
                kinderen van Luc. Wij willen deze dag niet zomaar voorbij laten
                gaan! Daarom geven wij op dinsdag 2 augustus 2022 een benefiet
                ten voordele van VZW Stop Darmkanker. Zij focussen zich op
                bewustmaking en vroegtijdige opsporing van poliepen om zo het
                sterftecijfer van darmkanker drastisch te doen dalen. Wij kunnen
                niet anders dan hier volledig mee achter staan! <br />
                <br />
                Het event zal doorgaan in het kasteel van Brasschaat, de plek
                waar Luc op deze dag zo graag had willen zijn. Wij weten alvast
                zeker dat hij in gedachten aanwezig zal zijn!
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Info;
