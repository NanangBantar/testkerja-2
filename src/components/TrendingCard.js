import * as React from 'react';
import Grid from '@mui/material/Grid';
import { Stack, Typography } from '@mui/material';
import StarsRating from "./StarsRating";
import { primary } from "../static/varColor";
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { makeStyles } from "@mui/styles";
import { styled } from '@mui/material/styles';

const MyButton = styled(Button)(({ }) => ({
    background: primary,
    border: 0,
    borderRadius: 50,
    fontWeight: "bold",
    color: 'white',
    fontSize: "14px",
    lineHeight: "22px",
    padding: "10px 18px",
    textTransform:"none",
    "&:hover": {
        color: "black",
    }
}));

const useStyles = makeStyles(() => ({
    hoverCard: {
        "&:hover": {
            position: "relative",
            cursor: "pointer",
            "&::before": {
                content: '""',
                position: "absolute",
                top: "0",
                left: "0",
                right: "0",
                bottom: "0",
                opacity: "0.1",
                backgroundSize: "cover",
                backgroundImage: `url(${process.env.PUBLIC_URL + '/bg-hero.png'})`,
            }
        }
    }
}));


const TrendingCard = ({ foodData }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const classes = useStyles();
    return (
        <>
            <Grid container sx={{ justifyContent: "center", marginBottom: "83px" }}>
                {foodData.map((val, index) => (
                    <Grid key={index} sx={{ display: { xs: isMobile && index >= 4 ? 'none' : "", sm: 'block' } }}>
                        <Stack className={classes.hoverCard} sx={{ backgroundColor: val.backgroundColor, height: "306px", width: isMobile ? "340px" : "270px", margin: isMobile && index >= 4 ? "0 0 10px 0" : "0 5px 30px 5px", padding: "33px 0 0 22px", borderRadius: "17px", boxShadow: 2 }}>
                            <Grid item>
                                <img style={{ height: "120px", borderRadius: "6px" }} src={val.url} />
                            </Grid>
                            <Grid item>
                                <Typography sx={{ fontWeight: "bold", fontSize: "26px" }}>
                                    {val.name}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography sx={{ fontSize: "18px", color: primary }}>
                                    {val.category}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography sx={{ textAlign: "center", fontWeight: "normal", fontSize: "14px" }} variant="subtitle1" gutterBottom component="div">
                                    {StarsRating(val.rating)}
                                </Typography>
                            </Grid>
                        </Stack>
                    </Grid>
                ))}
            </Grid>
            <Grid sx={{ justifyContent: "center", display: "flex", alignItems: "center", marginBottom: "250px" }}>
                <MyButton>ALL Receipt</MyButton>
            </Grid>
        </>
    );

}

export default TrendingCard;

