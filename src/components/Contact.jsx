import { Box, Typography, TextField, Button } from "@mui/material";


export default function Contact() {
    return (
        <Box id="contact" sx={{ p: 4, maxWidth: 500, mx: "auto" }}>
            <Typography variant="h4" mb={3} textAlign="center">
                Contact Me
            </Typography>


            <TextField fullWidth label="Your Name" sx={{ mb: 2 }} />
            <TextField fullWidth label="Your Email" sx={{ mb: 2 }} />
            <TextField
                fullWidth
                label="Message"
                multiline
                rows={4}
                sx={{ mb: 2 }}
            />


            <Button variant="contained" fullWidth>
                Send
            </Button>
        </Box>
    );
}