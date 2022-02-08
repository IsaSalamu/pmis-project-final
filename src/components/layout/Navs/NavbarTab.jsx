import React, {useState} from 'react';
import * as FaIcons  from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai'
import {Link} from "react-router-dom"
import {NavbarData} from './NavbarData'
import { HatcheryData } from './HatcheryData';
import { PoultryData } from './PoultryData';
import { PoultryResourcesData } from './PoultryResource';
import './Navbar.css'
function NavbarTab() {
    // const [sidebar, setSideBar] = useState(false);

    // const showSideBar = ()=> setSideBar(!sidebar)
  return<>
   
  <nav className='nav-menu bg_color_s'>
      <ul className="nav-menu-items">
          
          {
              NavbarData.map((item, key)=>{
                  return(
                      <li key={key} className={item.cName}>
                          {
                              item.title==="Dashboard"?<Link to={item.path}>
                            {item.icon}
                            <span>{item.title}</span>
                        </Link>: <>
                            {
                                item.title==="Hatchery Information"?<Link to={item.path}>
                            {item.icon}
                            <span>{item.title}</span>
                        </Link>: ''
                            }
                        </>
                          }
                        
                      </li>
                  )
              })
          }
            
             <ul className="nav-menu-items" style={{top:0}}>
                  {
                      HatcheryData.map((item, key)=>{
                        return(
                            <li key={key} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })
                  }
              </ul>
        {
            PoultryData.map((item, key)=>{
                return(
                    <li key={key} className={item.cName}>
                    <Link to={item.path}>
                        {item.icon}
                        <span>{item.title}</span>
                    </Link>
                </li>
                )
            })
        }

        <ul className="nav-menu-items" style={{top:0}}>
                        {
                            PoultryResourcesData.map((item, key)=>{
                                return(
                                    <li key={key} className={item.cName}>
                                        <Link to={item.path}>
                                            {item.icon}
                                            <span>{item.title}</span>
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
      </ul>
  </nav>
  </>;
}

export default NavbarTab;
