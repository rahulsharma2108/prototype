import './navbar.scss'
import profile from '../assets/icons/user.png';
import fav from '../assets/icons/favorite.png'
import discover from '../assets/icons/shining.png'
import { useState } from 'react';
export const NavBar = ({toggleNav})=>{
    const [activeItem,setActiveItem] = useState('discover')

    const onNavClick = (navName)=>{
        setActiveItem(navName);
        toggleNav(navName,activeItem)
    }
    
    return <nav className='navbar'>
        <ul>
            <li className={activeItem === 'discover' ? 'active':''} onClick={()=>onNavClick('discover')}>
                <img src={discover}/>
                Discover
            </li>
            <li className={activeItem === 'fav' ? 'active':''} onClick={()=>onNavClick('fav')}>
            <img src={fav} />
                My Favorites
            </li>
            <li className={activeItem === 'profile' ? 'active':''} onClick={()=>onNavClick('profile')}>
            <img src={profile} />
                Profile
            </li>
        </ul>
    </nav>
}