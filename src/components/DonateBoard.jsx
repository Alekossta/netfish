import { Button, Card, CardContent, CardHeader,Box, Typography } from "@mui/material";

export default function DonateBoard({name, description, link})
{
    return <Card sx={{height: "60vh", width: 400}} elevation={10}>
        <CardHeader title={`${name}`}/>
        <CardContent sx={{height: "80%"}}>
            <Box sx={{display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between"}}>
                <Typography>
                    {description}
                </Typography>
                <Button  
                    variant="outlined" color="secondary" sx={{justifySelf: "flex-end"}}
                    component="a" // Render as <a> tag
                    href={link} // Set the link URL
                    target="_blank" // Open in a new tab
                    rel="noopener noreferrer" // Security precaution when using target="_blank"
                >
                    Donate
                </Button>
            </Box>

        </CardContent>
    </Card>
}