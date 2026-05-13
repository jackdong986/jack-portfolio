import { Box, Card, CardContent, CardMedia, Chip, Container, Grid, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import flowerImg from "../assets/bloom & co..png";
import bacs2063Img from "../assets/bacs2063-data-structure-algorithm.png";
import chefImg from "../assets/chef.png";
import dashboardImg from "../assets/dashboard.png";
import llamaflexinfraImg from "../assets/llama-flexinfra.png";
import moviedramaImg from "../assets/movie_drama.png";
import soulvenirImg from "../assets/soulvenir.png";
import tenantTroveImg from "../assets/tenant-trove.png";

const MotionDiv = motion.div;

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const projects = [
  {
    title: "Chef's Assistant",
    desc: "Final year project using fine-tuned MiniLM and GPT-2 workflows for recipe search, generation, and menu planning.",
    img: chefImg,
    tags: ["FYP", "GenAI", "Flask"],
  },
  {
    title: "TenantTrove",
    desc: "Android property renting platform built with Kotlin and XML, supporting property browsing, rental flows, host listing management, profiles, payment history, feedback, and dashboard statistics.",
    img: tenantTroveImg,
    imageFit: "contain",
    tags: ["Android", "Kotlin", "Property rental"],
  },
  {
    title: "Soulvenir",
    desc: "QR-first travel memory app where users create memories, generate printable QR stickers, scan them later, and open an immersive destination-focused globe page.",
    img: soulvenirImg,
    imageFit: "contain",
    tags: ["Travel app", "QR memory", "Globe UI"],
  },
  {
    title: "BACS2063 Programme Management",
    desc: "University programme, tutorial group, and tutor management system for managing academic programme operations.",
    img: bacs2063Img,
    imageFit: "contain",
    tags: ["Data Structures", "Management system", "University"],
  },
  {
    title: "Bloom & Co.",
    desc: "A flower shop website with product presentation and storefront structure.",
    img: flowerImg,
    tags: ["Ecommerce", "UI"],
  },
  {
    title: "Movie Drama",
    desc: "A movie discovery website with media-focused layout and browsing flow.",
    img: moviedramaImg,
    tags: ["Media", "Web app"],
  },
  {
    title: "My Dashboard",
    desc: "A personal dashboard designed for quick access to useful daily information.",
    img: dashboardImg,
    tags: ["Dashboard", "Productivity"],
  },
  {
    title: "Llama-FlexInfra",
    desc: "An AI chatbot experience connected to FlexInfra context and support-style assistance.",
    img: llamaflexinfraImg,
    tags: ["AI chatbot", "LLM"],
  },
];

export default function Projects() {
  return (
    <Box id="projects" sx={{ py: { xs: 8, md: 11 }, background: "rgba(8, 17, 31, 0.34)" }}>
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
                Selected work
              </Typography>
              <Typography variant="h3" fontWeight={800}>
                Projects with a clear story.
              </Typography>
            </Box>
            <Typography color="text.secondary" sx={{ maxWidth: 440, lineHeight: 1.75 }}>
              AI and software projects shaped by my resume: final year AI work,
              mobile applications, travel memory products, management systems, dashboards, and deployable web applications.
            </Typography>
          </Stack>
        </MotionDiv>

        <MotionDiv
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Grid container spacing={3}>
            {projects.map((project) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={project.title} component={MotionDiv} variants={itemVariants}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    overflow: "hidden",
                    background: "rgba(15, 23, 42, 0.72)",
                    border: "1px solid rgba(148, 163, 184, 0.16)",
                    boxShadow: "0 22px 56px rgba(2, 6, 23, 0.26)",
                    borderRadius: 4,
                    transition: "transform 0.25s ease, border-color 0.25s ease",
                    "&:hover": {
                      transform: "translateY(-6px)",
                      borderColor: "rgba(91, 140, 255, 0.54)",
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    image={project.img}
                    alt={`${project.title} screenshot`}
                    sx={{
                      width: "100%",
                      aspectRatio: "16 / 10",
                      height: "auto",
                      objectFit: project.imageFit ?? "cover",
                      background: "rgba(248, 250, 252, 0.96)",
                      borderBottom: "1px solid rgba(148, 163, 184, 0.12)",
                    }}
                  />

                  <CardContent sx={{ p: 2.5, flexGrow: 1 }}>
                    <Typography
                      variant="h6"
                      fontWeight={800}
                      sx={{
                        overflow: "hidden",
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        mb: 1,
                      }}
                    >
                      {project.title}
                    </Typography>

                    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                      {project.desc}
                    </Typography>

                    <Stack direction="row" flexWrap="wrap" gap={0.75} sx={{ mt: 2.5 }}>
                      {project.tags.map((tag) => (
                        <Chip
                          key={tag}
                          label={tag}
                          size="small"
                          sx={{
                            height: 24,
                            color: "text.secondary",
                            background: "rgba(148, 163, 184, 0.1)",
                          }}
                        />
                      ))}
                    </Stack>
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
