import { Box, Typography } from "@mui/material";
import Game from "../components/Game";
import DonateBoard from "../components/DonateBoard";

export default function Home()
{
    return <Box>

        <Box sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "2rem",  
            gap: "1rem", 
            // backgroundImage: "url('/image.png')",
            // backgroundSize: "cover", // Ensures it covers the box
            // backgroundPosition: "center", // Centers the image
            height: "90vh"
        }} >
            <Typography variant="h1" sx={{alignSelf: "center"}}>
                Welcome to Netfish 👋
            </Typography>
            <Typography sx={{fontSize: "1.75em", alignSelf: "center"}}>
                Making environmental education more fun 🎉
            </Typography>
        </Box>
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            paddingX: "3rem",
            minHeight: "100vh",
            paddingY: "2rem",
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
            // backgroundImage: "url('/back_caustics.png')",
            // backgroundSize: "cover",
            // backgroundPosition: "center",
        }} >
            <Typography variant="h2">
                About the game
            </Typography>   
            <Box
                sx={{
                    marginTop: "2rem",
                    padding: "2rem",
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
            minHeight: "100vh",
            // backgroundImage: "url('/calmSee.jpg')",
            // backgroundSize: "cover",
            // backgroundPosition: "center",
        }} >
            <Game/>
        </Box>
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            paddingX: "3rem",
            minHeight: "100vh",
            paddingY: "2rem",
            // backgroundImage: "url('/back_caustics.png')",
            // backgroundSize: "cover",
            // backgroundPosition: "center",
        }} >
            <Typography variant="h1">
                Make a difference
            </Typography>
            <Typography sx={{fontSize: "2em"}}>
                Every penny counts!
            </Typography>
            <Box sx={{display: "flex", justifyContent: "space-around"}}>
                <DonateBoard name="Reclaiming Paradise" link={"https://www.gofundme.com/f/thebalicleanup"}
                 description={"Bali is under threat. Over the years, the rapid increase in tourism, urbanization, and economic activities has led to a dramatic rise in plastic consumption and waste generation on the island. Unfortunately, inadequate waste management infrastructure and improper disposal practices have contributed to the accumulation of plastic waste in Bali's environment, including its beaches, oceans, forests, jungle and urban areas."}/>
                <DonateBoard link={"https://theoceancleanup.com/"} name="Ocean Cleanup" description={"With your help, we can work towards a future where plastic no longer pollutes our oceans. This is possible by cleaning up what is already out there, and stopping plastic on its way to the ocean via rivers. We are currently cleaning up in the Great Pacific Garbage Patch, as well as working on more river Interceptor deployments in some of the world’s most polluted rivers."}/>
                <DonateBoard name="Seven Clean Seas" description={"At Seven Clean Seas, our philosophy embodies a holistic approach to combating plastic pollution, intertwining environmental restoration with social empowerment. Beyond removing plastic debris, we believe in generating fairly paid formal jobs to uplift impacted coastal communities and nurture a sense of environmental stewardship."} link={"https://www.sevencleanseas.com/contribute"}/>
            </Box>

        </Box>
    </Box>
}