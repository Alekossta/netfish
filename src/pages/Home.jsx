import { Box, Typography } from "@mui/material";

export default function Home()
{
    return <Box>

        <Box sx={{
            display: "flex",
            flexDirection: "column",
            padding: "2rem",  
            gap: "1rem", 
            backgroundImage: "url('/image.png')",
            backgroundSize: "cover", // Ensures it covers the box
            backgroundPosition: "center", // Centers the image
            height: "90vh"
        }} >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: 8,
                    padding: "2rem",
                }}
            >
                <Typography variant="h1" sx={{alignSelf: "center"}}>
                    Welcome to Netfish 👋
                </Typography>
                <Typography sx={{fontSize: "1.75em", alignSelf: "center"}}>
                    Making environmental education more fun 🎉
                </Typography>
            </Box>
        </Box>
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            paddingX: "3rem",
            minHeight: "100vh",
            paddingY: "2rem",
            backgroundImage: "url('/back_caustics.png')",
            backgroundSize: "cover", // Ensures it covers the box
            backgroundPosition: "center", // Centers the image
        }} >
            <Box sx={{display: "flex", flexDirection: "column", gap: "2rem"}}>
                <Typography sx={{alignSelf: "flex-start", fontSize: "2em", width: "50%"}}>
                    Water pollution remains one of the most pressing environmental
                     issues, yet the core of the problem is the widespread lack of awareness.
                </Typography>
                <Typography sx={{fontWeight: "bold", alignSelf: "flex-end", fontSize: "2em", marginRight: "20%"}}>
                    Why is that?
                </Typography>
                <Typography sx={{alignSelf: "flex-end", fontSize: "2em", width: "50%"}}>
                    Because this ignorance contributes to unchecked pollution, weak environmental policies,
                    and unsustainable human activities that harm aquatic ecosystems.
                </Typography>
                <Typography sx={{alignSelf: "flex-start", fontSize: "2em", width: "50%"}}>
                    Therefore we designed a game to help emphasize the severity
                    of water pollution and motivate people to take action
                </Typography>
            </Box>
        </Box>
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            paddingX: "3rem",
            minHeight: "100vh",
            paddingY: "2rem",
            backgroundImage: "url('/back_caustics.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
        }} >
            <Typography variant="h2">
                About the game
            </Typography>   
            <Box
                sx={{
                    marginTop: "2rem",
                    borderRadius: 5,
                    color: "white",
                    padding: "2rem",
                    background: "linear-gradient(to bottom, rgba(151, 151, 151, 0.7), rgba(50, 50, 50, 0.8));"
                }}
            >
                <Typography sx={{fontSize: "2em"}}>
                    Netfish is an engaging and thought-provoking game designed to raise awareness about ocean pollution and its impact on marine life. Players take on the role of a small fish navigating through increasingly polluted waters, dodging plastic and food waste.
                    As players progress, they witness firsthand the challenges marine creatures face due to human negligence. The game encourages environmental responsibility by highlighting the importance of reducing ocean waste and protecting marine biodiversity.
                    With stunning underwater visuals, immersive gameplay, and an eco-conscious message, Netfish is more than just a game—it's a call to action for a cleaner, healthier planet by raising the question: "Will you help save the ocean?"
                </Typography>
            </Box>
        </Box>
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            paddingX: "3rem",
            minHeight: "100vh",
            paddingY: "2rem",
            backgroundImage: "url('/back_caustics.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
        }} >
            <Typography>
                The Game
            </Typography>
        </Box>
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            paddingX: "3rem",
            minHeight: "100vh",
            paddingY: "2rem",
            backgroundImage: "url('/back_caustics.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
        }} >
            <Typography>
                Donate
            </Typography>
        </Box>
    </Box>
}