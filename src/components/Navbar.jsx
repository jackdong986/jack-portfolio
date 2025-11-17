import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

export default function Navbar() {
    return (
        <AppBar position="sticky" color="primary" elevation={4}>
            <Toolbar sx={{ justifyContent: "space-between" }}>
                <Typography variant="h6">Jack Dong Portfolio</Typography>

                <Box>

                    {/* Opens About Page in NEW TAB */}
                    <Button 
                        color="inherit" 
                        href="/about" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        About Us
                    </Button>

                    {/* Scroll sections in same page */}
                    <Button color="inherit" href="#projects">Projects</Button>
                    <Button color="inherit" href="#contact">Contact & Resume</Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
}
