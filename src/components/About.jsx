import { Box, Typography, List, ListItem, ListItemText, Card, CardContent, Button } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function About() {
    const navigate = useNavigate();
    return (
        <Box
            sx={{
                padding: "40px",
                paddingTop: "80px",
                maxWidth: "900px",
                margin: "auto",
                lineHeight: 1.7,
            }}
        >
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <Card
                    sx={{
                        borderRadius: "24px",
                        background: "rgba(255, 255, 255, 0.03)",
                        backdropFilter: "blur(12px)",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        boxShadow: "0 10px 40px rgba(0, 0, 0, 0.2)",
                        p: { xs: 2, md: 4 }
                    }}
                >
                    <CardContent>
                        <Button 
                            onClick={() => navigate("/")}
                            sx={{ 
                                mb: 3, 
                                color: "#fff",
                                background: "rgba(255, 255, 255, 0.05)",
                                border: "1px solid rgba(255, 255, 255, 0.1)",
                                borderRadius: "20px",
                                px: 3,
                                py: 0.8,
                                textTransform: "none",
                                fontSize: "0.95rem",
                                fontWeight: 600,
                                backdropFilter: "blur(10px)",
                                transition: "all 0.3s ease",
                                "&:hover": { 
                                    background: "rgba(255, 255, 255, 0.1)",
                                    borderColor: "rgba(160, 196, 255, 0.5)",
                                    boxShadow: "0 0 15px rgba(160, 196, 255, 0.2)",
                                    transform: "translateX(-4px)" 
                                }
                            }}
                        >
                            ← Back to Home
                        </Button>

                        <Typography variant="h3" fontWeight={700} mb={4} textAlign="center"
                            sx={{
                                background: "linear-gradient(90deg, #fff, #a0c4ff)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent"
                            }}
                        >
                            About Me
                        </Typography>

                        <Typography variant="body1" mb={3} fontSize="1.1rem" color="text.primary">
                            I’m <strong style={{ color: "#4f8bff" }}>Dong Wei Jie</strong>, a passionate software engineer from Malaysia,
                            focused on building dynamic and user-friendly web solutions with clean UI
                            and seamless functionality.
                        </Typography>

                        <Typography variant="body1" mb={4} fontSize="1.1rem" color="text.secondary">
                            I specialize in both backend and frontend development using technologies such as:
                            <br />
                            <strong style={{ color: "#e6edf3" }}>Java, JavaScript, Python, HTML, CSS, and modern frameworks like React with Vite.</strong>.
                            I also have hands-on experience with containerization and deployment tools such as <strong style={{ color: "#e6edf3" }}>Docker and Kubernetes</strong>,
                            along with practical exposure to AI platforms, model fine-tuning, and cloud-based AI infrastructure during my internship.
                        </Typography>

                        <Typography variant="body1" mb={4} fontSize="1.1rem" color="text.secondary">
                            In addition, I have working knowledge of <strong style={{ color: "#e6edf3" }}>Adobe Photoshop and Premiere Pro</strong>,
                            enabling me to handle basic media and design tasks when needed.
                            I am continuously learning and improving my skills to stay aligned with the latest technologies and industry practices, particularly in AI and DevOps.
                        </Typography>

                        <Box sx={{
                            background: "rgba(0,0,0,0.2)",
                            borderRadius: "16px",
                            p: 3,
                            border: "1px solid rgba(255,255,255,0.05)"
                        }}>
                            <Typography variant="h5" fontWeight={600} mb={2} color="#4f8bff">
                                Quick Facts
                            </Typography>

                            <List>
                                <ListItem sx={{ py: 0.5 }}>
                                    <ListItemText primaryTypographyProps={{ fontSize: "1.1rem" }} primary="🌍 Based in Malaysia 🇲🇾" />
                                </ListItem>

                                <ListItem sx={{ py: 0.5 }}>
                                    <ListItemText primaryTypographyProps={{ fontSize: "1.1rem" }} primary="✉️ Email: jackdong986@gmail.com" />
                                </ListItem>

                                <ListItem sx={{ py: 0.5 }}>
                                    <ListItemText primaryTypographyProps={{ fontSize: "1.1rem" }} primary="🧠 Currently learning AI Stack" />
                                </ListItem>

                                <ListItem sx={{ py: 0.5 }}>
                                    <ListItemText primaryTypographyProps={{ fontSize: "1.1rem" }} primary="☕ Always coding with coffee (even when sleepy)" />
                                </ListItem>
                            </List>
                        </Box>

                    </CardContent>
                </Card>
            </motion.div>
        </Box>
    );
}
