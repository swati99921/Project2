import { Box, makeStyles } from '@material-ui/core'
import NavBar from './NavBar';


import Banner from './Banner';
import Slide from './Silde';
import MidSection from './MidSection';
const useStyle = makeStyles({
    component: {
        padding: "10px",
        background: "#f2f2f2",
    },
    rightwrapper: {
        background: '#ffffff',
        padding: 5,
        margin: '12px  0 0 10px',
        width: '17%',

    }
})

const Home = () => {
    const classes = useStyle();
    const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';

    return (
        <div>
            <NavBar />
            <Box className={classes.component}>
                <Banner />
                <Box style={{ display: 'flex' }}>
                    <Box style={{ width: '83%' }}>
                        <Slide
                            timer={true}
                            title="Deal of the day"

                        />
                    </Box>
                    <Box className={classes.rightwrapper}>
                        <img src={adURL} style={{ width: 230, height: 'auto' }} />

                    </Box>

                </Box>
                <MidSection />

                <Slide
                    timer={false}
                    title="Discount for you"
                />
                <Slide
                    timer={false}
                    title="suggested item"
                />
                <Slide
                    timer={false}
                    title="Top selection "
                />
                <Slide
                    timer={false}
                    title="Recommented items"
                />
                <Slide
                    timer={false}
                    title=" Best sellers"
                />
            </Box >

        </div>

    )
}
export default Home;
