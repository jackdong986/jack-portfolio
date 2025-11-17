import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";

export default function About() {
    return (
        <Box
            id="about"
            sx={{
                padding: "60px 20px",
                maxWidth: "900px",
                margin: "auto",
                lineHeight: 1.8,
            }}
        >
            <Typography variant="h4" fontWeight={700} mb={3} textAlign="center">
                About Me
            </Typography>

            <Typography variant="body1" mb={2}>
                I’m <strong>Dong Wei Jie</strong>, a passionate software engineer from Malaysia,
                focused on building dynamic web solutions with user-friendly designs
                and seamless functionality.
            </Typography>

            <Typography variant="body1" mb={2}>
                I have experience in full-stack development using technologies such as:
                Java, Kotlin, JavaScript, Python, HTML, ASPX, CSS, and a basic understanding
                of 8086 Assembly Language and C++. I also work with Adobe Photoshop and
                Premiere Pro for multimedia creation.
            </Typography>

            <List sx={{ mt: 3 }}>
                <ListItem>
                    <ListItemText primary="🌍 Based in Malaysia 🇲🇾" />
                </ListItem>
                <ListItem>
                    <ListItemText primary="✉️ Contact: weijie.dong@flexinfra.com.my" />
                </ListItem>
                <ListItem>
                    <ListItemText primary="🧠 Currently learning AI Stack" />
                </ListItem>
                <ListItem>
                    <ListItemText primary="☕ Sleepy but working hard with coffee" />
                </ListItem>
            </List>
        </Box>
    );
}
