
import { AppBar, Toolbar, makeStyles, Typography, Box , withStyles} from '@material-ui/core';
import Searchbar from './Searchbar/Searchbar';
import HeaderButtons from './HeaderButtons';
import { Link } from 'react-router-dom';

const useStyle = makeStyles({
    Header: {

        background: "#2874f0",
        height: 55,
    },
    logo: {
        width: 75,
    },
    subURL: {
        width: 10,
        marginLeft: 5,
        height: 10,
    },
    container: {
        display: "flex",
    },
    component: {
        marginLeft: '12%',
        lineHeight: 0,
        textDecoration:'none',
        color:'#fff'
    },
    subheading: {
        fontSize: 10,
        fontStyle: "italic"
    }
})
const ToolBar = withStyles({
    root:{
        minHeight:55,
    }
})(Toolbar);
const Header = () => {
    const classes = useStyle();
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
    return (
        <AppBar className={classes.Header}>
            <ToolBar>
                <Link to="/"  className={classes.component}>
                    <img src={logoURL} className={classes.logo} />
                    <Box className={classes.container}>
                        <Typography className={classes.subheading}>Explore Plus</Typography>
                        <img src={subURL} className={classes.subURL} />
                    </Box>
                </Link>
                <Searchbar />
                <HeaderButtons/>
            </ToolBar>
        </AppBar>


    )
}
export default Header;