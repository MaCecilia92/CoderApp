import React from 'react';
import {NavLink} from 'react-router-dom';

import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

export default function CartIcon() {
    return (
        <div>
            <NavLink to='/Cart'>
            <button className="btn btn-outline-success" >
            <ShoppingCartOutlinedIcon  style={{ fontSize: 30 }}/>
            </button>
            </NavLink>
        </div>
    )
}
