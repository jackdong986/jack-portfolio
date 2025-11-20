import { Box, Card, CardContent, CardMedia, Typography, Grid, Link } from "@mui/material";
import chefImg from "../assets/chef.png";
import aboutImg from "../assets/about us.png";
import flowerImg from "../assets/bloom & co..png";

export default function Projects() {
    const items = [
        {
            title: "Chef’s Assistant: AI-Driven Recipe Generation",
            desc: "A Chef's Recipe Generator",
            //img: "/src/assets/chef.png",
            img: chefImg,
            url: "https://github.com/jackdong986/Chef-s-Assistant-AI-Driven-Recipe-Generation-for-Dynamic-Menu-Planning"
        },
        {
            title: "About Me",
            desc: "About Me via vercel",
            //img: "/src/assets/about us.png",
            img: aboutImg,
            url: "https://github.com/jackdong986/About-Me"
        },
        {
            title: "Bloom & Co.",
            desc: "Flower Shop",
            //img: "/src/assets/about us.png",
            img: flowerImg,
            url: "https://github.com/jackdong986/website-shop"
        },
    ];

    return (
        <Box id="projects" sx={{ p: 4 }}>
            <Typography variant="h4" mb={3} textAlign="center">
                My Projects (Github)
            </Typography>

            <Grid
                container
                spacing={3}
                justifyContent="center"
            >
                {items.map((p, i) => {
                    const CardBody = (
                        <Card
                            sx={{
                                height: "100%",
                                transition: "0.3s",
                                "&:hover": { transform: "scale(1.03)" },
                                cursor: p.url ? "pointer" : "default"
                            }}
                        >
                            {/* <CardMedia
                                component="img"
                                image={p.img}
                                sx={{
                                    width: "100%",
                                    height: 220,               // ✔ Consistent image height
                                    objectFit: "cover",        // ✔ No stretching
                                    borderBottom: "1px solid #eee",
                                }}
                            /> */}

                            <CardMedia
                                component="img"
                                image={p.img}
                                sx={{
                                    width: "100%",
                                    height: 200,
                                    objectFit: "cover",
                                }}
                            />

                            <CardContent>
                                <Typography
                                    variant="h6"
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

                                <Typography variant="body2" color="text.secondary">
                                    {p.desc}
                                </Typography>
                            </CardContent>
                        </Card>
                    );

                    return (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={i}>
                            {p.url ? (
                                <Link
                                    href={p.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    underline="none"
                                    sx={{ display: "block" }}
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
        </Box>
    );
}
