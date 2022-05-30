import { Box, Toolbar, ListItem } from "@mui/material";

const Footer = () => {
  return (
    <Box
      id={"footer"}
      sx={{ flexGrow: 1, display: { xs: "flex" }, justifyContent: "flex-end" }}
    >
      <Toolbar>
        <ListItem
          button
          key="Email"
          component="a"
          href="mailto:info@lucstoptdarmkanker.be"
        >
          info@lucstoptdarmkanker.be
        </ListItem>
      </Toolbar>
    </Box>
  );
};

export default Footer;
