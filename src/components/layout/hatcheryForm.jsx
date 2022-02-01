
import React  from 'react'
import Api from './apiController'

export default class HatcheryForm extends React.Component{

   
        state = {
            formDataElements:[],
            trackedEntityAttributes: [],
            dataValues:[]
        }
   

    componentDidMount(){
        this.getDataElements()
        this.submitForm()
        this.getPrograms()

      
    }

    getPrograms = () =>{
        Api.getThePrograms().then(data=>{
            this.setState({trackedEntityAttributes: data.programTrackedEntityAttributes})
            console.log(data.programTrackedEntityAttributes);
        })
    }
    submitForm =()=>{
        this.setState({dataValues : this.props.data})
       
    }

    getDataElements =()=>{
        Api.getTheDataElementsGroup().then(dataElements =>{
           
            this.setState({
                formDataElements : dataElements.dataElements
            })
        })
    }
    
    submitToHatchery =(event)=>{
        if (event.target.placeholder === "Date Entry") {

                console.log(event.target.value);
            
        }

    }
    render(){
        let tracked = this.state.trackedEntityAttributes
        let forms =()=>{
           return tracked.map((entity, key)=>{

                return (
                    <div className="mb-3" key={key}>
                       
                        <input type={entity.valueType.toLowerCase()} className="form-control" id={entity.id} aria-describedby={entity.displayName} placeholder={entity.displayName} onChange={this.submitToHatchery}/>
                        
                    </div>
                )
               
              
            })
        }
        
        
        return(
            <>
                <div className=''>
                
                    <form>
                        {/* {
                            forms()
                        } */}
                
    
                        </form>
              
                </div>
           
            </>
        )
    }
}