import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
    const navigate = useNavigate();

    return (
        <AppBar 
            position="sticky" 
            elevation={0}
            sx={{
                background: "rgba(13, 17, 23, 0.4)",
                backdropFilter: "blur(12px)",
                borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                zIndex: (theme) => theme.zIndex.drawer + 1
            }}
        >
            <Toolbar
                sx={{
                    justifyContent: "space-between",
                    flexWrap: "wrap",             // ⭐ allow wrapping on small screens
                    gap: { xs: 1, md: 0 },        // ⭐ small gap on phones
                }}
            >
                {/* Logo */}
                <Typography
                    variant="h6"
                    sx={{
                        cursor: "pointer",
                        fontSize: { xs: "1.1rem", md: "1.3rem" } // ⭐ smaller on phone
                    }}
                    onClick={() => navigate("/")}
                >
                    Jack Dong Portfolio
                </Typography>

                {/* Buttons */}
                <Box
                    sx={{
                        display: "flex",
                        flexWrap: "wrap",               // ⭐ allow flow on phone
                        gap: { xs: 1, md: 2 },          // ⭐ tighter on mobile
                        justifyContent: { xs: "center", md: "flex-end" },
                        width: { xs: "100%", md: "auto" } // ⭐ center on mobile
                    }}
                >
                    <Button
                        color="inherit"
                        onClick={() => navigate("/about")}
                        sx={{ "&:hover": { opacity: 0.8 }, fontSize: { xs: "0.75rem", md: "0.9rem" } }}
                    >
                        About Us
                    </Button>

                    <Button
                        color="inherit"
                        href="#skills"
                        sx={{ "&:hover": { opacity: 0.8 }, fontSize: { xs: "0.75rem", md: "0.9rem" } }}
                    >
                        Skills
                    </Button>

                    <Button
                        color="inherit"
                        href="#projects"
                        sx={{ "&:hover": { opacity: 0.8 }, fontSize: { xs: "0.75rem", md: "0.9rem" } }}
                    >
                        Projects
                    </Button>

                    <Button
                        color="inherit"
                        href="#contact"
                        sx={{ "&:hover": { opacity: 0.8 }, fontSize: { xs: "0.75rem", md: "0.9rem" } }}
                    >
                        Contact & Resume
                    </Button>
                </Box>

            </Toolbar>
        </AppBar>
    );
}
