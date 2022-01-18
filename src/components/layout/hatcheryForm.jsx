
import React  from 'react'
import Api from './apiController'

export default class HatcheryForm extends React.Component{

    componentDidMount(){
        this.getDataElements()
      
    }

    getPrograms = () =>{
        Api.getThePrograms().then(data=>{
            console.log(data);
        })
    }

    getDataElements =()=>{
        Api.getTheDataElementsGroup().then(dataElements =>{
            console.log(dataElements);
        })
    }
    
    render(){
        return(
            <>
                <p>Hatchery</p>
            </>
        )
    }
}