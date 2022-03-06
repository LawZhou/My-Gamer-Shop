import React from "react";
import Grid from '@mui/material/Grid';
import {makeStyles} from "@mui/styles";

/*
 Image side list on the product page
 */
const useImgContainerStyles = makeStyles(() => ({
    root: {
        height: "10vh",
        width: "9vw",
        // gives the selected image black border
        border: prop => prop.idx === prop.selectedImg? "solid 0.5vh black": "solid 0.5vh #eee",
        cursor: "pointer",
    },
}));

export default function ImageContainer({ images=[], onSelect, selectedImg}) {
    const classes = useImgContainerStyles;
    return (
        <Grid container direction="column">
            {
                images.map((image, idx) => (
                <img src={image}
                     alt={"product_img"}
                     className={classes({idx, selectedImg}).root}
                     onClick={() => onSelect(idx)}
                     key = {idx}
                />
            ))}
        </Grid>
    )
}