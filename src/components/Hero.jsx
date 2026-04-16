import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <Box
            sx={{
                height: "90vh",
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                justifyContent: "center",
                textAlign: "center",
                px: 2,
            }}
        >
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <Typography 
                    variant="h2" 
                    fontWeight={800} 
                    gutterBottom
                    sx={{
                        background: "linear-gradient(90deg, #4f8bff, #b34fff)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent"
                    }}
                >
                    Hi, I'm Jack Dong
                </Typography>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <Typography variant="h5" color="text.secondary" gutterBottom sx={{ fontWeight: 300, mb: 4 }}>
                    Full-Stack Developer • Versatile Problem-Solver • Technical Generalist
                </Typography>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
            >
                <Button
                    variant="contained"
                    size="large"
                    href="#projects"
                    sx={{ 
                        mt: 2,
                        px: 4,
                        py: 1.5,
                        borderRadius: "30px",
                        background: "linear-gradient(45deg, #4f8bff 30%, #355cc9 90%)",
                        boxShadow: "0 4px 20px rgba(79, 139, 255, 0.4)",
                        textTransform: "none",
                        fontSize: "1.1rem",
                        transition: "all 0.3s ease",
                        "&:hover": {
                            transform: "translateY(-3px)",
                            boxShadow: "0 6px 25px rgba(79, 139, 255, 0.6)",
                        }
                    }}
                >
                    View My Projects
                </Button>
            </motion.div>
        </Box>
    );
}