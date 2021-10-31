import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import TextField from '@mui/material/TextField';

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { primary } from "../static/varColor.js";
import { makeStyles } from "@mui/styles";

import BottomNav from "./BottomNav.js";

const useStyles = makeStyles(() => ({
    hoverAvaContact: {
        "&:hover": {
            cursor: "pointer",
            backgroundColor: primary,
            "& > *": {
                color: "white"
            }
        }
    },
}));

const infoList = (statement) => {
    console.log(statement.listTitle);
    return (
        <>
            <Typography sx={{ fontSize: "18px", fontWeight: "bold" }}>
                {statement.listTitle}
            </Typography>
            <List sx={{ color: "#757575" }}>
                {statement.listData.map((val, index) =>
                    <ListItem key={index} disablePadding>
                        <ListItemText primary={val} />
                    </ListItem>
                )}
            </List>
        </>
    );
}

const Info = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const classes = useStyles();

    const CategoriesList = {
        listTitle: "Categories",
        listData: [
            "Cupcake", "Pizza", "Kebab", "Salmon", "Dougnut"
        ]
    }

    const AboutusList = {
        listTitle: "About Us",
        listData: [
            "About Us", "FAQ", "Report Problem"
        ]
    }

    return (
        <>
            <Box sx={{ flexGrow: 1, display: 'flex', padding: isMobile ? '' : "0 110px 0 110px", display: { xs: 'none', sm: 'block' } }}>
                <Card sx={{ flexGrow: 1, boxShadow: "none", borderRadius: "20px", backgroundColor: "#F9FFF7" }}>
                    <CardContent>
                        <Stack direction="row" sx={{ padding: "73px 0 14px 63px" }}>
                            <Grid item xs={4}>
                                <Stack>
                                    <Grid item xs={12}>
                                        <img style={{ width: "207px" }} src={process.env.PUBLIC_URL + '/logo.png'} />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography sx={{ fontSize: "14px", lineHeight: "20px", margin: "21px 0 33px 0", color: "#757575" }}>
                                            Jl. Prof. DR. Satrio No.7, RT.3/RW.3, Karet Kuningan,
                                            Kecamatan Setiabudi, Kota Jakarta Selatan,
                                            Daerah Khusus Ibukota Jakarta 12950
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Stack direction="row" justifyContent="start" spacing={2}>
                                            <Avatar className={classes.hoverAvaContact} sx={{ background: "transparent" }}><MailOutlineIcon sx={{ color: primary }} /></Avatar>
                                            <Avatar className={classes.hoverAvaContact} sx={{ background: "transparent" }}><LocalPhoneOutlinedIcon sx={{ color: primary }} /></Avatar>
                                            <Avatar className={classes.hoverAvaContact} sx={{ background: "transparent" }}><InstagramIcon sx={{ color: primary }} /></Avatar>
                                        </Stack>
                                    </Grid>
                                </Stack>
                            </Grid>
                            <Grid item xs={2} sx={{ paddingLeft: "55px" }}>
                                {infoList(CategoriesList)}
                            </Grid>
                            <Grid item xs={2} sx={{ paddingLeft: "55px" }}>
                                {infoList(AboutusList)}
                            </Grid>
                            <Grid item xs={4} sx={{ paddingLeft: "75px" }}>
                                <Typography sx={{ fontSize: "18px", fontWeight: "bold" }}>
                                    Newsletter
                                </Typography>
                                <Typography sx={{ fontSize: "14px", lineHeight: "20px", margin: "10px 0 23px 0", color: "#757575" }}>
                                    Get now free 50% discount for alll products on your first order
                                </Typography>
                                <Typography sx={{ fontSize: "14px", margin: "10px 0 23px 0", color: "#757575" }} component="div">
                                    <Stack direction="row">
                                        <TextField className={classes.textFieldRadius} label="Your email address" size="small" />
                                        <Button sx={{ backgroundColor: primary, borderTopLeftRadius: 0, borderBottomLeftRadius: 0, borderTopRightRadius: "15px", borderBottomRightRadius: "15px" }} variant="contained" size="small">Send</Button>
                                    </Stack>
                                </Typography>
                                <Typography sx={{ fontSize: "14px", lineHeight: "20px", margin: "10px 0 23px 0", color: "#757575" }} component="div">
                                    <Stack direction="row" alignItems="center" sx={{ padding: "5px 0" }}>
                                        <MailOutlineIcon sx={{ color: primary, marginRight: "5px" }} />
                                        <Typography>
                                            elemesid@gmail.com
                                        </Typography>
                                    </Stack>
                                    <Stack direction="row" alignItems="center" sx={{ padding: "5px 0" }}>
                                        <MailOutlineIcon sx={{ color: primary, marginRight: "5px" }} />
                                        <Typography>
                                            elemesid@gmail.com
                                        </Typography>
                                    </Stack>
                                </Typography>
                            </Grid>
                        </Stack>
                    </CardContent>
                </Card>
            </Box>
            <Box sx={{ flexGrow: 1, display: 'flex', padding: "48px 110px 48px 110px", display: { xs: 'none', sm: 'block' } }}>
                <Typography sx={{ fontSize: "14px", lineHeight: "20px", margin: "10px 0 23px 0", color: "#757575", textTransform: "uppercase", textAlign: "center", width: "100%" }}>
                    © 2021 Elemes id. All rights reserved
                </Typography>
            </Box>
            <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
                <BottomNav />
            </Box>
        </>
    );
}

export default Info;