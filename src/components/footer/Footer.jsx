import { Box, Toolbar, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      id={"footer"}
      sx={{ flexGrow: 1, display: { xs: "flex" }, justifyContent: "flex-end" }}
    >
      <Toolbar>
        <Typography>Contact: lemmensveerle@hotmail.com</Typography>
      </Toolbar>
    </Box>
  );
};

export default Footer;
