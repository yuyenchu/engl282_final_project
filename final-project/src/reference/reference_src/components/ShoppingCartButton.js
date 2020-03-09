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
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import FolderIcon from "@material-ui/icons/Folder";
import DeleteIcon from "@material-ui/icons/Delete";

import {Context} from '../store'

const useStyles = makeStyles(theme => ({
  floatleft: {
    float:"left"
  },
  floatright: {
    float:"right"
  }
}));

export default function ShoppingCartButton() {
  const classes = useStyles();
  const {state, dispatch} = useContext(Context)

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = (e) => {
    setOpen(true);
  };

  const handleClick = () => {
    alert("Success! Meals checked out.")
    setOpen(false);
  };

  const handleCancelClick = () => {
    alert("Reservations canceled.")
    setOpen(false);
    // dispatch({type:"CANCEL", payload: {index: index, itemIndex: itemIndex, reserve: state.restaurants[index].items[itemIndex].reserve + Number(value)}})
  };

  const handleClose = () => {
    setOpen(false);
  };

  const generateItems = () => {
    let items = []
    const restaurants = state.restaurants;
    // console.log(restaurants);
    for (let i = 0; i < restaurants.length; i++) { 
      let rest = restaurants[i];
      
      for(let j = 0; j < rest.items.length; j++) {
        let item = rest.items[j];
        
        if (item.reserve > 0) {
          items.push(
            <ListItem>
              <ListItemText
                primary={rest.title}
                // secondary={item.food}
                secondary={`Food: ${item.food}; Quantity: ${item.reserve}`}
                className={classes.floatleft}
              />
              {/* <ListItemText
                secondary={item.reserve}
                className={classes.floatright}
              /> */}
            </ListItem>
          )
        }

      }
    }

    return items;
  }

  return (
    <React.Fragment>
      <Button
          variant="contained"
          size="large"
          color="primary"
          style={{position:"absolute", right:"1%"}}
          // className={classes.margin}
          onClick={handleClickOpen}
      >
          Checkout
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Checkout Meals</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please verify that your reservations are correct:
          </DialogContentText>

          {/* I set `dense={dense}` to `dense="false"` */}
          <List dense="false">
            {generateItems()}
          </List>

        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancelClick} color="primary">
            Cancel Reservations
          </Button>
          <Button onClick={handleClick} color="primary">
            Checkout Now!
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
