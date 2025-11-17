import { Box, Typography } from "@mui/material";


export default function Footer() {
    return (
        <Box sx={{ p: 2, textAlign: "center", opacity: 0.7 }}>
            <Typography variant="body2">
                © {new Date().getFullYear()} Jack Portfolio — All Rights Reserved
            </Typography>
        </Box>
    );
}