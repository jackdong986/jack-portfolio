import { Box, Card, CardContent, CardMedia, Typography, Grid, Link } from "@mui/material";
import { motion } from "framer-motion";
import chefImg from "../assets/chef.png";
import aboutImg from "../assets/about us.png";
import flowerImg from "../assets/bloom & co..png";
import moviedramaImg from "../assets/movie_drama.png";
import dashboardImg from "../assets/dashboard.png";
import llamaflexinfraImg from "../assets/llama-flexinfra.png";

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.15 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Projects() {
    const items = [
        {
            title: "Chef’s Assistant: AI-Driven Recipe Generation",
            desc: "A Chef's Recipe Generator",
            img: chefImg,
            url: "https://github.com/jackdong986/Chef-s-Assistant-AI-Driven-Recipe-Generation-for-Dynamic-Menu-Planning"
        },
        {
            title: "About Me",
            desc: "About Me via vercel",
            img: aboutImg,
            url: "https://github.com/jackdong986/About-Me"
        },
        {
            title: "Bloom & Co.",
            desc: "Flower Shop",
            img: flowerImg,
            url: "https://github.com/jackdong986/website-shop"
        },
        {
            title: "非凡影视",
            desc: "A movie website",
            img: moviedramaImg,
            url: "https://github.com/jackdong986/ffzy-vercel"
        },
        {
            title: "My Dashboard",
            desc: "Dashboard for personal use",
            img: dashboardImg,
            url: "https://github.com/jackdong986/my-dashboard"
        },
        {
            title: "Llama-FlexInfra",
            desc: "An AI chatbot about flexinfra",
            img: llamaflexinfraImg,
            url: "https://github.com/jackdong986/llama-flexinfra"
        },
    ];

    return (
        <Box id="projects" sx={{ p: 4, pt: 8 }}>
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
                    My Projects
                </Typography>
            </motion.div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
            >
                <Grid container spacing={4} justifyContent="center">
                    {items.map((p, i) => {
                        const CardBody = (
                            <Card
                                sx={{
                                    height: "100%",
                                    background: "rgba(255, 255, 255, 0.03)",
                                    backdropFilter: "blur(10px)",
                                    border: "1px solid rgba(255, 255, 255, 0.1)",
                                    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                                    borderRadius: "16px",
                                    transition: "all 0.4s ease",
                                    "&:hover": { 
                                        transform: "translateY(-10px) scale(1.02)",
                                        borderColor: "rgba(79, 139, 255, 0.5)",
                                        boxShadow: "0 10px 40px rgba(79, 139, 255, 0.2)",
                                    },
                                    cursor: p.url ? "pointer" : "default"
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    image={p.img}
                                    sx={{
                                        width: "100%",
                                        height: 200,
                                        objectFit: "cover",
                                        borderBottom: "1px solid rgba(255,255,255,0.05)"
                                    }}
                                />

                                <CardContent sx={{ p: 3 }}>
                                    <Typography
                                        variant="h6"
                                        fontWeight={600}
                                        sx={{
                                            overflow: "hidden",
                                            display: "-webkit-box",
                                            WebkitLineClamp: 2,
                                            WebkitBoxOrient: "vertical",
                                            mb: 1
                                        }}
                                    >
                                        {p.title}
                                    </Typography>

                                    <Typography variant="body2" color="text.secondary" sx={{ opacity: 0.8 }}>
                                        {p.desc}
                                    </Typography>
                                </CardContent>
                            </Card>
                        );

                        return (
                            <Grid item xs={12} sm={6} md={4} lg={3} key={i} component={motion.div} variants={itemVariants}>
                                {p.url ? (
                                    <Link
                                        href={p.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        underline="none"
                                        sx={{ display: "block", height: "100%" }}
                                    >
                                        {CardBody}
                                    </Link>
                                ) : (
                                    CardBody
                                )}
                            </Grid>
                        );
                    })}
                </Grid>
            </motion.div>
        </Box>
    );
}
