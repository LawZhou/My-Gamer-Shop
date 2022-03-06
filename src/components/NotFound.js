import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {faultImg} from "./helper";

/*
  Page for undefined link
 */
export default function NotFound(){
    return (
        <Box m={4}>
            <Typography variant="h3" component="div" gutterBottom>
                Page not found!
            </Typography>
            <img src={faultImg} width="50%" alt="fault img"/>
        </Box>
    )
}