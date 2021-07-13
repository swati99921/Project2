
import { ImageURL } from "../../Constant/Data";
import { Box, makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
    wrapper:{
        display:'flex'
    }

});


const MidSection = () =>{
    const classes = useStyle();
    return(
        <Box className={classes.wrapper}>
            {
            ImageURL.map(image => (
                <img src ={image} style={{width:'33%'}}/>
            ))

            }
        </Box>

    )
}
export default MidSection;