import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { primary, dataTop } from "../static/varColor.js";

//import CardCarousel
import CardCarousel from "./CardCarousel";

const Category = () => {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };

    return (
        <Box sx={{ flexGrow: 1, display: 'flex', padding: isMobile ? '750px 20px 0 20px' : "35px 110px 0 110px" }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Stack sx={{ padding: isMobile ? "0 20px 0 20px" : "" }}>
                        <Typography sx={{ fontSize: "38px", lineHeight: "50px", color: "#333333", fontWeight: "bold" }}>
                            Browser Our Category
                        </Typography>
                        <Typography sx={{ fontSize: "38px", color: primary, fontWeight: "bold" }}>
                            Receipt
                        </Typography>
                    </Stack>
                </Grid>
                <Grid item xs={12}>
                    <CardCarousel data={dataTop} />
                </Grid>
            </Grid>
        </Box>
    );
}

export default Category;