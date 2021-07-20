import { useState } from "react";
import { Dialog, DialogContent, makeStyles, Box, Typography, TextField, Button } from "@material-ui/core";

//import {userSignup} from 'Server/controller/user-controller';
import { authentiactionSignup } from "../../service/api";

const useStyle = makeStyles({
    component: {
        height: '70vh',
        width: '90vh'

    },
    image: {
        backgroundImage: `url(${'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png'})`,

        height: '70vh',
        backgroundRepeat: 'no-repeat',
        background: '#2874f0',
        width: '40%',
        backgroundPosition: 'center  85%',
        padding: '45px 35px',
        '&  *': {
            color: '#ffffff',
            fontWeight: 600
        }
    },
    login: {
        padding: '25px 35px',
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        //Child Element Accesss:
        '& > *': {
            marginTop: 20

        }
    },
    text: {
        color: '#878787',
        fontSize: 12
    },
    loginBtn: {
        textTransform: 'none',

        background: '#FB641B',

        color: '#ffffff',
        borderRadius: 2,
        height: 48

    },
    requestBtn: {
        textTransform: 'none',

        background: '#ffffff',

        color: '#2874f0',
        borderRadius: 2,
        height: 48

    },
    createText: {
        textAlign: 'center',
        marginTop: '20',
        fontSize: 14,
        color: '#2874f0',
        fontWeight: 600,
        cursor: 'pointer'
    }
})


const initialValue = {
    login: {
        view: 'login',
        heading: 'login',
        subHeading: 'Get access to Your Orders,Wishlist and Recommendation'
    },
    signup: {
        view: 'signup',
        heading: 'Look like you are New Here',
        subHeading: 'Signup with Your Mobile'
    }
}
const signupInitialValue = {
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    phone: '',

}


const Login = ({ open, setOpen, setAccount }) => {
    const classes = useStyle();
    const [account, toggleAccount] = useState(initialValue.login);
    const [signup, setSignup] = useState(signupInitialValue)
    const handleClose = () => {
        setOpen(false);
        toggleAccount(initialValue.login)
    }

    const toggleUserAccount = () => {
        toggleAccount(initialValue.signup)
    }

    const signupUser = async () => {
        let response = await authentiactionSignup(signup);
        if (!response) return;
        handleClose();
        setAccount(signup.username);
    }

    const onInputChange = (e) => {
        setSignup({ ...signup, [e.target.name]: e.target.value });
        console.log(signup);
    }

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogContent className={classes.component}>
                <Box style={{ display: 'flex' }}>
                    <Box className={classes.image}>
                        <Typography variant="h5">{account.heading}</Typography>
                        <Typography style={{ marginTop: '25px' }}>{account.subHeading}</Typography>

                    </Box>

                    {
                        account.view === 'login' ?

                            <Box className={classes.login}>
                                <TextField name="username" label='Enter Email/Enter Mobile' />
                                <TextField name="password" label='Enter Password' />
                                <Typography className={classes.text}> By continuing you agree to FlipCart Term of Use and Privacy Policy</Typography>
                                <Button variant="contained" className={classes.loginBtn}>Login</Button>
                                <Typography className={classes.text} style={{ textAlign: 'center' }}>OR</Typography>
                                <Button variant="contained" className={classes.requestBtn}>Request OTP</Button>
                                <Typography onClick={() => toggleUserAccount()} className={classes.createText}>How to Flipcart??create an Account</Typography>


                            </Box> :
                            <Box className={classes.login}>
                                <TextField onChange={(e) => onInputChange(e)} name="firstname" label='Enter FirstName' />
                                <TextField onChange={(e) => onInputChange(e)} name="lastname" label='Enter Lastname' />
                                <TextField onChange={(e) => onInputChange(e)} name="username" label='Enter User Name' />
                                <TextField onChange={(e) => onInputChange(e)} name="email" label='Enter email' />
                                <TextField onChange={(e) => onInputChange(e)} name="password" label='Enter password' />
                                <TextField onChange={(e) => onInputChange(e)} name="phone" label='Enter Phone' />


                                <Button variant="contained" onClick={() => signupUser()} className={classes.loginBtn}>Signup</Button>


                            </Box>

                    }
                </Box>

            </DialogContent>
        </Dialog>
    )
}
export default Login;