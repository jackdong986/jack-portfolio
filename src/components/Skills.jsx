import { Box, Typography, Grid, Card, CardContent } from "@mui/material";

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
        <Box id="skills" sx={{ p: 4 }}>
            <Typography variant="h4" mb={4} textAlign="center">
                Skills
            </Typography>

            <Grid container spacing={4}>
                {skillCategories.map((cat, i) => (
                    <Grid item xs={12} md={4} key={i}>
                        <Card sx={{ borderLeft: `6px solid ${cat.color}` }}>
                            <CardContent>
                                <Typography 
                                    variant="h6" 
                                    mb={2} 
                                    sx={{ color: cat.color, fontWeight: "bold" }}
                                >
                                    {cat.name}
                                </Typography>

                                <Grid container spacing={2}>
                                    {cat.skills.map((s, index) => (
                                        <Grid 
                                            item 
                                            xs={4} 
                                            sm={3} 
                                            md={4} 
                                            key={index}
                                            sx={{ textAlign: "center" }}
                                        >
                                            <img 
                                                src={s.icon} 
                                                alt={s.name} 
                                                width="40" 
                                                height="40"
                                            />
                                            <Typography variant="body2" mt={1}>
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
        </Box>
    );
}
