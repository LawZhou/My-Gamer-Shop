import React from "react";
import Grid from '@mui/material/Grid';
import Typography from "@mui/material/Typography";
import {Button, Divider} from "@mui/material";
import Box from "@mui/material/Box";
import StarRatings from "./StarRatings";

/*
  Product info on the product page
 */

function CustomerRating({gpVal, gpValNum,
                            graphicsVal, graphicsValNum,
                            gameplayRate, graphicsRate}) {
    // compute the average rating for game play and graphics
    return (
        <Box>
            <Typography variant="h6">Gameplay</Typography>
            <StarRatings numFilled={gpVal/gpValNum}
                         updateRating={gameplayRate}
            />
            <Typography variant="h6">Game graphics</Typography>
            <StarRatings numFilled={graphicsVal/graphicsValNum}
                         updateRating={graphicsRate}
            />
        </Box>
    );
}

export default function ProductInfo({ rateInfo, title, description, price }) {
    //show game title, description, price, and ratings. Note the button is not functional.
    return (
        <Grid container direction="column" style={{width: "50vw", height: '50vh'}}>
            <Typography variant="h4">{title}</Typography>
            <Divider/>
            <Box m={1}>
               <Typography m={1} variant="subtitle1">{description}</Typography>
               <Typography m={1} variant="h5">${price}</Typography>
            </Box>
            <CustomerRating {...rateInfo}/>
            <Button variant="contained" color="primary"
                    style={{width: "20%", margin: "auto"}}>
                Purchase
            </Button>
        </Grid>
    )
}