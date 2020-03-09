import React, {useState, useContext} from 'react'
import MealDialog from './MealDialog'
import {Context} from '../store'
import { makeStyles } from '@material-ui/core/styles';
import ItemInfo from './ItemInfo'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";

const useStyles = makeStyles(theme => ({
  header: {
    backgroundColor: '#4DD660',
    padding: '20px',
    textAlign: 'center',
    fontSize: '35px',
    color: 'black'
  },
  title: {
    backgroundColor: '#666',
    padding: '20px',
    textAlign: 'left',
    fontSize: '20px',
    color: 'white'
  },
  content: {
    margin: theme.spacing(3),
    
    backgroundColor: '#cfe8fc', 
    height: 'auto'
  },
  fab: {
    color:'white',
    ariaLabel:'add',
    right:'10%', 
    position:'absolute'
  },
  button: {
    left:'10%', 
    position:'absolute'
  },
}));

function FormContent(state) {
  const items = []

  for (let i = 0; i < state.items.length; i++) {
    let item = state.items[i];
    items.push(
      <Grid item xs={4} key={i}>
        <ItemInfo  name = {item.food} id = {i} mealNum = {item.available} img = {item.url} reserve = {item.reserve}/>  
      </Grid>)
  }

  return (
    <React.Fragment>
      {items}
    </React.Fragment>
  );
}

function Restaurant() {
  const classes = useStyles();
  const [clicked, setClick] = useState(false)
  const {state, dispatch}  = useContext(Context)
  const getRestaurant =  ()=>{for(let i=0;i<state.restaurants.length;i++) {

                                let item = state.restaurants[i];
                                console.log(item.id==state.restaurantID);
                                if(item.id == state.restaurantID) {
                                  console.log(item.title+item.items.length);
                                  return item;
                                }
                              }}

  const myRestaurant = getRestaurant();
  console.log(state.restaurants);

  return (
    <div>
      <header className={classes.header}>
        <h2>Feed Me</h2>
      </header>
      <div id = 'wrapper'>
        <Container fixed> 
          <p className={classes.title}>Status</p>
          <Typography component="div"  className={classes.content}>
            <Grid container spacing={3}>
              {FormContent(myRestaurant)}
            </Grid>
          </Typography>
          <Fab className={classes.fab} color="primary" onClick={() => {setClick(true);}}>
            <AddIcon />
          </Fab>
          <Button component={Link} variant='contained' className={classes.button} to="/">Go to main</Button>
          {clicked?<MealDialog id={state.restaurantID} dispatch = {dispatch} setClick={setClick} />:<div/>}
        </Container>
        {/* <Button component={Link} to="/">Go to main</Button> */}
      </div>
    </div>
    
  )
}

export default Restaurant