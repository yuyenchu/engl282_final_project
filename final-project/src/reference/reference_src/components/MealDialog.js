import React from 'react'
import logo from '../logo.svg'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { FormGroup } from '@material-ui/core';
import { MuiPickersUtilsProvider, KeyboardTimePicker} from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'


function MealDialog(props) {
  const food = React.useRef()
  const handleFood = (e) => {
    console.log(e.target.value)
    food.current = e.target.value
  }
  const mealCount = React.useRef()
  const handleMealCount = (e) => {
    console.log(e.target.value)
    mealCount.current = e.target.value
  }

  return (
    <Dialog open={true} aria-labelledby="form-dialog-title">
    <DialogTitle id="form-dialog-title">Adding Meal</DialogTitle>
    <DialogContent>
      {/* <DialogContentText>
        To subscribe to this website, please enter your email address here. We will send updates
        occasionally.
      </DialogContentText> */}
      <FormGroup>
        <TextField
          onChange={handleFood}
          autoFocus
          margin="dense"
          id="food"
          label="food"
          fullWidth
          required
        />
        <TextField
          onChange={handleMealCount}
          margin="dense"
          id="quantity"
          label="quantity"
          type="number"
          fullWidth
          required
        />
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardTimePicker
            margin="normal"
            id="time-picker"
            label="Time picker"
            KeyboardButtonProps={{
              'aria-label': 'change time',
            }}
          />
      </MuiPickersUtilsProvider>

      </FormGroup>
    </DialogContent>
    <DialogActions>
      <Button color="primary" onClick={() => {props.setClick(false)}} >
        Cancel
      </Button>
      <Button color="primary" onClick={() => {if(food.current && mealCount.current) {
                                                props.dispatch({type:"ADD", 
                                                                payload: {id: props.id,
                                                                          url: logo,
                                                                          food: food.current,
                                                                          available: mealCount.current}});
                                                console.log(food.current+"/"+mealCount.current)
                                                props.setClick(false);}}}>
        Add
      </Button>
    </DialogActions>
  </Dialog>
  ); 
}

export default MealDialog;