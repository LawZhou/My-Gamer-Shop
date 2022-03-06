import {Card, CardActionArea, CardContent, CardMedia, Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import {makeStyles} from "@mui/styles";
import {Link} from "react-router-dom";
import {useLinkStyles} from "../styles/styles";
import {faultImg} from "./helper";

/*
    Page showing all games available
 */
const useShowcaseStyles = makeStyles( () => ({
    container: {
        position: 'absolute',
        top: "20vh",
        left: '10vw',
        maxWidth: '80vw',
    },
}))

function ProductShowCase({products}) {
    return (
        <ProductContainer products={products}/>
    )
}
function ProductContainer({products}){
    const classes = useShowcaseStyles();
    return (
        <Grid container
              className={classes.container}
              spacing={3}>
            {
                Object.entries(products).map(([uuid, product]) => (
                    //Use the first image as the cover
                    <ProductCard
                        title={product.title}
                        cover={product.imagesLst? product.imagesLst[0]: faultImg }
                        uuid={uuid}
                        key={uuid}/>
                ))
            }
        </Grid>
    );
}

function ProductCard({title, cover, uuid}){
    const linkClass = useLinkStyles();
    return (
        <Grid item sm={3}>
            <Card sx={{ boxShadow: 3 , width: "19vw", height: "30vh"}}>
                <CardActionArea>
                    <Link to={`/products/${uuid}`}
                          style={{color: "black"}}
                          className={linkClass.link}>
                        <CardMedia
                            component="img"
                            image={cover}
                            alt="game cover"
                            sx={{ width: "19vw", height: "20vh"}}

                        />
                        <CardContent>
                            <Typography  gutterBottom variant="h6" component="div">
                                {title}
                            </Typography>
                        </CardContent>
                    </Link>
                </CardActionArea>
            </Card>
        </Grid>

        )

}
export default ProductShowCase;