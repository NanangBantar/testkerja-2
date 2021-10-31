import * as React from 'react';
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { primary } from "../static/varColor";
import Stack from '@mui/material/Stack';
import starsRating from "./StarsRating";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const Div = styled('div')(({ ismobile }) => ({
    position: "relative",
    flexGrow: 1,
    display: ismobile === "true" ? '' : "flex",
    padding: ismobile === "true" ? '' : "35px 110px 0 110px",
    "&::before": {
        content: '""',
        height: ismobile === "true" ? "600px" : "",
        opacity: "0.1",
        backgroundSize: "cover",
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",
        position: "absolute",
        Zindex: "-1",
        backgroundImage: `url(${process.env.PUBLIC_URL + '/bg-hero.png'})`,
    },
}));

const MyButton = styled(Button)(({ graybtn }) => ({
    background: graybtn ? "#F2F2F2" : primary,
    border: 0,
    borderRadius: 50,
    fontWeight: "bold",
    color: graybtn ? "black" : "white",
    fontSize: "14px",
    lineHeight: "22px",
    padding: "10px 18px",
    textTransform: "none",
    "&:hover": {
        color: "black",
    }
}));

const HeroContent = styled('div')(({ ismobile }) => ({
    position: ismobile === "true" ? "relative" : "",
    margin: ismobile === "true" ? "24px" : "",
    marginBottom: "-20px",
    "& > *": {
        marginBottom: "32px"
    }
}));

const ImageDescription = styled('div')(() => ({
    background: "rgba(255, 255, 255, 0.74)",
    width: "292px",
    height: "93px",
    boxShadow: "0px 11px 39px rgba(0, 0, 0, 0.07)",
    borderRadius: "17px",
}));

// Making every component that have conditional rendering(isMobile) into variable 
const heroLeftText = (statement) => {
    return (
        < Grid>
            <Typography sx={{
                fontSize: "18px",
                lineHeight: "29px",
                color: "#757575",
                margin: statement ? "300px 0 0 0" : "",
                padding: statement ? "0 30px" : ""
            }}>
                I would think that conserving our natural resources should be a conservative position: Not to waste food, and not to throw away a lot of the food that we buy.
            </Typography>
        </Grid >
    );
};

const heroLeftButton = (statement) => {
    return (
        < Grid sx={{ padding: statement ? "0 30px" : "" }}>
            <Stack direction="row" spacing={2}>
                <MyButton>
                    Daftar Sekarang
                </MyButton>
                <MyButton graybtn>
                    About Us
                </MyButton>
            </Stack>
        </Grid >
    );
};

const heroLeftTitle = (statement) => {
    return (
        <Typography sx={{
            fontWeight: "bold",
            fontSize: statement ? "48px" : "64px",
            lineHeight: "64px",
            color: primary,
            padding: statement ? "30px 30px 0 30px" : ""
        }} >
            Good Food Us Good Mood
        </Typography >
    );
};

const bigHeroImage = (statement) => {
    return (
        <img style={{
            width: statement ? 220 : 460,
            margin: statement ? "0 0 0 20px" : "auto",
            border: '20px solid rgba(196, 196, 196, 0.3)',
            borderRadius: statement ? 300 / 2 : 460 / 2,
        }} src={process.env.PUBLIC_URL + '/hero-image.png'} />
    );
}

const Hero = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Div ismobile={`${isMobile}`}>
            <Grid sx={{ flexGrow: 1, position: isMobile ? "absolute" : "relative", marginTop: isMobile ? "" : "32px" }} item xs={12}>
                <Card sx={{ border: "none", boxShadow: "0", background: "transparent" }}>
                    <HeroContent>
                        <Grid>
                            {heroLeftTitle(isMobile)}
                        </Grid>
                        {heroLeftText(isMobile)}
                        {heroLeftButton(isMobile)}
                    </HeroContent>
                </Card>
            </Grid>
            < Grid sx={{ flexGrow: 1, position: "relative" }} item xs={12}>
                <HeroContent ismobile={`${isMobile}`}>
                    <Grid sx={{ display: "flex", flexDirection: "column", position: isMobile ? "absolute" : "relative", margin: isMobile ? "180px 0 0 0" : "" }}>
                        {bigHeroImage(isMobile)}
                        <Grid sx={{ position: "absolute", margin: isMobile ? "150px 0 0 50px" : "350px 0 0 0" }}>
                            <Grid sx={{ position: "relative" }}>
                                <ImageDescription sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                    <Grid sx={{ display: "flex" }} item xs={4}>
                                        <img style={{
                                            width: 53,
                                            margin: "auto",
                                        }} src={process.env.PUBLIC_URL + '/hero-image.png'} />
                                    </Grid>
                                    <Grid item xs={8}>
                                        <Typography sx={{ fontSize: "14px", fontWeight: "bold" }}>
                                            Green Salad Tomato
                                        </Typography>
                                        <Typography sx={{ fontSize: "14px", color: "#757575" }}>
                                            Tomato
                                        </Typography>
                                        <Typography sx={{ display: "flex" }} component="div">
                                            {starsRating(4)}
                                        </Typography>
                                    </Grid>
                                </ImageDescription>
                            </Grid>
                        </Grid>
                    </Grid>
                </HeroContent>
            </Grid>
        </Div>
    );
}

export default Hero;