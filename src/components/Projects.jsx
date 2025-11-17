import { Box, Card, CardContent, CardMedia, Typography, Grid } from "@mui/material";


export default function Projects() {
    const items = [
        {
            title: "Project A",
            desc: "A React project with cool features.",
            img: "https://via.placeholder.com/400x200",
        },
        {
            title: "Project B",
            desc: "AI, automation and backend work.",
            img: "https://via.placeholder.com/400x200",
        },
    ];


    return (
        <Box id="projects" sx={{ p: 4 }}>
            <Typography variant="h4" mb={3} textAlign="center">
                My Projects
            </Typography>


            <Grid container spacing={3}>
                {items.map((p, i) => (
                    <Grid item xs={12} sm={6} md={4} key={i}>
                        <Card sx={{ height: "100%" }}>
                            <CardMedia component="img" height="180" image={p.img} />
                            <CardContent>
                                <Typography variant="h6">{p.title}</Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {p.desc}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}