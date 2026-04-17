import { Box, Typography, Card, CardContent, Button, Stack } from "@mui/material";
import { motion } from "framer-motion";
import QRCode from "react-qr-code";
import resume from "../assets/CV Resume.pdf"

export default function Contact() {
    const resumeUrl = resume;
    const github = "https://github.com/jackdong986";

    return (
        <Box id="contact" sx={{ p: 4, pt: 8, maxWidth: 600, mx: "auto" }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6 }}
            >
                <Typography variant="h3" mb={6} fontWeight={700} textAlign="center"
                    sx={{
                        background: "linear-gradient(90deg, #fff, #a0c4ff)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent"
                    }}
                >
                    Contact & Resume
                </Typography>

                <Card
                    sx={{
                        p: 3,
                        borderRadius: "16px",
                        background: "rgba(255, 255, 255, 0.03)",
                        backdropFilter: "blur(10px)",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                        transition: "all 0.3s ease",
                        "&:hover": {
                            boxShadow: "0 8px 30px rgba(79, 139, 255, 0.15)",
                            borderColor: "rgba(79, 139, 255, 0.3)"
                        }
                    }}
                >
                    <CardContent>

                        <Typography variant="h6" textAlign="center" mb={2} fontWeight={600}>
                            Download My Resume
                        </Typography>

                        <Typography variant="body2" textAlign="center" mb={4} color="text.secondary">
                            Scan the QR code to view my GitHub
                        </Typography>

                        <Stack direction="row" justifyContent="center" mb={4}>
                            <Box sx={{
                                p: 2,
                                background: "#fff",
                                borderRadius: "12px",
                                boxShadow: "0 0 20px rgba(79, 139, 255, 0.2)",
                                transition: "transform 0.3s ease",
                                "&:hover": { transform: "scale(1.05)" }
                            }}>
                                <QRCode
                                    value={`GitHub: ${github}`}
                                    size={140}
                                />
                            </Box>
                        </Stack>

                        <Button
                            variant="contained"
                            fullWidth
                            size="large"
                            href={resumeUrl}
                            download
                            sx={{
                                py: 1.5,
                                borderRadius: "30px",
                                background: "linear-gradient(45deg, #4f8bff 30%, #355cc9 90%)",
                                boxShadow: "0 4px 20px rgba(79, 139, 255, 0.4)",
                                textTransform: "none",
                                fontSize: "1.1rem",
                                transition: "all 0.3s ease",
                                "&:hover": {
                                    transform: "translateY(-2px)",
                                    boxShadow: "0 6px 25px rgba(79, 139, 255, 0.6)",
                                }
                            }}
                        >
                            Download Resume (PDF)
                        </Button>

                    </CardContent>
                </Card>
            </motion.div>
        </Box>
    );
}
