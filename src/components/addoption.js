import React from 'react';
import ReactDOM from 'react-dom'



export default class Optionsadd extends React.Component
{ state={
    error: undefined
}
    
  /*  constructor(props)
    {
        super(props);
        this.formsubmit=this.formsubmit.bind(this);
        this.state=
        {
              error: undefined
        }
    }*/
    formsubmit=(e)=>
    {
    e.preventDefault();
  
    const opt=e.target.elements.option.value.trim();
    e.target.elements.option.value='';
    const error=this.props.addoption(opt);
    this.setState(()=>({error}));
  
   // this.setState(()=>
   // {
  //      return {error}
  //  });

    }
    render()
    { 
        return <div>
        {this.state.error&&<p className='option-error'>{this.state.error}</p>}
               <form className='add-option' onSubmit={this.formsubmit}>
               <input className='add-option__input' type='text' name='option'></input>
               <button className='button'>Submit</button>
               </form>
                </div>
            
    
    }
}