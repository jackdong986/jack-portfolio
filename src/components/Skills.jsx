import { Box, Typography, Grid, Card, CardContent } from "@mui/material";
import { motion } from "framer-motion";

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.2 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Skills() {
    const skillCategories = [
        {
            name: "Frontend",
            color: "#1E88E5",
            skills: [
                { name: "JavaScript", icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg" },
                { name: "React", icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg" },
                { name: "Vite", icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/vite-colored.svg" },
                { name: "HTML5", icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg" },
                { name: "Bootstrap", icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/bootstrap-colored.svg" },
                { name: "Figma", icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/figma-colored.svg" },
            ]
        },
        {
            name: "Backend",
            color: "#43A047",
            skills: [
                { name: "Python", icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/python-colored.svg" },
                { name: "Flask", icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/flask-colored-dark.svg" },
                { name: "NodeJS", icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg" },
                { name: "MySQL", icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mysql-colored.svg" },
                { name: "Firebase", icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/firebase-colored.svg" },
                { name: "C++", icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/cplusplus-colored.svg" },
                { name: "C#", icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/csharp-colored.svg" },
                { name: "Java", icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/java-colored.svg" },
                { name: "PHP", icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/php-colored.svg" },
            ]
        },
        {
            name: "Tools & DevOps",
            color: "#FB8C00",
            skills: [
                { name: "Git", icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/git-colored.svg" },
                { name: "VS Code", icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/visualstudiocode-colored.svg" },
                { name: "Docker", icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/docker-colored.svg" },
                { name: "Hugging Face", icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/huggingface-colored-dark.svg" },
                { name: "Kubernetes", icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/kubernetes-colored.svg" },
                { name: "Photoshop", icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/photoshop-colored-dark.svg" },
                { name: "Premiere Pro", icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/premierepro-colored-dark.svg" },
            ]
        }
    ];

    return (
        <Box id="skills" sx={{ p: 4, pt: 8 }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6 }}
            >
                <Typography variant="h3" fontWeight={700} mb={6} textAlign="center"
                    sx={{
                        background: "linear-gradient(90deg, #fff, #a0c4ff)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent"
                    }}>
                    Skills
                </Typography>
            </motion.div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
            >
                <Grid container spacing={4} justifyContent="center">
                    {skillCategories.map((cat, i) => (
                        <Grid item xs={12} md={4} key={i} component={motion.div} variants={itemVariants}>
                            <Card 
                                sx={{ 
                                    borderLeft: `6px solid ${cat.color}`,
                                    height: "100%",
                                    background: "rgba(255, 255, 255, 0.03)",
                                    backdropFilter: "blur(10px)",
                                    borderTop: "1px solid rgba(255, 255, 255, 0.1)",
                                    borderRight: "1px solid rgba(255, 255, 255, 0.1)",
                                    borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                                    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                                    borderRadius: "16px",
                                    transition: "all 0.3s ease",
                                    "&:hover": {
                                        transform: "translateY(-5px)",
                                        boxShadow: "0 8px 30px rgba(0, 0, 0, 0.2)",
                                    }
                                }}
                            >
                                <CardContent sx={{ p: 3 }}>
                                    <Typography 
                                        variant="h6" 
                                        mb={3} 
                                        sx={{ color: cat.color, fontWeight: "bold" }}
                                    >
                                        {cat.name}
                                    </Typography>

                                    <Grid container spacing={3}>
                                        {cat.skills.map((s, index) => (
                                            <Grid 
                                                item 
                                                xs={4} 
                                                sm={3} 
                                                md={4} 
                                                key={index}
                                                sx={{ 
                                                    textAlign: "center",
                                                    transition: "transform 0.2s ease",
                                                    "&:hover": { transform: "scale(1.1)" }
                                                }}
                                            >
                                                <img 
                                                    src={s.icon} 
                                                    alt={s.name} 
                                                    width="40" 
                                                    height="40"
                                                    style={{ filter: "drop-shadow(0px 2px 4px rgba(0,0,0,0.3))" }}
                                                />
                                                <Typography variant="body2" mt={1} sx={{ opacity: 0.9 }}>
                                                    {s.name}
                                                </Typography>
                                            </Grid>
                                        ))}
                                    </Grid>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </motion.div>
        </Box>
    );
}
