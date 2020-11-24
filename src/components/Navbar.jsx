import React from 'react';
import SearchForm from './SearchForm';
import Logo from './Logo';


export default function NavBar() {

        return(
            <header className='navbar_container'>
                <div className='navbar'>
                    <Logo/>
                    <SearchForm/>
                </div>
            </header>
        )

}
