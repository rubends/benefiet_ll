import { AppBar, Box, Toolbar, Typography, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";

const MainNav = () => {
  return (
    <AppBar position="fixed" id={"main-nav"}>
      <Toolbar style={{ width: "80%", marginLeft: "10%", padding: 0 }}>
        <Typography variant="h6">Luc Stopt Darmkanker</Typography>

        <Box sx={{ flexGrow: 1, display: { xs: "flex" } }}>
          <Link to="/" style={{ textDecoration: "none", marginLeft: "auto" }}>
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
      </Toolbar>
    </AppBar>
  );
};

export default MainNav;
