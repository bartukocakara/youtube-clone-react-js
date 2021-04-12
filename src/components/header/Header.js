import React from 'react'
import "./_header.scss";

import { FaBars } from 'react-icons/fa';
import { AiOutlineSearch } from 'react-icons/ai';
import { MdNotifications, MdApps } from 'react-icons/md';
import image from '../../images/youtube.png';
import avatar from '../../images/avatar.png';

const Header = () => {
    return (
        <div className="border border-dark header">
            
            <FaBars className="header_menu" size={26} />

            <img 
            className="header_logo" 
            src={image}
            width={26}
            alt="avatar"/>

            <form>
                <input type="text" placeholder="Search" />
                <button type="submit" className="">

                    <AiOutlineSearch size={22} />

                </button>
            </form>

            <div className="header_icons">
                <MdNotifications size={28} />
                <MdApps size={28} />
                <img width={35}
                src={avatar}
                alt="avatar" />
            </div>
        </div>
    )
}

export default Header
