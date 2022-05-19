import { AppBar, Box, Toolbar, Typography, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";

const MainNav = () => {
  return (
    <AppBar position="fixed" id={"main-nav"}>
      <Toolbar>
        <Typography variant="h6">Luc Stopt Darmkanker</Typography>

        <Box sx={{ flexGrow: 1, display: { xs: "flex" } }}>
          <Link to="/" style={{ textDecoration: "none", marginLeft: "auto" }}>
            <MenuItem>
              <Typography>Informatie</Typography>
            </MenuItem>
          </Link>

          <Link to="/wijn" style={{ textDecoration: "none" }}>
            <MenuItem>
              <Typography>Wijn verkoop</Typography>
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
