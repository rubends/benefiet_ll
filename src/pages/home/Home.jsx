import { Box, Card, CardContent, Typography } from "@mui/material";
import Info from "../../components/info/Info";

const Home = () => {
  return (
    <Box sx={{}}>
      <Box id={"background-image"} sx={{}}></Box>
      <Box className="home-content" sx={{}}>
        <Card variant="outlined" id={"home-card"} sx={{ marginTop: "5%" }}>
          <CardContent>
            <Typography variant="h4" component="div">
              Luc Stopt Darmkanker
            </Typography>
            <hr />
            <Typography component="div">
              "Kennis delen kan levens redden."
            </Typography>
            <Box
              component="img"
              sx={{
                width: "50%",
                marginTop: "8px",
              }}
              alt="Luc Lemmens"
              src="./LucLemmens.JPG"
            />
          </CardContent>
        </Card>
      </Box>
      <Box className="home-content" sx={{}}>
        <Info></Info>
      </Box>
    </Box>
  );
};

export default Home;
