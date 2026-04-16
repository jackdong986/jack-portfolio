import { Box, Typography, Card, CardContent, Button, Stack } from "@mui/material";
import QRCode from "react-qr-code";
import resume from "../assets/CV Resume.pdf"

export default function Contact() {
    const resumeUrl = resume; // Put resume.pdf inside /public
    const github = "https://github.com/jackdong986";

    return (
        <Box id="contact" sx={{ p: 4, maxWidth: 500, mx: "auto" }}>
            <Typography variant="h4" mb={3} textAlign="center">
                Contact & Resume
            </Typography>

            <Card sx={{ p: 3, borderRadius: 3, boxShadow: 4 }}>
                <CardContent>

                    <Typography variant="h6" textAlign="center" mb={2}>
                        Download My Resume
                    </Typography>

                    <Typography variant="body2" textAlign="center" mb={3}>
                        Scan the QR code to view my GitHub
                    </Typography>

                    <Stack direction="row" justifyContent="center" mb={3}>
                        <QRCode
                            value={`GitHub: ${github}`}
                            size={140}
                        />
                    </Stack>

                    <Button
                        variant="contained"
                        fullWidth
                        size="large"
                        href={resumeUrl}
                        download
                    >
                        Download Resume (PDF)
                    </Button>

                </CardContent>
            </Card>
        </Box>
    );
}
