import React from 'react';
import * as FaIcons  from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai'
import * as GiaIcons from 'react-icons/gi'
import * as IoIcons from 'react-icons/io'

export const HatcheryData=[
   
    {
        title:'Register Client',
        path:'/register',
        icon: <GiaIcons.GiArchiveRegister/>,
        cName:'nav-text'
    },
    {
        title:'Receiving Stage',
        path:'/receiving',
        icon: <FaIcons.FaHands/>,
        cName:'nav-text'
    },
    {
        title:'Candling Stage',
        path:'/candling',
        icon: <GiaIcons.GiCandleHolder/>,
        cName:'nav-text'
    },
    {
        title:'Collecting',
        path:'/collecting',
        icon: <FaIcons.FaArrowAltCircleLeft/>,
        cName:'nav-text'
    }
]