import React from 'react'
import { ReactComponent as HomeIcon } from "../asset/icon/footer/home.svg"
import { ReactComponent as CartIcon } from "../asset/icon/footer/shopping-cart.svg"
import { ReactComponent as LikeIcon } from "../asset/icon/footer/heart.svg"
import { ReactComponent as UserIcon } from "../asset/icon/footer/user.svg"




function Nav() {
    return (
       
            <div className="nav">
                
                <HomeIcon className="nav__icon"/>
                <CartIcon className="nav__icon"/>
                <LikeIcon className="nav__icon"/>
                <UserIcon className="nav__icon"/>
                
            </div>
        
    )
}

export default Nav
