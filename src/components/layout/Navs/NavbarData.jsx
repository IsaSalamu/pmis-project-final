import React from 'react';
import * as FaIcons  from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai'
import * as GiaIcons from 'react-icons/gi'
import * as IoIcons from 'react-icons/io'

export const NavbarData=[
    {
        title:'Dashboard',
        path:'/dashboard',
        icon: <IoIcons.IoMdAnalytics/>,
        cName:'nav-text'
    },
    {
        title:'Hatchery Information',
        path:'/register',
        icon: <GiaIcons.GiIncubator/>,
        cName:'nav-text-cc'
    },
    
]