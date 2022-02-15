import React, { useEffect, useState } from 'react'
import Api from './apiController'
import { useNavigate } from "react-router-dom"
export default function Clients() {
    const [tei, teiFunction] = useState([])
    const navigate = useNavigate()

    useEffect(()=>{
        Api.getTheTrackedEI().then(t=>{
            // console.log(t);
            teiFunction(t.rows)
        })
    },[tei])
    // const getTEI=()=>{
    //     Api.getTheTrackedEI().then(tei=>{
            
    //         teiFunction(tei.rows)
    //     })
    // }

    const goToReceivingClass = (e)=>{
        e.preventDefault()
        let v = e.target.id
        localStorage.setItem("teiId", JSON.stringify(v))
        localStorage.setItem("orgUitId", JSON.stringify(tei[0][3]))
        navigate("/receive")
        
        
        
    }
  return (
    <div className='m-4'>
    
    <div className='row'>
                 <div className='col-md-2'></div>
                 <div className='col-md-8'>
                 <table class="table table-striped  table-hover custom-css">
                  <thead>
                      <tr>
                      <th scope="col" className='tb-css'>Batch Number</th>
                      <th scope="col" className='tb-css'>Egg Specie</th>
                      <th scope="col" className='tb-css'>Client Name</th>
                      <th scope="col" className='tb-css'>Phone Number</th>
                      </tr>
                  </thead>

                  <tbody>
                      
                          {
                              tei.map((d,j)=>{
                                  
                                  return (
                                  <tr key={j} onClick={goToReceivingClass}>
                                  { d.slice(-4).map((p,l)=>{
                                      return <td scope='row' key={l} id={tei[j][0].split(",")[0]}>
                                          {p}
                                      </td>
      
                                      })}
                                  </tr>
                                  )
                              })
                              
                          }
                      
                      
                  </tbody>
                  
                  </table>
                 </div>
                 <div className='col-md-2'></div>
             
             </div>

</div>
  )
}
