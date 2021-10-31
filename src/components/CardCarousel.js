import React from "react";
import Slider from "react-slick";
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import PrevBtn from "../assets/prev.png";
import NextBtn from "../assets/next.png";
import Stack from '@mui/material/Stack';
import { primary } from "../static/varColor";

import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import { useRef } from "react";

const Div = styled('div')(({ item }) => ({
    backgroundColor: item,
    borderRadius: "8px",
    height: "175px",
    paddingTop: "15px",
    position: "relative",
    "&:hover": {
        cursor: "pointer",
        height: "195px",
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
    padding: "5px 10px",
    textTransform: "none",
    "&:hover": {
        color: "black",
    }
}));

const CardCarousel = ({ data }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    const slider = useRef();

    const next = () => {
        slider.current.slickNext();
    };

    const previous = () => {
        slider.current.slickPrev();
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        arrows: isMobile ? isMobile : !isMobile,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const carouselNavButton = (statement) => {
        return (
            <Grid item xs={12} sx={{ padding:"230px 15px 0 15px", display: { xs: 'none', sm: 'block' } }}>
                <Stack spacing={2} direction="row" justifyContent="flex-end">
                    <MyButton onClick={previous}>
                        <img style={{ height:"30px", margin:"0 10px 0 0" }} src={PrevBtn} /> PREV
                    </MyButton>
                    <MyButton onClick={next}>
                        NEXT<img style={{ height:"30px",  margin:"0 0 0 10px" }} src={NextBtn} />
                    </MyButton>
                </Stack>
            </Grid>
        );
    }

    return (
        <div style={{ position: "relative" }}>
            <Slider ref={slider} {...settings}>
                {data.map((item, index) => {
                    return (
                        <Card key={index} sx={{ boxShadow: "none", padding: "10px" }}>
                            <Div item={item.backgroundColor}>
                                <img style={{ width: "52px", margin: "15px auto 10px auto" }} src={item.url} />
                                <Typography sx={{ textAlign: "center", fontWeight: "bold", fontSize: "16px", marginBottom: "4px" }} variant="subtitle1" gutterBottom component="div">
                                    {item.name}
                                </Typography>
                                <Typography sx={{ textAlign: "center", fontWeight: "normal", fontSize: "14px" }} variant="subtitle1" gutterBottom component="div">
                                    {item.total}
                                </Typography>
                            </Div>
                        </Card>
                    );
                })}
            </Slider>
            {carouselNavButton(isMobile)}
        </div>

    );
}

export default CardCarousel;