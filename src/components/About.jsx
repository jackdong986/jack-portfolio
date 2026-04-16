import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";

export default function About() {
    return (
        <Box
            sx={{
                padding: "40px",
                maxWidth: "900px",
                margin: "auto",
                lineHeight: 1.7,
            }}
        >
            <Typography variant="h3" fontWeight={700} mb={3}>
                About Me
            </Typography>

            <Typography variant="body1" mb={2}>
                I’m <strong>Dong Wei Jie</strong>, a passionate software engineer from Malaysia,
                focused on building dynamic and user-friendly web solutions with clean UI
                and seamless functionality.
            </Typography>

            <Typography variant="body1" mb={2}>
                I specialize in both backend and frontend development using:
                <br />
                <strong>Java, Kotlin, JavaScript, Python, HTML, ASPX, CSS</strong>.
                I also have a basic understanding of <strong>8086 Assembly</strong> and <strong>C++</strong>,
                and experience with Adobe Photoshop & Premiere Pro for media and design tasks.
            </Typography>

            <Typography variant="h5" fontWeight={600} mt={4} mb={2}>
                Quick Facts
            </Typography>

            <List>
                <ListItem>
                    <ListItemText primary="🌍 Based in Malaysia 🇲🇾" />
                </ListItem>

                <ListItem>
                    <ListItemText primary="✉️ Email: jackdong986@gmail.com" />
                </ListItem>

                <ListItem>
                    <ListItemText primary="🧠 Currently learning AI Stack" />
                </ListItem>

                <ListItem>
                    <ListItemText primary="☕ Always coding with coffee (even when sleepy)" />
                </ListItem>
            </List>
        </Box>
    );
}
