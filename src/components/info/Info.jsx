import { Card, CardContent, Divider, Stack, Typography } from "@mui/material";

const Info = () => {
  return (
    <Card variant="outlined" id={"info-card"} sx={{ border: "none" }}>
      <CardContent>
        <Stack sx={{ textAlign: "center" }}>
          <Typography variant="h4" component="div">
            2 augustus 2022
          </Typography>
          <Divider sx={{ marginTop: "20px", marginBottom: "20px" }} />
          <Typography
            component="div"
            sx={{
              marginBottom: "30px",
              paddingLeft: "10%",
              paddingRight: "10%",
            }}
          >
            De dag dat Luc 60 jaar zou worden. De dag waarop jullie allen zouden
            worden uitgenodigd voor een groot feest om dit te vieren. Luc zag
            het groot! Het moest een feest worden in een kasteel met alles erop
            en eraan. Luc had nog zoveel dromen… Nu is het aan ons om deze voor
            hem te verwezenlijken. <br />
            <br />
            Wij zijn Anita, Evert, Veerle en Famke. De echtgenote en kinderen
            van Luc. Wij willen deze dag niet zomaar voorbij laten gaan! Daarom
            geven wij op dinsdag 2 augustus 2022 een benefiet ten voordele van
            VZW Stop Darmkanker. Zij focussen zich op bewustmaking en
            vroegtijdige opsporing van poliepen om zo het sterftecijfer van
            darmkanker drastisch te doen dalen. Wij kunnen niet anders dan hier
            volledig mee achter staan! <br />
            <br />
            Het event zal doorgaan in het kasteel van Brasschaat, de plek waar
            Luc op deze dag zo graag had willen zijn. Wij weten alvast zeker dat
            hij in gedachten aanwezig zal zijn!
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default Info;
