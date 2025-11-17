import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
    const navigate = useNavigate();

    return (
        <AppBar position="sticky" color="primary" elevation={4}>
            <Toolbar sx={{ justifyContent: "space-between" }}>
                
                {/* Logo / Name */}
                <Typography 
                    variant="h6" 
                    sx={{ cursor: "pointer" }}
                    onClick={() => navigate("/")}
                >
                    Jack Dong Portfolio
                </Typography>

                <Box sx={{ display: "flex", gap: 2 }}>
                    
                    {/* Navigate to router page (NOT new tab) */}
                    <Button 
                        color="inherit"
                        onClick={() => navigate("/about")}
                        sx={{
                            "&:hover": { opacity: 0.8 }
                        }}
                    >
                        About Us
                    </Button>

                    {/* Scroll to sections */}
                    <Button 
                        color="inherit" 
                        href="#skills"
                        sx={{ "&:hover": { opacity: 0.8 } }}
                    >
                        Skills
                    </Button>

                    <Button 
                        color="inherit" 
                        href="#projects"
                        sx={{ "&:hover": { opacity: 0.8 } }}
                    >
                        Projects
                    </Button>

                    <Button 
                        color="inherit" 
                        href="#contact"
                        sx={{ "&:hover": { opacity: 0.8 } }}
                    >
                        Contact & Resume
                    </Button>
                </Box>

            </Toolbar>
        </AppBar>
    );
}
