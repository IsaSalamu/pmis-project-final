
import React  from 'react'
import Api from './apiController'

export default class HatcheryForm extends React.Component{

   
        state = {
            formDataElements:[],
            dataValues:[]
        }
   

    componentDidMount(){
        this.getDataElements()
      
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
        console.log(event.target);
        // const info = [a, b, c, d, e, f]
    }
    render(){
        let dataElements = this.state.formDataElements
        let form = dataElements.map((dataElement, key)=>{
                return (
                    <div class="mb-3" key={key}>
                       
                        <input type={dataElement.valueType.toLowerCase()} class="form-control" id={dataElement.id} aria-describedby={dataElement.formName} placeholder={dataElement.formName} onChange={this.submitToHatchery}/>
                        
                    </div>
                )
            })
        
        return(
            <>
                <div className=''>
                
                    <form>
                        {
                            form
                        }
                
    
                        </form>
              
                </div>
           
            </>
        )
    }
}