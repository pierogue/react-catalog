import React from 'react';

import { AppBar, Button, Slide, Dialog, DialogTitle, DialogContent, Badge, DialogActions, Card, CardMedia, CardContent } from '@mui/material';
import { ShoppingBasket } from '@mui/icons-material';
import { useEffect } from 'react';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function Header(props) {

    const [open, setOpen] = React.useState(false);
    const [cartCount, setCartCount] = React.useState(0);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        setCartCount(props.cart.length);
        return () => {

        }
    })


    const cartElems = props.cart.map((product) => {
        return (<Card sx={{ display: 'flex', flexFlow: ['nowrap', 'column'], alignItems: 'center', width: '500px', margin:'5px', height:'120px'}} key={product.name}>
            <span sx={{ width: '100%' }}>
                {product.name}
            </span>

            <CardContent sx={{ display: 'flex', flexFlow: ['row', 'nowrap'], alignItems: 'center' }}>
                <CardMedia
                    component={'img'}
                    height='60'
                    sx={{ maxWidth: 60, padding: '10px' }}
                    image={product.image}
                />
                <div>
                    <span style={{ margin: 5, fontWeight: 600 }}>
                        {Math.round(product.price - (product.price * product.discount))} руб.
                    </span>
                    <span style={{ margin: 5, textDecorationLine: 'line-through', opacity: 0.5 }}>
                        {product.price} руб.
                    </span>
                </div>
            </CardContent>
        </Card>)
    })

    return (<AppBar position='static' color='default' sx={{ height: 50, boxShadow: 'none' }}>
        <Button sx={{ width: 100, height: '100%' }} onClick={handleClickOpen}>
            <Badge badgeContent={cartCount} color='primary'>
                <ShoppingBasket fontSize={'medium'} color={'action'}>
                </ShoppingBasket>
            </Badge>
        </Button>
        <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
            sx={{ width: '500px' }}
        >
            <DialogTitle>{"Подтвердите заказ"}</DialogTitle>
            <DialogContent sx={{ display: 'flex', flexFlow: ['row', 'wrap'] }}>
                {cartElems}
            </DialogContent>
            <DialogActions> 
                <Button onClick={handleClose}>Купить</Button>
                
            </DialogActions>
        </Dialog>
    </AppBar>)
}

export default Header;