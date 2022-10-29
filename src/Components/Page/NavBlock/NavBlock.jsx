/*Компонент с навигацией по новостям*/
import React from "react";
import NavNews from './NavNews';

const NavBlock = () => {
    return (
        <div className="row">
                <div className="col-2"></div>
                <div className="col-7">
                    <NavNews />
                </div>
                <div className="col-3"></div>
            </div>
    )
}

export default NavBlock;