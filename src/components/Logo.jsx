import React from 'react';
import LogoImg from'../assets/logo_ml.png'

const Logo = () => {
        return(
                <div>
                    <a href="/">
                        <img 
                            alt="logo"
                            className="nav-logo flex-item"
                            src={LogoImg}
                        />
                    </a>
                </div>
                )
}

export default Logo;
