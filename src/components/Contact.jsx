import { Box, Button, Card, CardContent, Container, Divider, Link, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import QRCode from "react-qr-code";
import resume from "../assets/CV Resume.pdf";

const MotionDiv = motion.div;

export default function Contact() {
  const resumeUrl = resume;
  const github = "https://github.com/jackdong986";
  const email = "jackdong986@gmail.com";

  return (
    <Box id="contact" sx={{ py: { xs: 8, md: 11 } }}>
      <Container maxWidth="md">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <Typography variant="overline" color="secondary.main" fontWeight={800} textAlign="center" display="block">
            Contact
          </Typography>
          <Typography variant="h3" mb={2} fontWeight={800} textAlign="center">
            Let's build something useful.
          </Typography>
          <Typography color="text.secondary" textAlign="center" sx={{ maxWidth: 640, mx: "auto", mb: 5, lineHeight: 1.8 }}>
            I am open to AI Engineer, GenAI, chatbot, AI compliance, and software developer roles.
          </Typography>

          <Card
            sx={{
              borderRadius: 4,
              background: "rgba(15, 23, 42, 0.78)",
              border: "1px solid rgba(148, 163, 184, 0.16)",
              boxShadow: "0 28px 80px rgba(2, 6, 23, 0.34)",
            }}
          >
            <CardContent sx={{ p: { xs: 2.5, md: 4 } }}>
              <Stack direction={{ xs: "column", md: "row" }} spacing={4} alignItems="center">
                <Box sx={{ flex: 1, width: "100%" }}>
                  <Typography variant="h5" fontWeight={800} mb={1}>
                    Reach me directly
                  </Typography>
                  <Typography color="text.secondary" sx={{ lineHeight: 1.8, mb: 3 }}>
                    Send me an email, review my GitHub work, or download my resume for a quick summary
                    of my AI engineering internship, software engineering education, and project work.
                  </Typography>

                  <Stack spacing={1.5}>
                    <Button
                      variant="contained"
                      size="large"
                      href={`mailto:${email}`}
                      sx={{ py: 1.35, justifyContent: "center" }}
                    >
                      Email Jack
                    </Button>
                    <Button
                      variant="outlined"
                      size="large"
                      href={resumeUrl}
                      download
                      sx={{
                        py: 1.35,
                        color: "text.primary",
                        borderColor: "rgba(148, 163, 184, 0.35)",
                      }}
                    >
                      Download Resume
                    </Button>
                  </Stack>

                  <Divider sx={{ my: 3, borderColor: "rgba(148, 163, 184, 0.14)" }} />

                  <Typography color="text.secondary" variant="body2">
                    Email: <Link href={`mailto:${email}`} color="inherit">{email}</Link>
                  </Typography>
                  <Typography color="text.secondary" variant="body2">
                    GitHub: <Link href={github} target="_blank" rel="noopener noreferrer" color="inherit">github.com/jackdong986</Link>
                  </Typography>
                </Box>

                <Box
                  sx={{
                    p: 2,
                    background: "#fff",
                    borderRadius: 4,
                    boxShadow: "0 20px 60px rgba(45, 212, 191, 0.18)",
                  }}
                >
                  <QRCode value={github} size={148} />
                </Box>
              </Stack>
            </CardContent>
          </Card>
        </MotionDiv>
      </Container>
    </Box>
  );
}
