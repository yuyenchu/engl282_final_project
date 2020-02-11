import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ButtonBase from '@material-ui/core/ButtonBase';



function ItemInfo(props) {
    const useStyles = makeStyles(theme => ({
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: theme.spacing(2),
            margin: 'auto',
            maxWidth: 500,
        },
        image: {
            width: 128,
            height: 128,
        },
        img: {
            margin: 'auto',
            display: 'block',
        },
        text: {
            textAlign: 'center',
        }
    }));

    return (
        <div className={useStyles.root}>
            <Paper className={useStyles.paper}>
                <Grid container direction="column" spacing={2} align="center">
                    <Grid item>
                        <ButtonBase className={useStyles.image}     >
                            <img style={{height: "128px", maxWidth: "128px"}} className={useStyles.img} alt="pic" src={props.img} />
                        </ButtonBase>
                    </Grid>
                    
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <Typography>
                                    {props.name}
                                </Typography>
                                <Typography>
                                    Meal Size: {props.mealNum}
                                </Typography>
                                <Typography color="textSecondary">
                                    {/* ID: {props.id} */}
                                </Typography>
                            </Grid>
                            <Grid item style={{ backgroundColor:props.reserve>0?"red":"green"}}>
                                <Typography >
                                    {props.reserve>0?props.reserve+" Reserved":"Pending"}
                                </Typography>
                            </Grid>
                        </Grid>
                </Grid>
            </Paper>
        </div>
    )
}

export default ItemInfo