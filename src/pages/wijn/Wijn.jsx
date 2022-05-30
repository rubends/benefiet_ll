import { Card, CardContent, Divider, Typography } from "@mui/material";

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
        <Typography variant="h4" component="div">
          Wijnverkoop
        </Typography>
        <Divider sx={{ marginTop: "10px", marginBottom: "10px" }} />
        <Typography component="div" sx={{ marginBottom: "30px" }}>
          Bedankt om hier eshfsef en super veel info en blabla
        </Typography>

        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSeHkqh6E9yLa9WD32vUAY3R5OeyXJyRmFk4fkQgCGSGQy600g/viewform?embedded=true"
          width="640"
          height="1317"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          scrolling="no"
          title="wijnverkoop-frame"
        >
          Laden…
        </iframe>
      </CardContent>
    </Card>
  );
};

export default Wijn;
