import { Box, Card, CardContent, Chip, Container, Grid, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";

const MotionDiv = motion.div;

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.16 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const skillCategories = [
  {
    name: "AI & Machine Learning",
    summary: "AI systems, model workflows, chatbot ideas, and GenAI experimentation.",
    color: "#5b8cff",
    skills: [
      { name: "Python", icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/python-colored.svg" },
      { name: "PyTorch", icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/pytorch-colored.svg" },
      { name: "TensorFlow", icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tensorflow-colored.svg" },
      { name: "Hugging Face", icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/huggingface-colored-dark.svg" },
      { name: "Jupyter", icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/jupyter-colored.svg" },
      { name: "GenAI", icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/openai-colored.svg" },
    ],
  },
  {
    name: "Software Development",
    summary: "Full-stack foundations for web apps, APIs, databases, and user-facing tools.",
    color: "#2dd4bf",
    skills: [
      { name: "React", icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg" },
      { name: "Vite", icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/vite-colored.svg" },
      { name: "Flask", icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/flask-colored-dark.svg" },
      { name: "Java", icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/java-colored.svg" },
      { name: "JavaScript", icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg" },
      { name: "SQL", icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mysql-colored.svg" },
    ],
  },
  {
    name: "DevOps & Platforms",
    summary: "Tools used during AI-Stack testing, deployment support, and project delivery.",
    color: "#f59e0b",
    skills: [
      { name: "Git", icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/git-colored.svg" },
      { name: "VS Code", icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/visualstudiocode-colored.svg" },
      { name: "Docker", icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/docker-colored.svg" },
      { name: "Kubernetes", icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/kubernetes-colored.svg" },
      { name: "Firebase", icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/firebase-colored.svg" },
      { name: "Node.js", icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg" },
    ],
  },
];

export default function Skills() {
  return (
    <Box id="skills" sx={{ py: { xs: 8, md: 11 } }}>
      <Container maxWidth="lg">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <Stack
            direction={{ xs: "column", md: "row" }}
            justifyContent="space-between"
            alignItems={{ xs: "flex-start", md: "flex-end" }}
            spacing={2}
            sx={{ mb: 5 }}
          >
            <Box>
              <Typography variant="overline" color="secondary.main" fontWeight={800}>
                Capabilities
              </Typography>
              <Typography variant="h3" fontWeight={800}>
                Skills that support real projects.
              </Typography>
            </Box>
            <Typography color="text.secondary" sx={{ maxWidth: 420, lineHeight: 1.75 }}>
              An AI-first skill set backed by full-stack development, deployment awareness,
              and hands-on model workflow exposure from internship and final year project work.
            </Typography>
          </Stack>
        </MotionDiv>

        <MotionDiv
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Grid container spacing={4} justifyContent="center">
            {skillCategories.map((cat) => (
              <Grid size={{ xs: 12, md: 4 }} key={cat.name} component={MotionDiv} variants={itemVariants}>
                <Card
                  sx={{
                    height: "100%",
                    background: "rgba(15, 23, 42, 0.68)",
                    border: "1px solid rgba(148, 163, 184, 0.15)",
                    boxShadow: "0 22px 56px rgba(2, 6, 23, 0.24)",
                    borderRadius: 4,
                    transition: "transform 0.25s ease, border-color 0.25s ease",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      borderColor: cat.color,
                    },
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Chip
                      label={cat.name}
                      sx={{
                        mb: 2,
                        color: cat.color,
                        background: "rgba(255, 255, 255, 0.04)",
                        border: `1px solid ${cat.color}55`,
                        fontWeight: 800,
                      }}
                    />

                    <Typography color="text.secondary" sx={{ minHeight: 52, mb: 3, lineHeight: 1.65 }}>
                      {cat.summary}
                    </Typography>

                    <Grid container spacing={1.5}>
                      {cat.skills.map((skill) => (
                        <Grid size={{ xs: 4, sm: 3, md: 4 }} key={skill.name}>
                          <Box
                            sx={{
                              minHeight: 104,
                              textAlign: "center",
                              p: 1.2,
                              borderRadius: 3,
                              background: "rgba(8, 17, 31, 0.5)",
                              border: "1px solid rgba(148, 163, 184, 0.12)",
                              transition: "transform 0.2s ease, background 0.2s ease",
                              "&:hover": {
                                transform: "translateY(-3px)",
                                background: "rgba(30, 41, 59, 0.72)",
                              },
                            }}
                          >
                            <img
                              src={skill.icon}
                              alt={skill.name}
                              width="36"
                              height="36"
                              loading="lazy"
                              style={{ filter: "drop-shadow(0 6px 12px rgba(0,0,0,0.24))" }}
                            />
                            <Typography variant="caption" component="p" mt={1} sx={{ color: "text.secondary" }}>
                              {skill.name}
                            </Typography>
                          </Box>
                        </Grid>
                      ))}
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </MotionDiv>
      </Container>
    </Box>
  );
}
