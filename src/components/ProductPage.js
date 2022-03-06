
import {useEffect, useState} from "react";
import {Grid} from "@mui/material";
import ImageContainer from "./ImageContainer";
import MainImage from "./MainImage";
import ProductInfo from "./ProductInfo";
import {useParams} from "react-router-dom";

/*
    Page showing the particular product.
 */
function ProductPage({products}){
    // default selected image
    const [selectedImg, setSelectedImg] = useState(0);
    // get the uuid from the url
    const { uuid } = useParams()
    // info of the game
    const [productInfo, ] = useState({
        title: products[uuid].title,
        description: products[uuid].description,
        price: products[uuid].price,

    })
    // images of the game
    const [productImgs, ] = useState(products[uuid].imagesLst)
    // game ratings
    const [rateInfo, setRateInfo] = useState({
        gpVal: products[uuid].gpVal,
        gpValNum: products[uuid].gpValNum,
        graphicsVal: products[uuid].graphicsVal,
        graphicsValNum: products[uuid].graphicsValNum,
        gameplayRate: handleGPRate,
        graphicsRate: handleGraphicsRate,

    })

    function handleGPRate(newValue){
        //update the gameplay rating once the user rates
        setRateInfo(rateInfo => ({
            ...rateInfo,
            gpVal: rateInfo.gpVal + newValue,
            gpValNum: rateInfo.gpValNum + 1,
        }))

    }

    function handleGraphicsRate(newValue){
        //update the game graphics rating once the user rates
        setRateInfo(rateInfo => ({
            ...rateInfo,
            graphicsVal: rateInfo.graphicsVal + newValue,
            graphicsValNum: rateInfo.graphicsValNum + 1,
        }))
    }

    function saveRatings(){
        // Save the new rating and should write the updated info to the database.
        const newProduct = {
            uuid: uuid,
            imagesLst: products[uuid].imagesLst,
            ...productInfo,
            ...rateInfo,
        }

        console.log("updated product information: \n", newProduct)
        //    code to write to the server to save changes
        //     ...
    }

    // Use useEffect to save updated ratings when the page renders (rate updated).
    useEffect(() => saveRatings())

    return (
        <div>
            <Grid container m={1} mt={10}
                  justifyContent="center" >
                <Grid item sm={1}>
                    <ImageContainer images={productImgs}
                                    onSelect={setSelectedImg}
                                    selectedImg={selectedImg}
                    />
                </Grid>
                <Grid item sm={5}>
                    <MainImage imgSrc={productImgs[selectedImg]}/>
                </Grid>
                <Grid item sm={6}>
                    <ProductInfo rateInfo={rateInfo} {...productInfo}/>
                </Grid>
            </Grid>
        </div>
    )
}


export default ProductPage