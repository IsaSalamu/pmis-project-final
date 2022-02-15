import React from 'react';
import * as FaIcons  from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai'
import * as GiaIcons from 'react-icons/gi'
import * as IoIcons from 'react-icons/io'
import {FaSyringe } from "react-icons/fa"
import { GiChicken } from "react-icons/gi";
import { GiFruitBowl } from "react-icons/gi";


export const PoultryResourcesData=[
        {
        title:'Batch Details',
        path:'/batch',
        icon: <GiChicken/>,
        cName:'nav-text'
        },
        {
        title:'Feed',
        path:'/feed',
        icon: <GiFruitBowl/>,
        cName:'nav-text'
        },
        {
        title:'Vaccination',
        path:'/vaccination',
        icon: <FaSyringe/>,
        cName:'nav-text'
        }
]