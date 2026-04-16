import { Box, Typography, List, ListItem, ListItemText, Card, CardContent } from "@mui/material";
import { motion } from "framer-motion";

export default function About() {
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
                            I specialize in both backend and frontend development using:
                            <br />
                            <strong style={{ color: "#e6edf3" }}>Java, Kotlin, JavaScript, Python, HTML, ASPX, CSS</strong>.
                            I also have a basic understanding of <strong style={{ color: "#e6edf3" }}>8086 Assembly</strong> and <strong style={{ color: "#e6edf3" }}>C++</strong>,
                            and experience with Adobe Photoshop & Premiere Pro for media and design tasks.
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
