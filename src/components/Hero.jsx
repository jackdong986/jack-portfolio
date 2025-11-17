import { Box, Typography, Button } from "@mui/material";


export default function Hero() {
    return (
        <Box
            sx={{
                height: "80vh",
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                justifyContent: "center",
                textAlign: "center",
                px: 2,
            }}
        >
            <Typography variant="h2" fontWeight={700} gutterBottom>
                Hi, I'm Jack Dong
            </Typography>


            <Typography variant="h5" color="text.secondary" gutterBottom>
                Full-Stack Developer • A Versatile Problem-Solver • Technical Generalist
            </Typography>


            <Button
                variant="contained"
                size="large"
                href="#projects"
                sx={{ mt: 3 }}
            >
                View My Projects
            </Button>
        </Box>
    );
}