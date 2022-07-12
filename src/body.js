import { Card, CardContent, CardHeader, CardMedia, Chip, Button } from "@mui/material";
import { useEffect } from "react";


function CatalogBody(props){

    function checkQuery(product){
        return (
            product.name.includes(props.searchQuery)
            || product.price.toString().includes(props.searchQuery)
            || product.description.includes(props.searchQuery)
            || (product.discount * 100).toString().includes(props.searchQuery)
            || product.amount.toString().includes(props.searchQuery)
            || (product.price - (product.discount * product.price)).toString().includes(props.searchQuery)
        )
    }

    const addToCart = (product) => {
        props.addToCart(product);
    }

    return(
        props.content.map((product)=>{
            if(checkQuery(product)){

                let tag, disc;
                if(product.isNew){
                    tag = <Chip label='NEW' color="default" sx={{borderRadius:0}}/>
                }
                else {
                    tag = <></>
                }
    
                if(product.discount){
                    disc = <Chip label={product.discount * 100 + '%'} color='error' sx={{borderRadius:0}}/>
                }
                else {
                    disc = <></>
                }
    
                return(
                    <Card variant="outlined" sx={{display:"flex", flexFlow:['row','wrap']}} key={product.name}>
                        <CardHeader title={product.name} sx={{width:"100%"}}>
                        </CardHeader>
                        <CardMedia
                        component={'img'}
                        height='300'
                        sx={{maxWidth:300, padding:5}}
                        image={product.image}
                        />
                        <CardContent>
                            <div>
                                <div>
                                {tag}
                                {disc}
                                </div>
                                <span style={{margin:5, fontWeight:600}}>
                                    {Math.round(product.price - (product.price * product.discount))} руб.
                                </span>
                                <span style={{margin:5, textDecorationLine:'line-through', opacity:0.5}}>
                                    {product.price} руб.
                                </span>
                            </div>
                            <p style={{fontSize:16}}>
                                {product.description}
                            </p>
                            <span style={{fontWeight:600}}>
                                Количество: {product.amount}
                            </span>
                            <Button color={'inherit'}
                            variant={'contained'}
                            sx={{display:'block', marginTop: '15px'}}
                            onClick={()=>addToCart(product)}                            
                            >Добавить в корзину</Button>
                        </CardContent>
                    </Card>
                )
            }
            else {
                return (
                    <>
                    </>
                )
            }

           
        })
    )
}

export default CatalogBody;