import { Box, Button, Chip, Container, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";

const MotionDiv = motion.div;
const highlights = ["Agentic AI", "AI compliance", "Chatbots", "Generative AI"];

export default function Hero() {
  return (
    <Container
      maxWidth="lg"
      sx={{
        minHeight: { xs: "auto", md: "calc(100vh - 76px)" },
        py: { xs: 7, md: 8 },
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "1.08fr 0.92fr" },
        gap: { xs: 6, md: 8 },
        alignItems: "center",
      }}
    >
      <MotionDiv
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Chip
          label="Fresh Software Engineering graduate"
          sx={{
            mb: 3,
            color: "secondary.main",
            background: "rgba(45, 212, 191, 0.1)",
            border: "1px solid rgba(45, 212, 191, 0.22)",
            fontWeight: 700,
          }}
        />

        <Typography
          variant="h1"
          sx={{
            maxWidth: 720,
            fontSize: { xs: "2.65rem", sm: "3.65rem", md: "4.25rem", lg: "4.8rem" },
            lineHeight: 1,
            fontWeight: 800,
            mb: 3,
          }}
        >
          AI-focused software engineer building useful intelligent systems.
        </Typography>

        <Typography
          color="text.secondary"
          sx={{
            maxWidth: 620,
            fontSize: { xs: "1rem", md: "1.18rem" },
            lineHeight: 1.8,
            mb: 4,
          }}
        >
          I’m Jack Dong, a Software Engineering graduate passionate about AI
          engineering and full-stack development.
        </Typography>

        <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} sx={{ mb: 4 }}>
          <Button
            variant="contained"
            size="large"
            href="#projects"
            sx={{
              px: 3,
              py: 1.35,
              boxShadow: "0 18px 40px rgba(91, 140, 255, 0.3)",
            }}
          >
            View Projects
          </Button>
          <Button
            variant="outlined"
            size="large"
            href="#contact"
            sx={{
              px: 3,
              py: 1.35,
              color: "text.primary",
              borderColor: "rgba(148, 163, 184, 0.35)",
            }}
          >
            Contact Me
          </Button>
        </Stack>

        <Stack direction="row" flexWrap="wrap" gap={1}>
          {highlights.map((item) => (
            <Chip
              key={item}
              label={item}
              variant="outlined"
              sx={{
                color: "text.secondary",
                borderColor: "rgba(148, 163, 184, 0.2)",
                background: "rgba(15, 23, 42, 0.36)",
              }}
            />
          ))}
        </Stack>
      </MotionDiv>

      <MotionDiv
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Box
          sx={{
            border: "1px solid rgba(148, 163, 184, 0.18)",
            background: "linear-gradient(145deg, rgba(15, 23, 42, 0.92), rgba(30, 41, 59, 0.72))",
            boxShadow: "0 28px 80px rgba(2, 6, 23, 0.45)",
            borderRadius: 4,
            p: { xs: 2.5, md: 3 },
          }}
        >
          <Typography variant="overline" color="secondary.main" fontWeight={800}>
            Current Focus
          </Typography>

          <Typography variant="h4" fontWeight={800} sx={{ mt: 1, mb: 2 }}>
            AI engineer path, GenAI projects, and deployable software systems.
          </Typography>

          <Typography color="text.secondary" sx={{ lineHeight: 1.8, mb: 3 }}>
            My interests are Agentic AI, AI for compliance, chatbot systems,
            and Generative AI, supported by practical web, backend, and deployment skills.
          </Typography>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              gap: 1.5,
            }}
          >
            {[
              ["AI", "Primary focus"],
              ["SE", "Bachelor degree"],
              ["8", "Featured projects"],
              ["MY", "Malaysia based"],
            ].map(([value, label]) => (
              <Box
                key={label}
                sx={{
                  minHeight: 104,
                  p: 2,
                  borderRadius: 3,
                  background: "rgba(8, 17, 31, 0.58)",
                  border: "1px solid rgba(148, 163, 184, 0.14)",
                }}
              >
                <Typography variant="h4" fontWeight={800}>
                  {value}
                </Typography>
                <Typography color="text.secondary" variant="body2">
                  {label}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </MotionDiv>
    </Container>
  );
}
