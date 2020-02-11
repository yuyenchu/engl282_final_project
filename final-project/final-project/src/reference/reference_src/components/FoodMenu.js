import React, {useContext} from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import {Context} from '../store'

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    minWidth: 300,
    width: "100%"
  },
  image: {
    position: "relative",
    height: 200,
    [theme.breakpoints.down("xs")]: {
      width: "100% !important", // Overrides inline-style
      height: 100
    },
    "&:hover, &$focusVisible": {
      zIndex: 1,
      "& $imageBackdrop": {
        opacity: 0.15
      },
      "& $imageMarked": {
        opacity: 0
      },
      "& $imageTitle": {
        border: "4px solid currentColor"
      }
    }
  },
  focusVisible: {},
  imageButton: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.common.white
  },
  imageSrc: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundPosition: "center 40%"
  },
  imageBackdrop: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create("opacity")
  },
  imageTitle: {
    position: "relative",
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) +
      6}px`
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity")
  }
}));

export default function FoodMenu() {

  const {state, dispatch} = useContext(Context)

  const classes = useStyles();

  // const [indexImages, setIndexImages]
  
  const [index, setIndex] = React.useState(null);
  const [itemIndex, setItemIndex] = React.useState(null);

  const [open, setOpen] = React.useState(false);

  const [value, setValue] = React.useState(0);

  const onChangeTextField = (e) => {
    // console.log(e.currentTarget.value);
    setValue(e.currentTarget.value);
  }

  const handleClickOpen = (e) => {
    setOpen(true);
    // console.log(e.currentTarget.name)
    setIndex(e.currentTarget.name);
    setItemIndex(e.currentTarget.value);
  };

  const handleClick = () => {
    setOpen(false);
    // console.log(images[index].available);
    // console.log(images[index].reserve);
    dispatch({type:"RESERVE", payload: {index: index, itemIndex: itemIndex, reserve: state.restaurants[index].items[itemIndex].reserve + Number(value)}})
    // images[index].reserve = images[index].reserve + Number(value);
    setValue(0);
    // console.log(images[index].available);
    // console.log(images[index].reserve);
  };

  const handleClose = () => {
    setOpen(false);
    // console.log(images[index].available);
    // console.log(images[index].reserve);
    // images[index].reserve = images[index].reserve + Number(value);
    setValue(0);
    // console.log(images[index].available);
    // console.log(images[index].reserve);
  };

  const generateItems = () => {
    let items = []
    const restaurants = state.restaurants;
    // console.log(restaurants);
    for (let i = 0 ; i < restaurants.length; i++) { 
      let rest = restaurants[i];
      
      for(let j = 0; j < rest.items.length; j++) {
        let item = rest.items[j];
        
        items.push(
          <Button
            focusRipple
            name={i}
            value={j}
            key={i+j}
            className={classes.image}
            focusVisibleClassName={classes.focusVisible}
            style={{
              width: "100%"
            }}
            onClick={handleClickOpen}
          > 
            <span
              className={classes.imageSrc}
              style={{
                backgroundImage: `url(${item.url})`
              }}
            />
            <span className={classes.imageBackdrop} />
            <span className={classes.imageButton}>
              <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                className={classes.imageTitle}
              >
                {rest.title}
                <br />
                {item.food}
                <span className={classes.imageMarked} />
              </Typography>
            </span>
          </Button>
        )
      }
    }
    return items;
  }

  return (
    <React.Fragment>
    <div className={classes.root}>
       {generateItems()}
    </div>
    <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Reserve Meals</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter the number of meals you wish to reserve and click 'reserve'.
            {/* {index ? "There are " + Number(images[index].available) - Number(images[index].reserve) + " meals still available." : null} */}
            {/* There are {index ? images[index].available - images[index].reserve+ " meals still available." : null} */}
            There are {index ? state.restaurants[index].items[itemIndex].available - state.restaurants[index].items[itemIndex].reserve+ " meals still available." : null}
            {index ? "You have reserved " + Number(state.restaurants[index].items[itemIndex].reserve) + " of these meals." : null}
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Number of Meals"
            fullWidth
            defaultValue="0"
            type="number"
            inputProps={{ min: "0", max: index ? state.restaurants[index].items[itemIndex].available - state.restaurants[index].items[itemIndex].reserve : null}}
            onChange={onChangeTextField}
            // placeholder={index ? images[index].available - images[index].reserve + " meals still available": null}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClick} color="primary">
            Reserve
          </Button>
        </DialogActions>
      </Dialog>
      </React.Fragment>
  );
}
