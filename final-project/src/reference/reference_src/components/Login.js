import React, {useState, useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
// import Link from '@material-ui/core/Link';
import {Context} from '../store';
import {Link} from "react-router-dom";

const useStyles = makeStyles(theme => ({
    header: {
      backgroundColor: '#4DD660',
      padding: '20px',
      textAlign: 'center',
      fontSize: '35px',
      color: 'black'
    },
    button: {
        margin: theme.spacing(1),
    },
}));



function Login(){
    const {state, dispatch} = useContext(Context)
    const classes = useStyles();
    const handleChange = (e) => {
        console.log(e.target.value)
        setLink(getUser(e.target.value));
    }
    const [link, setLink] = useState("/login/")

    function getUser(user){
    
        let value = user.slice(0,4);
        let num = user.slice(4);
        let split = value.toUpperCase();
        console.log(value);
        console.log("num: " + num);
        dispatch({type:"RestIDUpdate", payload: {id:num } });
        console.log(split);
        // images[index].reserve = images[index].reserve + Number(value);
        if(split==="REST" && num <= state.restaurants.length && num>0) {
            return "/restaurant/";
        } else if(split==="SHEL") {
            return "/shelter/";
        } else {
            return "/login/";
        }
    }

    return (
        <div>
            <header className={classes.header}>
                <h2>Feed Me</h2>
            </header>

            <div id = 'wrapper'>
                <Container fixed align='center'> 
                    <TextField
                        onChange={handleChange}
                        autoFocus
                        margin="dense"
                        id="user"
                        label="Username"
                    />
                    {/* <Button variant="contained" onClick={()=>console.log(getUser(user.current)==="/restaurant/")} className={classes.button}>
                        check
                    </Button> */}
                    
                    <Button variant="contained" component={Link} to={link} className={classes.button} >
                        Login
                    </Button>
                    
                    
                </Container>
            </div>
        </div>
    );
}

export default Login;