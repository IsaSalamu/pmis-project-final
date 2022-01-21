
import React  from 'react'
import Api from './apiController'

export default class HatcheryForm extends React.Component{

   
        state = {
            formDataElements:[],
            dataValues:[]
        }
   

    componentDidMount(){
        this.getDataElements()
        this.submitForm()

      
    }

    getPrograms = () =>{
        Api.getThePrograms().then(data=>{

            // console.log(data);
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
        let dataElements = this.state.formDataElements
        let forms =()=>{
           return dataElements.map((dataElement, key)=>{

               if (dataElement.valueType === "NUMBER") {
                return (
                    <div className="mb-3" key={key}>
                       
                        <input type={dataElement.valueType.toLowerCase()} min={0} className="form-control" id={dataElement.id} aria-describedby={dataElement.formName} placeholder={dataElement.formName} onChange={this.submitToHatchery}/>
                        
                    </div>
                )
               }else if (dataElement.formName === "Date Entry") {
                return (
                    <div className="mb-3" key={key}>
                        <div className='row'>
                        
                        <div className='col-md-4'>
                            <p>Date of Entry</p>
                        </div> 
                        <div className='col-md-8'>
                        <input type={dataElement.valueType.toLowerCase()} className="form-control" id={dataElement.id} aria-describedby={dataElement.formName} placeholder={dataElement.formName} onChange={this.submitToHatchery}/>

                        </div>
                        </div>
                       
                        
                    </div>
                )
               }
               else if(dataElement.formName === "Date Offloaded"){
                return (
                    <div className="mb-3" key={key}>
                        <div className='row'>
                        
                        <div className='col-md-4'>
                            <p>Offloading Date</p>
                        </div> 
                        <div className='col-md-8'>
                        <input type={dataElement.valueType.toLowerCase()} disabled className="form-control" id={dataElement.id} aria-describedby={dataElement.formName} onChange={this.submitToHatchery}/>

                        </div>
                        </div>
                       
                        
                    </div>
                )
               }
               else{
                return (
                    <div className="mb-3" key={key}>
                       
                        <input type={dataElement.valueType.toLowerCase()} className="form-control" id={dataElement.id} aria-describedby={dataElement.formName} placeholder={dataElement.formName} onChange={this.submitToHatchery}/>
                        
                    </div>
                )
               }
              
            })
        }
        
        
        return(
            <>
                <div className=''>
                
                    <form>
                        {
                            forms()
                        }
                
    
                        </form>
              
                </div>
           
            </>
        )
    }
}