import { Box, Button, Card, CardContent, Container, Grid, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const MotionDiv = motion.div;

const paragraphSx = {
  color: "text.secondary",
  fontSize: "1.05rem",
  lineHeight: 1.9,
};

const facts = [
  ["Location", "Malaysia"],
  ["Education", "Bachelor of Software Engineering"],
  ["Career focus", "AI Engineer, then Software Developer"],
  ["Email", "jackdong986@gmail.com"],
];

export default function About() {
  const navigate = useNavigate();

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
      <MotionDiv
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Card
          sx={{
            borderRadius: 4,
            background: "rgba(15, 23, 42, 0.76)",
            border: "1px solid rgba(148, 163, 184, 0.16)",
            boxShadow: "0 28px 80px rgba(2, 6, 23, 0.34)",
          }}
        >
          <CardContent sx={{ p: { xs: 2.5, md: 5 } }}>
            <Button
              onClick={() => navigate("/")}
              variant="outlined"
              sx={{
                mb: 4,
                color: "text.primary",
                borderColor: "rgba(148, 163, 184, 0.3)",
              }}
            >
              Back to Home
            </Button>

            <Grid container spacing={5}>
              <Grid size={{ xs: 12, md: 7 }}>
                <Typography variant="overline" color="secondary.main" fontWeight={800}>
                  About Jack
                </Typography>
                <Typography variant="h2" fontWeight={800} sx={{ mb: 3, fontSize: { xs: "2.5rem", md: "4rem" } }}>
                  I am a fresh software engineering graduate focused on AI.
                </Typography>

                <Stack spacing={2.5}>
                  <Typography sx={paragraphSx}>
                    I am Dong Wei Jie, a fresh Bachelor of Software Engineering graduate from
                    Tunku Abdul Rahman University of Management and Technology.
                  </Typography>
                  <Typography sx={paragraphSx}>
                    I completed my previous internship as an AI Engineer at Flexinfra, where I worked
                    with AI-Stack platform testing, model fine-tuning, integration testing, and
                    deployment support using Docker and Kubernetes.
                  </Typography>
                  <Typography sx={paragraphSx}>
                    My strongest interests are Agentic AI, AI for compliance, chatbot systems,
                    and Generative AI. AI engineering is my first career direction, supported by
                    software developer skills in React, Vite, Flask, Python, Java, SQL, and cloud-ready tooling.
                  </Typography>
                </Stack>
              </Grid>

              <Grid size={{ xs: 12, md: 5 }}>
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: { xs: "1fr", sm: "repeat(2, minmax(0, 1fr))", md: "1fr" },
                    gap: 1.5,
                  }}
                >
                  {facts.map(([label, value]) => (
                    <Box
                      key={label}
                      sx={{
                        p: 2,
                        borderRadius: 3,
                        background: "rgba(8, 17, 31, 0.5)",
                        border: "1px solid rgba(148, 163, 184, 0.14)",
                      }}
                    >
                      <Typography variant="caption" color="text.secondary">
                        {label}
                      </Typography>
                      <Typography fontWeight={800}>{value}</Typography>
                    </Box>
                  ))}
                </Box>

                <Box
                  sx={{
                    mt: 2,
                    p: 2.5,
                    borderRadius: 3,
                    background: "linear-gradient(145deg, rgba(91, 140, 255, 0.16), rgba(45, 212, 191, 0.12))",
                    border: "1px solid rgba(91, 140, 255, 0.2)",
                  }}
                >
                  <Typography variant="h6" fontWeight={800} mb={1}>
                    Current direction
                  </Typography>
                  <Typography color="text.secondary" sx={{ lineHeight: 1.7 }}>
                    Building toward AI Engineer roles while keeping strong full-stack software development skills.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </MotionDiv>
    </Container>
  );
}
