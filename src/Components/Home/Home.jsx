
import NavBar from './NavBar';
import {Box, makeStyles} from '@material-ui/core'

import Banner from './Banner';
const useStyle = makeStyles({
    component:{
        padding:"10px",
        background:"#f2f2f2",
    }
})

const Home = () =>{
    const classes = useStyle();
    return(
        <div>
        <NavBar/>
        <Box className={classes.component}>
        <Banner/>
        </Box >
        </div>
        
    )
}
export default Home;