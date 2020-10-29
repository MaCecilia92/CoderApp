import React from 'react';

import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

export default function CartIcon() {
    return (
        <div>
            <button className="btn btn-outline-success">
            <ShoppingCartOutlinedIcon  style={{ fontSize: 30 }}/>
            </button>
        </div>
    )
}
