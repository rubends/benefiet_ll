import { Box, Card, CardContent, Typography } from "@mui/material";
import Info from "../../components/info/Info";

const Home = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <Box id={"background-image"} sx={{}}></Box>
      <Box className="home-content" sx={{}}>
        <Card
          variant="outlined"
          id={"home-card"}
          sx={{ marginTop: "5%", padding: "15px" }}
        >
          <CardContent>
            <Typography
              variant="h1"
              component="div"
              sx={{ fontWeight: "500", paddingBottom: "12px" }}
            >
              Luc stopt darmkanker
            </Typography>
            <Typography variant="h4" component="div">
              "Kennis delen kan levens redden."
            </Typography>
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
