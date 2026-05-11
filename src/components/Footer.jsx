import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        px: 2,
        py: 4,
        textAlign: "center",
        borderTop: "1px solid rgba(148, 163, 184, 0.14)",
      }}
    >
      <Typography variant="body2" color="text.secondary">
        Copyright {new Date().getFullYear()} Jack Dong. All rights reserved.
      </Typography>
    </Box>
  );
}
