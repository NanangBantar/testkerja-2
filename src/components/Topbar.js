import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/styles';
import { primary } from "../static/varColor.js";

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

const navigationButton = (arrButton) => {
    return (
        <>
            {arrButton.map((val, index) =>
                val === "Promotions" ?
                    <Button key={index} sx={{ textTransform: "none", color: "#757575", fontWeight: "bold" }} variant="text">
                        <Badge badgeContent={`HOT`} color="primary">
                            {val}
                        </Badge>
                    </Button>
                    :
                    <Button key={index} sx={{ textTransform: "none", color: "#757575", fontWeight: "bold" }} variant="text">{val}</Button>
            )}
        </>
    );
};

// Making every component that have conditional rendering(isMobile) into variable  
const RegisterAndcreate = (statement) => {
    return (
        <Stack sx={{ fontWeight: "bold" }} direction="row" justifyContent={statement ? "flex-end" : ""}>
            <Button sx={{ display: statement ? { xs: 'none', sm: 'block' } : "", marginRight: "30px", fontWeight: "bold", color: "black" }} variant="text">
                Masuk
            </Button>
            <MyButton ismobile={statement} sx={{ margin: statement ? "0 0 10px 0" : "" }} variant="text">
                Daftar Sekarang
            </MyButton>
        </Stack>
    );
}
const Logo = (statement) => {
    return (
        <img style={{ width: 150, marginLeft: statement ? "10px" : "100px", padding: statement ? "8px 0" : "0" }} src={process.env.PUBLIC_URL + '/logo.png'} />
    );
}

const Topbar = (props) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Box sx={{ flexGrow: 1, display: 'flex' }}>
            <AppBar sx={{
                backgroundColor: "white", color: "#757575", flexGrow: 1, padding: "5px 0"
            }} position="static">
                <Grid container sx={{ padding: "10px", display: "flex", alignItems: "center" }}>
                    < Grid sx={{ flexGrow: 1 }} item >
                        {Logo(isMobile)}
                    </Grid>
                    <Grid sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }} item >
                        <Stack spacing={1} direction="row">
                            {navigationButton(["Home", "About", "Promotions", "Blogs", "Contact Us"])}
                        </Stack>
                    </Grid>
                    <Grid sx={{ flexGrow: 1 }} item >
                        {RegisterAndcreate(isMobile)}
                    </Grid>
                </Grid>
            </AppBar >
        </Box >
    );
}

export default Topbar;
