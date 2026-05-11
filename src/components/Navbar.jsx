import { AppBar, Box, Button, Container, Toolbar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const navLinks = [
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const navButtonSx = {
  px: { xs: 1, sm: 1.4 },
  minWidth: "auto",
  color: "text.secondary",
  fontSize: { xs: "0.78rem", md: "0.88rem" },
  "&:hover": {
    color: "text.primary",
    background: "rgba(148, 163, 184, 0.08)",
  },
};

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        background: "rgba(8, 17, 31, 0.78)",
        backdropFilter: "blur(18px)",
        borderBottom: "1px solid rgba(148, 163, 184, 0.16)",
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{
            minHeight: { xs: 68, md: 76 },
            justifyContent: "space-between",
            gap: 2,
          }}
        >
          <Typography
            variant="h6"
            sx={{
              cursor: "pointer",
              fontSize: { xs: "1rem", md: "1.1rem" },
              fontWeight: 800,
              letterSpacing: 0,
              whiteSpace: "nowrap",
            }}
            onClick={() => navigate("/")}
          >
            Jack Dong
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              gap: { xs: 0.25, sm: 1 },
              overflowX: "auto",
            }}
          >
            <Button color="inherit" onClick={() => navigate("/about")} sx={navButtonSx}>
              About
            </Button>

            {navLinks.map((link) => (
              <Button key={link.href} color="inherit" href={link.href} sx={navButtonSx}>
                {link.label}
              </Button>
            ))}

            <Button
              variant="contained"
              href="#contact"
              sx={{
                ml: { xs: 0.25, md: 1 },
                px: { xs: 1.5, md: 2.5 },
                py: 0.8,
                fontSize: { xs: "0.78rem", md: "0.88rem" },
                boxShadow: "0 12px 28px rgba(91, 140, 255, 0.28)",
              }}
            >
              Hire Me
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
