import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

/*
 Website homepage
 */
export function HomePage() {
    return (
        <Box m={4}>
            <Typography variant="h3" component="div" gutterBottom>
                Welcome to the homepage
            </Typography>
            <img src="https://images.alphacoders.com/789/thumb-1920-789452.jpg" width="50%" alt="homepage wallpaper"/>
        </Box>
    )
}