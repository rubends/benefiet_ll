import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  MenuItem,
  Grid,
} from "@mui/material";
import { Link } from "react-router-dom";

const MainNav = () => {
  return (
    <AppBar position="fixed" id={"main-nav"}>
      <Toolbar sx={{}}>
        <Grid container spacing={2}>
          <Grid item xs={0} sm={1}></Grid>
          <Grid item xs={12} sm={5}>
            <Typography variant="h6">Luc Stopt Darmkanker</Typography>
          </Grid>
          <Grid item xs={12} sm={5}>
            <Box sx={{ flexGrow: 1, display: { xs: "flex" } }}>
              <Link
                to="/"
                style={{ textDecoration: "none", marginLeft: "auto" }}
              >
                <MenuItem>
                  <Typography>Informatie</Typography>
                </MenuItem>
              </Link>

              <Link to="/wijn" style={{ textDecoration: "none" }}>
                <MenuItem>
                  <Typography>Wijnverkoop</Typography>
                </MenuItem>
              </Link>

              <Link to="/benefiet" style={{ textDecoration: "none" }}>
                <MenuItem>
                  <Typography>Benefiet</Typography>
                </MenuItem>
              </Link>
            </Box>
          </Grid>
          <Grid item xs={0} sm={1}></Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default MainNav;
