import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useEffect, useState } from "react";

function CatalogHead(props){

    const [sortType, setSortType] = useState('');

    useEffect(() => {
        props.change(sortType);

        return()=>{
            props.change('');
        }
    },[sortType])
    

    return(
        <ToggleButtonGroup sx={{height:30}} fullWidth exclusive value={sortType} >
        <ToggleButton value='name' onClick={()=>setSortType('name')}>
          Name
        </ToggleButton>
        <ToggleButton value='price' onClick={()=>setSortType('price')}>
          Price
        </ToggleButton>
        <ToggleButton value='amount' onClick={()=>setSortType('amount')}>
          Amount
        </ToggleButton>
        <ToggleButton value='new' onClick={()=>setSortType('new')}>
          New
        </ToggleButton>
        <ToggleButton value='discount' onClick={()=>setSortType('discount')}>
          Discount
        </ToggleButton>
      </ToggleButtonGroup>
    )
}

export default CatalogHead;